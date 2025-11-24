import { useState } from 'react';
import { X } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Data Act Readiness',
      description: 'Bereiten Sie Ihr Unternehmen optimal auf die EU-Vorgaben vor',
      icon: '📊',
      details: {
        intro: 'Der EU Data Act tritt 2025 in Kraft und verpflichtet Unternehmen, Daten strukturiert und sicher zu verwalten. Wir bereiten Sie optimal darauf vor.',
        features: [
          'Ersteinschätzung Ihrer aktuellen Datenprozesse',
          'Gap-Analyse zur Identifikation von Handlungsfeldern',
          'Erstellung einer individuellen Compliance-Roadmap',
          'Handlungsempfehlungen als strukturierter PDF-Report',
          '60-minütiger Beratungscall mit unseren Experten'
        ],
        benefits: [
          'Vermeidung von Bußgeldern (bis zu 4% des Jahresumsatzes)',
          'Rechtssichere Datenverwaltung',
          'Wettbewerbsvorteil durch frühe Compliance',
          'Transparente Prozesse für Ihre Kunden'
        ]
      }
    },
    {
      title: 'DSGVO & Datenschutz',
      description: 'Vollständige datenschutzrechtliche Absicherung',
      icon: '🔒',
      details: {
        intro: 'Die DSGVO ist seit 2018 in Kraft, doch viele Unternehmen haben noch Nachholbedarf. Wir sorgen für vollständige Compliance.',
        features: [
          'DSGVO-Compliance-Audit Ihrer Systeme und Prozesse',
          'Erstellung/Prüfung des Verzeichnisses von Verarbeitungstätigkeiten (VVT)',
          'Durchführung von Datenschutz-Folgenabschätzungen (DSFA)',
          'Auftragsverarbeitungsverträge (AVV) mit Dienstleistern',
          'Technische und organisatorische Maßnahmen (TOM)'
        ],
        benefits: [
          'Schutz vor Bußgeldern und Abmahnungen',
          'Vertrauen Ihrer Kunden stärken',
          'Rechtssichere Dokumentation',
          'Audit-ready Compliance'
        ]
      }
    },
    {
      title: 'KI-Integration',
      description: 'Rechtssichere Integration moderner KI-Systeme',
      icon: '🤖',
      details: {
        intro: 'Künstliche Intelligenz bietet enormes Potenzial – muss aber rechtssicher und datenschutzkonform eingesetzt werden.',
        features: [
          'KI-Strategie-Entwicklung & Use-Case-Analyse',
          'Compliance-Check Ihrer geplanten KI-Systeme',
          'Integration in bestehende Workflows',
          'Aufbau einer KI-Governance-Struktur',
          'Schulung Ihrer Mitarbeiter im KI-Einsatz'
        ],
        benefits: [
          'Effizienzsteigerung durch Automatisierung',
          'Rechtssichere KI-Nutzung',
          'Competitive Advantage durch Innovation',
          'Skalierbare Prozesse'
        ]
      }
    },
    {
      title: 'Managed Compliance',
      description: 'Laufende Compliance-Betreuung und Monitoring',
      icon: '⚙️',
      details: {
        intro: 'Compliance ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Wir begleiten Sie dauerhaft.',
        features: [
          'Monatliche Compliance-Checks',
          'Gesetzesänderungs-Monitoring',
          'Incident-Response Support bei Vorfällen',
          'Status-Dashboards & Reports',
          'Persönlicher Compliance-Berater als Ansprechpartner'
        ],
        benefits: [
          'Dauerhafte Rechtssicherheit',
          'Frühzeitige Risiko-Erkennung',
          'Keine eigenen Compliance-Ressourcen nötig',
          'Immer auf dem neuesten Stand'
        ]
      }
    },
    {
      title: 'Workshops & Schulung',
      description: 'Bald verfügbar',
      icon: '📚',
      comingSoon: true
    },
    {
      title: 'Automatisierung & APIs',
      description: 'Integration von GPT, Twilio, Make.com & mehr',
      icon: '🔗',
      details: {
        intro: 'Automatisieren Sie wiederkehrende Prozesse und integrieren Sie moderne APIs für maximale Effizienz.',
        features: [
          'Integration von ChatGPT/Claude in Ihre Systeme',
          'Twilio-Anbindung für SMS/WhatsApp-Automation',
          'Make.com/Zapier Workflow-Automatisierung',
          'Custom API-Entwicklung',
          'Datenbank-Integration & Synchronisation'
        ],
        benefits: [
          'Zeitersparnis durch Automatisierung',
          'Reduzierung manueller Fehler',
          'Skalierbare Prozesse',
          'Bessere Kundenkommunikation'
        ]
      }
    }
  ];

  const handleServiceClick = (service) => {
    if (service.comingSoon) return;
    setSelectedService(service);
  };

  const ServiceModal = ({ service, onClose }) => (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      style={{
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      <div 
        className="bg-gray-900 border-2 border-blue-500 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'slideUp 0.4s ease-out'
        }}
      >
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <h3 className="text-3xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400 mt-1">{service.description}</p>
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
          <div>
            <p className="text-gray-300 leading-relaxed text-lg">
              {service.details.intro}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-400">Was wir bieten:</h4>
            <ul className="space-y-3">
              {service.details.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-400">Ihre Vorteile:</h4>
            <ul className="space-y-3">
              {service.details.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-700">
            <button
              onClick={onClose}
              className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Jetzt Beratung anfragen
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,136,229,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere Kernleistungen</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Umfassende Lösungen für Ihre digitale Transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service)}
                className={`group bg-gray-900/50 border border-gray-700 rounded-xl p-6 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
                  service.comingSoon 
                    ? 'opacity-60 cursor-not-allowed' 
                    : 'hover:border-blue-500 hover:shadow-blue-500/20 cursor-pointer'
                }`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  service.comingSoon ? 'text-gray-400' : 'group-hover:text-blue-400'
                }`}>
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
                {!service.comingSoon && (
                  <div className="mt-4 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Klicken für mehr Details →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Services;