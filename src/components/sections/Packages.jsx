import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: 'BASIC',
      subtitle: 'Data Act Readiness',
      color: 'bg-green-600',
      borderColor: 'border-green-500',
      price: 'ab 299€',
      priceDetail: 'einmalig',
      features: [
        'Ersteinschätzung Data Act Readiness',
        'Gap-Analyse Datenprozesse',
        'Individuelle Compliance-Roadmap',
        'Handlungsempfehlungen (PDF)',
        '60-Min Beratungscall'
      ],
      result: 'Klare Übersicht über Handlungsfelder'
    },
    {
      name: 'ERWEITERT',
      subtitle: 'DSGVO-Compliance',
      color: 'bg-blue-600',
      borderColor: 'border-blue-500',
      price: 'ab 749€',
      priceDetail: 'einmalig',
      popular: true,
      features: [
        'Alles aus BASIC',
        'DSGVO-Compliance-Audit',
        'VVT-Erstellung / Prüfung',
        'DSFA-Durchführung',
        'Auftragsverarbeitungsverträge (AVV)',
        'Technische DSGVO-Umsetzung'
      ],
      result: 'Audit-sichere Datenschutzprozesse'
    },
    {
      name: 'KI-INTEGRATION',
      subtitle: 'AI & Beratung',
      color: 'bg-purple-600',
      borderColor: 'border-purple-500',
      price: 'ab 999€',
      priceDetail: 'Add-on',
      features: [
        'KI-Strategie & Use-Case-Analyse',
        'Compliance-Check KI-Systeme',
        'Prozessintegration',
        'KI-Governance-Struktur',
        'Rechtssichere Implementation'
      ],
      result: 'Effiziente & sichere KI-Nutzung'
    },
    {
      name: 'MANAGED',
      subtitle: 'Compliance Betreuung',
      color: 'bg-teal-600',
      borderColor: 'border-teal-500',
      price: 'ab 199€',
      priceDetail: '/ Monat',
      features: [
        'Monatliche Compliance-Checks',
        'Gesetzesänderungs-Monitoring',
        'Incident-Response Support',
        'Status-Dashboards & Reports',
        'Persönlicher Compliance-Berater'
      ],
      result: 'Dauerhafte Rechtssicherheit'
    },
    {
      name: 'PREMIUM',
      subtitle: 'Complete Suite',
      color: 'bg-yellow-600',
      borderColor: 'border-yellow-500',
      price: 'ab 1.999€',
      priceDetail: 'einmalig + 249€/Monat',
      features: [
        'Data Act Readiness',
        'DSGVO-Compliance-Audit',
        'KI-Integration & Beratung',
        'Komplette Data-Governance',
        'Mitarbeiterschulungen',
        'Persönliche Projektbetreuung'
      ],
      result: 'Enterprise-Level Compliance & AI'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(126,87,194,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere Pakete</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Wählen Sie die perfekte Lösung für Ihr Unternehmen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 border-2 rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105 ${
                pkg.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20' 
                  : pkg.borderColor + ' hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Empfohlen
                </div>
              )}
              
              <div className="mb-6">
                <div className={`inline-block px-3 py-1 rounded-lg text-white text-sm font-bold mb-3 ${pkg.color} shadow-lg`}>
                  {pkg.name}
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.subtitle}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400">{pkg.priceDetail}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-4">
                  <strong className="text-blue-400">Ergebnis:</strong> {pkg.result}
                </p>
                <button 
                  onClick={() => navigate('/kontakt')}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Jetzt anfragen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;