import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Atmosphere } from './components/Atmosphere';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

const ClosedBeta = lazy(() =>
  import('./pages/ClosedBeta').then((module) => ({ default: module.ClosedBeta })),
);
const Community = lazy(() =>
  import('./pages/Community').then((module) => ({ default: module.Community })),
);
const LegacyOfMindSoulslike = lazy(() =>
  import('./pages/LegacyOfMindSoulslike').then((module) => ({ default: module.LegacyOfMindSoulslike })),
);
const MyStory = lazy(() =>
  import('./pages/MyStory').then((module) => ({ default: module.MyStory })),
);
const SubmissionsDashboard = lazy(() =>
  import('./pages/SubmissionsDashboard').then((module) => ({ default: module.SubmissionsDashboard })),
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-stone">
      <Atmosphere />
      <Navbar />
      <Suspense fallback={<main className="min-h-[70vh]" aria-label="Loading page" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/closed-beta" element={<ClosedBeta />} />
          <Route path="/community" element={<Community />} />
          <Route path="/my-story" element={<MyStory />} />
          <Route path="/legacy-of-mind-dark-fps-soulslike" element={<LegacyOfMindSoulslike />} />
          <Route path="/submissions-dashboard" element={<SubmissionsDashboard />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
