import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PreisePage = () => {
  const navigate = useNavigate();
  const [selectedModules, setSelectedModules] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const modules = [
    { id: 'email', name: 'E-Mail Automation', basePrice: 179 },
    { id: 'whatsapp', name: 'WhatsApp Automation', basePrice: 179 },
    { id: 'webchat', name: 'Webchat-KI', basePrice: 179 },
    { id: 'telefon', name: 'Telefon-KI', basePrice: 179 },
    { id: 'assistent', name: 'Interner Assistent', basePrice: 179 },
    { id: 'crm', name: 'CRM-Verknüpfung', basePrice: 179 }
  ];

  const baseSetup = 349;

  const toggleModule = (moduleId) => {
    if (selectedModules.includes(moduleId)) {
      setSelectedModules(selectedModules.filter(id => id !== moduleId));
    } else {
      setSelectedModules([...selectedModules, moduleId]);
    }
  };

  const calculateTotal = () => {
    if (selectedModules.length === 0) return 0;
    const modulesCost = selectedModules.length * 179;
    return baseSetup + modulesCost;
  };

  const getMonthlyPrice = () => {
    if (selectedModules.length === 0) return 0;
    if (selectedModules.length <= 2) return 89;
    if (selectedModules.length <= 4) return 139;
    return 179;
  };

  return (
    <main className="pt-16">
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Unsere Pakete</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wählen Sie Ihre Module und sehen Sie den Preis in Echtzeit
          </p>
        </div>
      </div>

      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Modul-Konfigurator */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-800/50 border-2 border-blue-500 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-center">KI-Automatisierung — Modular</h2>
              
              {/* Dropdown für Module */}
              <div className="mb-8">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-gray-900 border-2 border-gray-700 hover:border-blue-500 rounded-lg p-4 flex items-center justify-between transition-colors"
                >
                  <span className="font-semibold">
                    {selectedModules.length === 0 
                      ? 'Module auswählen...' 
                      : `${selectedModules.length} Modul${selectedModules.length > 1 ? 'e' : ''} ausgewählt`
                    }
                  </span>
                  {isDropdownOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>

                {isDropdownOpen && (
                  <div className="mt-2 bg-gray-900 border border-gray-700 rounded-lg p-4 space-y-3">
                    {modules.map((module) => (
                      <label
                        key={module.id}
                        className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedModules.includes(module.id)}
                          onChange={() => toggleModule(module.id)}
                          className="w-5 h-5 text-blue-600 rounded"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-white">{module.name}</p>
                          <p className="text-sm text-gray-400">ab {module.basePrice}€/Modul</p>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Ausgewählte Module Anzeige */}
              {selectedModules.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-bold mb-4">Ihre Auswahl:</h3>
                  <div className="space-y-2">
                    {selectedModules.map((moduleId) => {
                      const module = modules.find(m => m.id === moduleId);
                      return (
                        <div key={moduleId} className="flex items-center justify-between bg-gray-900/50 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <Check size={20} className="text-green-400" />
                            <span className="text-white">{module.name}</span>
                          </div>
                          <span className="text-gray-400">{module.basePrice}€</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Preisberechnung */}
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Basisanalyse & Setup:</span>
                    <span className="font-semibold">{selectedModules.length > 0 ? `${baseSetup}€` : '—'}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>{selectedModules.length} Module à 179€:</span>
                    <span className="font-semibold">{selectedModules.length > 0 ? `${selectedModules.length * 179}€` : '—'}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xl font-bold">Gesamtpreis (einmalig):</span>
                      <span className="text-4xl font-bold text-blue-400">
                        {selectedModules.length > 0 ? `ab ${calculateTotal()}€` : '—'}
                      </span>
                    </div>
                  </div>
                  {selectedModules.length > 0 && (
                    <div className="flex justify-between text-sm text-gray-400 pt-2 border-t border-gray-700">
                      <span>+ Monatliche Betreuung:</span>
                      <span className="font-semibold">ab {getMonthlyPrice()}€/Monat</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => navigate('/kontakt')}
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                disabled={selectedModules.length === 0}
              >
                {selectedModules.length > 0 ? 'Jetzt Erstgespräch vereinbaren' : 'Bitte wählen Sie Module aus'}
              </button>
            </div>
          </div>

          {/* Technisch-Organisatorisches PDF */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-800/50 border-2 border-purple-500 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-4">
                  SEPARATES ANGEBOT
                </div>
                <h2 className="text-3xl font-bold mb-4">Technisch-Organisatorisches Beratungs-PDF</h2>
                <p className="text-gray-300 mb-4">
                  8-12 seitiges Dokument mit technischen Empfehlungen für sicheren KI-Einsatz
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="font-bold mb-3">Inhalt:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Data Flow Mapping</li>
                    <li>• Technische Risikoanalyse</li>
                    <li>• Tool-Rating & Empfehlungen</li>
                    <li>• Operational Controls</li>
                    <li>• Priorisierter Handlungsplan</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="font-bold mb-3 text-red-400">Wichtig:</h4>
                  <p className="text-sm text-gray-400">
                    Technisch-organisatorische Empfehlungen — <strong>keine Rechtsberatung</strong>. 
                    Zur rechtlichen Prüfung wenden Sie sich an einen Fachanwalt oder Datenschutzbeauftragten.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-purple-400 mb-2">ab 249€ - 590€</p>
                <p className="text-gray-400 text-sm mb-6">je nach Umfang und Komplexität</p>
                <button
                  onClick={() => navigate('/kontakt')}
                  className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  PDF-Beratung anfragen
                </button>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Häufig gestellte Fragen</h2>
            
            <div className="space-y-6 text-left">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Wie schnell kann ich loslegen?</h3>
                <p className="text-gray-300">
                  Nach dem kostenlosen Erstgespräch (15-30 Min) erstellen wir ein Quick-Offer. 
                  Bei einfachen Modulen können wir innerhalb von 7-14 Tagen live gehen.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Was ist in der monatlichen Betreuung enthalten?</h3>
                <p className="text-gray-300">
                  Monitoring, kleine Anpassungen, Prompt-Updates, monatlicher Performance-Report und Support. 
                  Bei größeren Änderungen kalkulieren wir separat.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Brauche ich technisches Wissen?</h3>
                <p className="text-gray-300">
                  Nein! Wir übernehmen die komplette technische Umsetzung. Sie bekommen ein fertiges System 
                  mit kurzer Anleitung (Video + PDF). Nutzung ist so einfach wie WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
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
    </main>
  );
};

export default PreisePage;