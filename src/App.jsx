import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CookieBanner from './components/layout/CookieBanner';
import ScrollToTop from './components/layout/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const LeistungenPage = lazy(() => import('./pages/LeistungenPage'));
const PreisePage = lazy(() => import('./pages/PreisePage'));
const KontaktPage = lazy(() => import('./pages/KontaktPage'));
const UeberUnsPage = lazy(() => import('./pages/UeberUnsPage'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'));
const AGBPage = lazy(() => import('./pages/AGBPage'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leistungen" element={<LeistungenPage />} />
            <Route path="/preise" element={<PreisePage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/ueber-uns" element={<UeberUnsPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/agb" element={<AGBPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;