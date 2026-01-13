import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PresidentActivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}assets/data/president_2025.json?t=${new Date().getTime()}`)
            .then(res => res.json())
            .then(data => setActivities(data))
            .catch(err => console.error("Failed to load president activities", err));
    }, []);

    return (
        <section className="py-20 px-4 bg-slate-900 border-t border-slate-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center text-emerald-400">회장님 단독 활동</h2>
                <p className="text-center text-slate-400 mb-12">동호회 활동 외에도 서울 곳곳을 누비신 회장님의 발자취</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-500 transition-colors"
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-2xl font-bold text-white bg-emerald-600 px-3 py-1 rounded-lg">
                                    {item.month}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {item.activities.map((activity, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm border border-slate-600"
                                    >
                                        {activity}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PresidentActivities;
