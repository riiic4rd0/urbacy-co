import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo verschwindet komplett bei 100vh scroll
  const logoOpacity = scrollY < window.innerHeight ? Math.max(0, 1 - scrollY / (window.innerHeight * 0.8)) : 0;
  
  // Content schiebt sich von unten nach oben
  const contentTranslateY = Math.max(0, window.innerHeight - scrollY);
  
  // Logo-Section wird unsichtbar und deaktiviert nach dem Scrollen
  const logoSectionVisible = scrollY < window.innerHeight * 1.5;

  return (
    <>
      {/* Logo-Section - Fixiert und verschwindet, wird komplett deaktiviert */}
      {logoSectionVisible && (
        <section className="h-screen flex items-center justify-center overflow-hidden fixed top-0 left-0 right-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,136,229,0.15),transparent_50%)]" />
          
          {/* Nur das Logo - ohne Text */}
          <div 
            className="relative z-10 transition-opacity duration-300"
            style={{
              opacity: logoOpacity,
            }}
          >
            <img 
              src="/assets/UrbacyLogo-Blue.png" 
              alt="Urbacy Co." 
              className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Scroll-Indikator - Komplett zentriert */}
          <div 
            className="absolute bottom-8 left-0 right-0 w-full transition-opacity duration-300"
            style={{
              opacity: logoOpacity
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 text-gray-400 mx-auto w-full">
              <span className="text-sm text-center">Scrollen Sie nach unten</span>
              <svg 
                className="w-6 h-6 mx-auto animate-bounce" 
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
      )}

      {/* Spacer für die fixierte Logo-Section */}
      <div className="h-screen" />

      {/* Content-Section - Schiebt sich von unten hoch, nahtloser Übergang */}
      <section 
        className="min-h-screen flex items-center justify-center relative z-10 bg-gray-900"
        style={{
          transform: `translateY(${contentTranslateY}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,136,229,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,136,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,136,229,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center py-24">
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
      </section>
    </>
  );
};

export default Hero;