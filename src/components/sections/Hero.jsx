import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Content wird sichtbar nach 200px scrollen
      setShowContent(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Berechnungen für Animation
  const logoOpacity = Math.max(0, 1 - scrollY / 300);
  const logoScale = Math.max(0.3, 1 - scrollY / 800);
  const contentOpacity = Math.min(1, (scrollY - 200) / 200);
  const contentTranslateY = Math.max(0, 100 - scrollY);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,136,229,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,136,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,136,229,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Großes zentrales Logo - verschwindet beim Scrollen */}
      <div 
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transition-all duration-300"
        style={{
          opacity: logoOpacity,
          scale: logoScale,
        }}
      >
        <div className="flex flex-col items-center gap-8">
          <img 
            src="/assets/UrbacyLogo-Blue.png" 
            alt="Urbacy Co. Logo" 
            className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-2xl"
          />
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Urbacy Co.
            </h1>
            <p className="text-xl md:text-2xl text-blue-400">
              Data & AI Solutions for the New Digital Era
            </p>
          </div>
        </div>
      </div>

      {/* Hauptinhalt - erscheint beim Scrollen */}
      <div 
        className="container mx-auto px-4 relative z-10 text-center transition-all duration-500"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentTranslateY}px)`,
          pointerEvents: showContent ? 'auto' : 'none'
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4">
            Data & AI Solutions for the New Digital Era
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Ihre KI-Integration<br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              rechtskonform & sicher
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Wir begleiten Sie bei der Integration von KI und der Umsetzung von Data Act & DSGVO
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={() => onNavigate('/preise')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              Pakete ansehen <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('/kontakt')}
              className="border-2 border-blue-600 hover:bg-blue-600/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Kostenlose Beratung
            </button>
          </div>
        </div>
      </div>

      {/* Scroll-Indikator - nur sichtbar wenn Logo noch da ist */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          opacity: Math.max(0, 1 - scrollY / 100)
        }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scrollen Sie nach unten</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;