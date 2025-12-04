import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Target } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return;

      const cards = document.querySelectorAll('.value-card');
      const windowCenter = window.innerHeight / 2;
      let closestIndex = -1;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - windowCenter);

        if (distance < closestDistance && rect.top < windowCenter && rect.bottom > windowCenter) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: Zap,
      title: 'Einfachheit & Geschwindigkeit',
      description: 'KI-Lösungen, die sofort funktionieren. Keine komplexen Setups, keine monatelange Implementierung.'
    },
    {
      icon: Target,
      title: 'Praxisnah & Effizient',
      description: 'Fokus auf messbare Zeitersparnis. Automatisierung, die wirklich Arbeit abnimmt.'
    }
  ];

  const handleCardClick = () => {
    navigate('/ueber-uns');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-800/50 to-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,136,229,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Warum Urbacy Co.?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Urbacy Co. macht KI für kleine Unternehmen nutzbar — ohne technischen Aufwand, 
            ohne lange Projektlaufzeiten. Einfach, schnell und bezahlbar.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const isActive = activeIndex === index;
              
              return (
                <div 
                  key={index}
                  onClick={handleCardClick}
                  className={`value-card group bg-gray-900/50 p-8 rounded-xl border transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'border-blue-500 shadow-2xl shadow-blue-500/30 scale-105 md:scale-100' 
                      : 'border-gray-700 hover:border-blue-500 hover:transform hover:scale-105'
                  }`}
                >
                  <div className={`mb-4 transition-all duration-300 ${
                    isActive ? 'text-blue-400 scale-110' : 'text-blue-400 group-hover:scale-110'
                  }`}>
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                  <div className={`mt-4 text-blue-400 text-sm font-semibold transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    Mehr erfahren →
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => navigate('/ueber-uns')}
            className="mt-12 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            Mehr über uns erfahren
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;