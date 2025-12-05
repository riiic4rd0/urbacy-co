import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const navigate = useNavigate();

  const modules = [
    { name: 'E-Mail Automation', basePrice: 179 },
    { name: 'WhatsApp Automation', basePrice: 179 },
    { name: 'Webchat-KI', basePrice: 179 },
    { name: 'Telefon-KI', basePrice: 179 },
    { name: 'Interner Assistent', basePrice: 179 },
    { name: 'CRM-Verknüpfung', basePrice: 179 }
  ];

  const priceProgression = [
    { modules: 1, total: 390, setup: 349 },
    { modules: 2, total: 690, setup: 349 },
    { modules: 3, total: 990, setup: 349 },
    { modules: 4, total: 1290, setup: 349 },
    { modules: 5, total: 1590, setup: 349 }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(126,87,194,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere Module</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Wählen Sie die Module, die Sie benötigen — Preis passt sich automatisch an
          </p>
        </div>

        {/* Hauptangebot */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800/50 border-2 border-blue-500 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">KI-Automatisierung Modular</h3>
              <p className="text-gray-300">
                Basisanalyse & Setup (ab 349€) + Module nach Wahl (ab 179€/Modul)
              </p>
            </div>

            {/* Module-Liste */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-center">Verfügbare Module:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {modules.map((module, index) => (
                  <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 flex items-center gap-3">
                    <Check size={20} className="text-blue-400 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-white">{module.name}</p>
                      <p className="text-sm text-gray-400">ab {module.basePrice}€/Modul</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preisentwicklung */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-center">Preisentwicklung:</h4>
              <div className="space-y-3">
                {priceProgression.map((tier, index) => (
                  <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 flex justify-between items-center hover:border-blue-500 transition-colors">
                    <div>
                      <p className="font-semibold text-white">
                        {tier.modules} Modul{tier.modules > 1 ? 'e' : ''}
                      </p>
                      <p className="text-sm text-gray-400">
                        Basisanalyse (349€) + {tier.modules}x Modul (179€)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-400">ab {tier.total}€</p>
                      <p className="text-sm text-gray-400">einmalig</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monatliche Betreuung */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-3 text-center">+ Monatliche Betreuung</h4>
              <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <p className="text-gray-400">1-2 Module</p>
                  <p className="text-xl font-bold text-blue-400">ab 89€/M</p>
                </div>
                <div>
                  <p className="text-gray-400">3-4 Module</p>
                  <p className="text-xl font-bold text-blue-400">ab 139€/M</p>
                </div>
                <div>
                  <p className="text-gray-400">5+ Module</p>
                  <p className="text-xl font-bold text-blue-400">ab 179€/M</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/kontakt')}
              className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              Jetzt Erstgespräch vereinbaren
            </button>
          </div>
        </div>

        {/* Technisch-Organisatorisches PDF */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <div className="md:flex gap-6 items-center">
              <div className="flex-1 mb-6 md:mb-0">
                <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-bold mb-3">
                  ADD-ON
                </div>
                <h3 className="text-2xl font-bold mb-3">Technisch-Organisatorisches Beratungs-PDF</h3>
                <p className="text-gray-300 mb-4">
                  8-12 seitiges Dokument mit technischen Empfehlungen für sicheren KI-Einsatz. 
                  Risikoanalyse, Tool-Rating und Handlungsplan.
                </p>
                <p className="text-sm text-gray-400 italic">
                  Wichtig: Keine Rechtsberatung — rein technisch-organisatorisch
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-3xl font-bold text-purple-400 mb-2">ab 249€</p>
                <p className="text-gray-400 text-sm mb-4">bis 590€ je nach Umfang</p>
                <button
                  onClick={() => navigate('/kontakt')}
                  className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Anfragen
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Alle Preise sind Startpreise. Finaler Preis abhängig von Komplexität und Integration.<br />
            Bei komplexen Integrationen: +100-400€ pro Modul
          </p>
          <button
            onClick={() => navigate('/kontakt')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            Kostenloses Erstgespräch vereinbaren (15-30 Min) →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;