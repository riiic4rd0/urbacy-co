import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: 'STARTER',
      subtitle: '1 Modul',
      color: 'bg-green-600',
      borderColor: 'border-green-500',
      price: 'ab 390€',
      priceDetail: 'einmalig',
      monthly: 'ab 89€/Monat',
      features: [
        'Kostenloses Erstgespräch (15-30 Min)',
        'Quick-Offer mit Preisrahmen',
        '1 KI-Modul Ihrer Wahl',
        'Basis-Setup & API-Konfiguration',
        'Testing & Feinjustierung',
        'Screencast-Tutorial',
        'Technisches Setup-PDF',
        'Go-Live mit 2 Wochen Monitoring'
      ],
      result: 'Schneller Einstieg in KI-Automation',
      included: 'Basisanalyse & Setup (ab 349€) + 1 Modul (ab 179€)'
    },
    {
      name: 'SMALL BUSINESS',
      subtitle: '2 Module',
      color: 'bg-blue-600',
      borderColor: 'border-blue-500',
      price: 'ab 690€',
      priceDetail: 'einmalig',
      monthly: 'ab 89€/Monat',
      popular: true,
      features: [
        'Alles aus STARTER',
        '2 KI-Module kombiniert',
        'Analyse/Audit (2-5 Std)',
        'Prozessaufnahme & KPI-Baseline',
        'Executive Summary',
        'Erweiterte Integration',
        'Nutzer-Cheat-Sheet',
        'Priorisierter Support'
      ],
      result: 'Optimale Kombination für Effizienzgewinn',
      included: 'Basisanalyse + 2 Module'
    },
    {
      name: 'BUSINESS',
      subtitle: '3 Module',
      color: 'bg-purple-600',
      borderColor: 'border-purple-500',
      price: 'ab 990€',
      priceDetail: 'einmalig',
      monthly: 'ab 139€/Monat',
      features: [
        'Alles aus SMALL BUSINESS',
        '3 KI-Module voll integriert',
        'Konzeption (1-3 Std)',
        'Architekturdiagramm',
        'Security Checklist',
        'CRM/Kalender/Shop Integration',
        'Monatlicher Performance-Report',
        'Feedback-Schleife'
      ],
      result: 'Umfassende Prozess-Automatisierung',
      included: 'Basisanalyse + 3 Module'
    },
    {
      name: 'SCALE',
      subtitle: '4-5 Module',
      color: 'bg-orange-600',
      borderColor: 'border-orange-500',
      price: 'ab 1.290€',
      priceDetail: 'einmalig (4 Module)',
      monthly: 'ab 139-179€/Monat',
      features: [
        'Alles aus BUSINESS',
        '4-5 KI-Module kombiniert',
        'Datentransfer-Matrix',
        'End-to-End Workflows',
        'Make/Zapier Flow-Orchestrierung',
        'Voice-Setup (ElevenLabs)',
        'Komplette System-Integration',
        'SLA-Option verfügbar'
      ],
      result: 'Enterprise-Level Automation',
      included: '4 Module: ab 1.290€ | 5 Module: ab 1.590€'
    }
  ];

  const addons = [
    { name: 'Erweiterte Workflows', price: 'ab 129€', per: 'pro Flow' },
    { name: 'KPI-Dashboard', price: 'ab 179€', per: 'einmalig' },
    { name: 'Voice-Design (TTS Tuning)', price: 'ab 149€', per: 'einmalig' },
    { name: 'Technisch-organisatorisches PDF', price: 'ab 249-590€', per: 'je nach Umfang' }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(126,87,194,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere Pakete</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Modulares System — ab 390€ einmalig + ab 89€/Monat Betreuung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 border-2 rounded-2xl p-6 transition-all duration-500 hover:transform hover:scale-105 ${
                pkg.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20' 
                  : pkg.borderColor + ' hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Beliebt
                </div>
              )}
              
              <div className="mb-6">
                <div className={`inline-block px-3 py-1 rounded-lg text-white text-sm font-bold mb-3 ${pkg.color} shadow-lg`}>
                  {pkg.name}
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.subtitle}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 text-xs ml-2">{pkg.priceDetail}</span>
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  + {pkg.monthly} Betreuung
                </div>
                <div className="text-xs text-gray-500">
                  {pkg.included}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-xs">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-400 mb-4">
                  <strong className="text-blue-400">Ergebnis:</strong> {pkg.result}
                </p>
                <button 
                  onClick={() => navigate('/kontakt')}
                  className={`w-full py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 ${
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

        {/* Add-ons Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Optional: Add-ons</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {addons.map((addon, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-white">{addon.name}</h4>
                  <p className="text-xs text-gray-400">{addon.per}</p>
                </div>
                <div className="text-blue-400 font-bold">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bundle Angebot */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-2 border-yellow-500 rounded-2xl p-8 text-center">
            <div className="inline-block bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              SONDERANGEBOT
            </div>
            <h3 className="text-3xl font-bold mb-4">Complete Bundle</h3>
            <p className="text-xl text-gray-300 mb-4">
              Analyse + 3 Module + Compliance-PDF + 1 Monat Betreuung
            </p>
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">
              ab 1.099€
            </div>
            <button
              onClick={() => navigate('/kontakt')}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Bundle anfragen
            </button>
          </div>
        </div>

        {/* Managed Automation */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Managed Automation (Monatliche Betreuung)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">LITE</h4>
              <p className="text-gray-400 text-sm mb-4">1-2 Module</p>
              <div className="text-3xl font-bold text-blue-400 mb-4">ab 89€</div>
              <p className="text-xs text-gray-500">pro Monat</p>
              <ul className="text-left text-xs text-gray-400 mt-4 space-y-2">
                <li>✓ Monitoring & Error-Handling</li>
                <li>✓ Kleine Anpassungen</li>
                <li>✓ Monatlicher Kurzreport</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 border-2 border-blue-500 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">STANDARD</h4>
              <p className="text-gray-400 text-sm mb-4">3-4 Module</p>
              <div className="text-3xl font-bold text-blue-400 mb-4">ab 139€</div>
              <p className="text-xs text-gray-500">pro Monat</p>
              <ul className="text-left text-xs text-gray-400 mt-4 space-y-2">
                <li>✓ Alles aus LITE</li>
                <li>✓ Performance-Checks</li>
                <li>✓ Prompt-Updates</li>
                <li>✓ Priority Support</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">PREMIUM</h4>
              <p className="text-gray-400 text-sm mb-4">5+ Module</p>
              <div className="text-3xl font-bold text-blue-400 mb-4">ab 179€</div>
              <p className="text-xs text-gray-500">pro Monat</p>
              <ul className="text-left text-xs text-gray-400 mt-4 space-y-2">
                <li>✓ Alles aus STANDARD</li>
                <li>✓ SLA-Option</li>
                <li>✓ Dedizierter Support</li>
                <li>✓ Proaktive Optimierung</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Alle Preise sind Startpreise. Finaler Preis abhängig von Komplexität und Integration.<br />
            Bei komplexen Integrationen: +100-400€ pro Modul
          </p>
          <button
            onClick={() => navigate('/kontakt')}
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Kostenloses Erstgespräch vereinbaren (15-30 Min) →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;