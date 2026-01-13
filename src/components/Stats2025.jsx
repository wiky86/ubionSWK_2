import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Stats2025 = () => {
    const [visited, setVisited] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}assets/data/visited_2025.json?t=${new Date().getTime()}`)
            .then(res => res.json())
            .then(data => setVisited(data))
            .catch(err => console.error("Failed to load visited data", err));
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="stats" className="py-20 px-4 bg-slate-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">2025년 활동 하이라이트</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visited.map((place, index) => (
                        <motion.div
                            key={place.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <div
                                className="h-48 bg-slate-600 overflow-hidden cursor-pointer"
                                onClick={() => setSelectedImage(place)}
                            >
                                {/* Placeholder for image if not found, or actual image */}
                                <img
                                    src={place.image.startsWith('http') ? place.image : `${import.meta.env.BASE_URL}${place.image.replace(/^\//, '')}`}
                                    alt={place.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=No+Image' }}
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-blue-400 mb-2">{place.date}</div>
                                <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                                <p className="text-slate-300">{place.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Popup Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
                        <img
                            src={selectedImage.image.startsWith('http') ? selectedImage.image : `${import.meta.env.BASE_URL}${selectedImage.image.replace(/^\//, '')}`}
                            alt={selectedImage.name}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                        <p className="text-white mt-4 text-xl font-bold">{selectedImage.name}</p>
                        <button
                            className="absolute top-[-40px] right-0 text-white hover:text-gray-300"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Stats2025;
