import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CookieBanner from './components/layout/CookieBanner';

const HomePage = lazy(() => import('./pages/HomePage'));
const LeistungenPage = lazy(() => import('./pages/LeistungenPage'));
const PreisePage = lazy(() => import('./pages/PreisePage'));
const KontaktPage = lazy(() => import('./pages/KontaktPage'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leistungen" element={<LeistungenPage />} />
            <Route path="/preise" element={<PreisePage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;