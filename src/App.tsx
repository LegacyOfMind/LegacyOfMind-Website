import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Atmosphere } from './components/Atmosphere';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ClosedBeta } from './pages/ClosedBeta';
import { Community } from './pages/Community';
import { Home } from './pages/Home';
import { SubmissionsDashboard } from './pages/SubmissionsDashboard';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-stone">
      <Atmosphere />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/closed-beta" element={<ClosedBeta />} />
        <Route path="/community" element={<Community />} />
        <Route path="/submissions-dashboard" element={<SubmissionsDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}
