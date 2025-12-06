import { useState, useEffect } from 'react';
import { Mail, MessageSquare, MessageCircle, Phone, Bot, Workflow, X } from 'lucide-react';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return;

      const cards = document.querySelectorAll('.service-card');
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

  const services = [
    {
      title: 'E-Mail Automation',
      description: 'Priorisierung, Canned Responses, Follow-Ups',
      icon: Mail,
      details: {
        intro: 'Intelligente E-Mail-Verarbeitung mit KI — automatische Sortierung, Priorisierung und Antworten.',
        features: [
          'Automatische E-Mail-Kategorisierung (wichtig/unwichtig)',
          'KI-generierte Antwortvorschläge',
          'Auto-Reply für häufige Anfragen (FAQ)',
          'Follow-Up-Erinnerungen',
          'Integration mit Ihrem bestehenden E-Mail-System'
        ],
        result: 'Typische Zeitersparnis: 5-10 Stunden pro Woche'
      }
    },
    {
      title: 'WhatsApp Automation',
      description: 'API-Bot, FAQ, Terminbuchung',
      icon: MessageSquare,
      details: {
        intro: '24/7 WhatsApp-Bot über offizielle Business API — beantwortet Kundenanfragen automatisch.',
        features: [
          'WhatsApp Business API Setup',
          'KI-Bot für FAQ und Standardanfragen',
          'Terminbuchung direkt über WhatsApp',
          'Weiterleitung komplexer Anfragen an Menschen',
          'Automatische Bestätigungen & Erinnerungen'
        ],
        result: 'Ideal für: Restaurants, Handwerker, Dienstleister mit hohem Anfrageaufkommen'
      }
    },
    {
      title: 'Webchat-KI',
      description: 'Website-Chat mit KI-Backend',
      icon: MessageCircle,
      details: {
        intro: 'Intelligenter Chat-Widget auf Ihrer Website — beantwortet Besucherfragen rund um die Uhr.',
        features: [
          'Chat-Widget-Integration auf Ihrer Website',
          'Training auf Ihre Produkte/Dienstleistungen',
          'Automatische Lead-Erfassung',
          'Übergabe an Menschen bei Bedarf',
          'Chat-Verlauf & Analytics'
        ],
        result: 'Effekt: Höhere Conversion, weniger verpasste Anfragen'
      }
    },
    {
      title: 'Telefon-KI',
      description: 'Anrufannahme, Terminbuchung, Gesprächszusammenfassungen',
      icon: Phone,
      details: {
        intro: 'KI-gestützte Anrufannahme — nimmt Anrufe entgegen, beantwortet Fragen und vereinbart Termine.',
        features: [
          'Telefon-KI mit natürlicher Stimme (deutsch)',
          'Anrufannahme außerhalb Geschäftszeiten',
          'Terminvereinbarung mit Kalender-Sync',
          'Weiterleitung wichtiger Anrufe',
          'Gesprächszusammenfassungen per E-Mail'
        ],
        result: 'Ideal für: Praxen, Kanzleien, Handwerksbetriebe'
      }
    },
    {
      title: 'Interner Assistent',
      description: 'Recherche, Angebotserstellung, Prozess-Support',
      icon: Bot,
      details: {
        intro: 'Ihr persönlicher KI-Mitarbeiter für Recherchen, Texterstellung und interne Workflows.',
        features: [
          'Firmen-Wissensdatenbank mit KI-Zugriff',
          'Automatische Angebotserstellung',
          'Dokumenten-Templates generieren',
          'Interne Recherche-Unterstützung',
          'E-Mail-Entwürfe & Texte erstellen'
        ],
        result: 'Nutzen: Weniger Routinearbeit, mehr Zeit für Kerngeschäft'
      }
    },
    {
      title: 'CRM-Verknüpfung',
      description: 'Automatische Lead-Erstellung & Status-Updates',
      icon: Workflow,
      details: {
        intro: 'Automatische Synchronisation zwischen KI-Systemen und Ihrem CRM — Leads, Kontakte und Status immer aktuell.',
        features: [
          'Automatische Lead-Erstellung aus Anfragen',
          'Status-Updates in Echtzeit',
          'Kontakt-Synchronisation',
          'Activity-Tracking (Anrufe, E-Mails, Chats)',
          'Custom-Field-Mapping'
        ],
        result: 'Kompatibel mit: HubSpot, Pipedrive, Salesforce, Zoho, Google Sheets'
      }
    }
  ];

  const ModuleModal = ({ module, onClose }) => {
    const IconComponent = module.icon;
    
    return (
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className="bg-gray-900 border-2 border-blue-500 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <IconComponent size={40} className="text-blue-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">{module.title}</h3>
                <p className="text-gray-400 mt-1">{module.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              {module.details.intro}
            </p>

            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-400">Was wir liefern:</h4>
              <ul className="space-y-3">
                {module.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <p className="text-blue-300">
                <strong>Ergebnis:</strong> {module.details.result}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <button
                onClick={onClose}
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,136,229,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere KI-Module</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Klicken Sie auf ein Modul für detaillierte Informationen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={index}
                  onClick={() => setSelectedModule(service)}
                  className={`service-card group bg-gray-900/50 border rounded-xl p-6 transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'border-blue-500 shadow-2xl shadow-blue-500/30 scale-105 md:scale-100' 
                      : 'border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105'
                  }`}
                >
                  <div className={`mb-4 transition-all duration-300 ${
                    isActive ? 'text-blue-400 scale-110' : 'text-blue-400 group-hover:scale-110'
                  }`}>
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 transition-colors ${
                    isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                  <div className={`mt-4 text-blue-400 text-sm font-semibold transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    Mehr erfahren →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedModule && (
        <ModuleModal 
          module={selectedModule} 
          onClose={() => setSelectedModule(null)} 
        />
      )}
    </>
  );
};

export default Services;