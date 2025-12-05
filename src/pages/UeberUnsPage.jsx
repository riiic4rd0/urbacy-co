import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Target, Users, Lightbulb, ArrowRight } from 'lucide-react';

const UeberUnsPage = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return;

      const cards = document.querySelectorAll('.value-card-page');
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
      title: 'Einfachheit',
      description: 'KI soll für jeden verständlich und nutzbar sein — ohne technisches Vorwissen, ohne lange Einarbeitung.'
    },
    {
      icon: Target,
      title: 'Effizienz',
      description: 'Zeit sparen, Routineaufgaben automatisieren. Fokus auf messbare Ergebnisse und echte Zeitersparnis.'
    },
    {
      icon: Users,
      title: 'Zuverlässigkeit',
      description: 'Stabile Systeme, klare Betreuung. Wir sind da, wenn Sie uns brauchen — schnell und unkompliziert.'
    },
    {
      icon: Lightbulb,
      title: 'Pragmatismus',
      description: 'Keine Theorie, sondern sofort nutzbare Lösungen. Was funktioniert, wird umgesetzt.'
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,136,229,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Über <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Urbacy Co.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Wir bringen KI in den Alltag kleiner Unternehmen — schnell, sicher und ohne technischen Aufwand.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Unsere Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Urbacy Co. macht moderne KI-Automatisierung für kleine und mittlere Unternehmen zugänglich. 
                Keine monatelangen Projekte, keine überteuerten Agenturen — einfach funktionierende Lösungen, 
                die sofort Zeit und Geld sparen.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Was uns antreibt</h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">KI für alle:</strong> Jedes kleine Unternehmen sollte von KI profitieren können — 
                  unabhängig von Budget oder technischem Know-how.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Pragmatismus statt Buzzwords:</strong> Wir verkaufen keine Vision, 
                  sondern funktionierende Systeme. Was heute Zeit spart, wird implementiert.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Langfristige Partnerschaften:</strong> Wir sind nicht nur für die Installation da, 
                  sondern begleiten Sie bei Updates, Anpassungen und Weiterentwicklungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Unsere Werte</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={index}
                  className={`value-card-page bg-gray-900/50 border rounded-xl p-8 transition-all duration-500 ${
                    isActive 
                      ? 'border-blue-500 shadow-2xl shadow-blue-500/30 scale-105 md:scale-100' 
                      : 'border-gray-700 hover:border-blue-500 hover:transform hover:scale-105'
                  }`}
                >
                  <div className={`mb-4 transition-all duration-300 ${
                    isActive ? 'text-blue-400 scale-110' : 'text-blue-400'
                  }`}>
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  <div className={`mt-4 text-blue-400 text-sm font-semibold transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}>
                    Mehr erfahren →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Wer wir sind</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expertise in KI-Implementierung und Automatisierung
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12">
              <div className="md:flex gap-8 items-start">
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold">
                    RU
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">Ricardo Urban</h3>
                  <p className="text-blue-400 text-lg mb-4">Gründer & KI-Spezialist</p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Experte für KI-Automatisierung, Make.com/Zapier-Workflows und praktische Implementation 
                    von GPT/Claude-Systemen für kleine Unternehmen. Fokus auf schnelle, pragmatische Lösungen.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-400">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['KI-Automation', 'Workflow-Design', 'API-Integration', 'Telefon-KI'].map((skill, i) => (
                        <span
                          key={i}
                          className="bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-lg text-sm text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positionierung */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Unsere Positionierung</h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              &quot;Urbacy Co. bringt moderne KI in den Alltag kleiner Unternehmen — schnell, sicher und ohne technischen Aufwand.&quot;
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                <div className="text-blue-400 mb-4">
                  <Zap size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2">Schnell</h3>
                <p className="text-gray-400">Live in Tagen, nicht Monaten</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                <div className="text-blue-400 mb-4">
                  <Target size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2">Bezahlbar</h3>
                <p className="text-gray-400">Ab 390€ starten</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                <div className="text-blue-400 mb-4">
                  <Lightbulb size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2">Pragmatisch</h3>
                <p className="text-gray-400">Nur was wirklich hilft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bereit für KI-Automatisierung?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Lassen Sie uns in 15 Minuten klären, welches Modul Ihnen am meisten Zeit spart
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/kontakt')}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
              >
                Kostenloses Erstgespräch <ArrowRight size={20} />
              </button>
              <button
                onClick={() => navigate('/preise')}
                className="border-2 border-blue-600 hover:bg-blue-600/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Module & Preise ansehen
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UeberUnsPage;