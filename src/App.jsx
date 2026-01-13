import Hero from './components/Hero';
import Stats2025 from './components/Stats2025';
import MapSection from './components/MapSection';
import Plan2026 from './components/Plan2026';
import PresidentActivities from './components/PresidentActivities';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <Stats2025 />
      <PresidentActivities />
      <MapSection />
      <Plan2026 />

      <footer className="py-8 text-center text-slate-500 text-sm">
        &copy; 2026 새우깡 동호회. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
