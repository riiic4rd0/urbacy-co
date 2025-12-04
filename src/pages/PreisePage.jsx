import Packages from '../components/sections/Packages';

const PreisePage = () => {
  return (
    <main className="pt-16">
      <Packages />
      
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Häufig gestellte Fragen</h2>
            
            <div className="space-y-6 text-left">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Wie schnell kann ich loslegen?</h3>
                <p className="text-gray-300">
                  Nach dem kostenlosen Erstgespräch (15-30 Min) erstellen wir ein Quick-Offer. 
                  Bei einfachen Modulen können wir innerhalb von 7-14 Tagen live gehen.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Kann ich mehrere Module kombinieren?</h3>
                <p className="text-gray-300">
                  Ja! Genau dafür ist unser System gedacht. Je mehr Module Sie kombinieren, 
                  desto besser arbeiten sie zusammen. Wir empfehlen Start mit 2-3 Modulen für maximale Effizienz.
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

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Was kostet die technisch-organisatorische Beratung?</h3>
                <p className="text-gray-300">
                  Das optionale Beratungs-PDF (8-12 Seiten) mit technischen Empfehlungen für sicheren KI-Einsatz 
                  kostet ab 249-590€ je nach Umfang. <strong>Wichtig:</strong> Keine Rechtsberatung, nur technisch-organisatorisch.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Gibt es eine Testphase?</h3>
                <p className="text-gray-300">
                  Ja! Die ersten 2 Wochen nach Go-Live sind eine intensive Monitoring-Phase. 
                  Wir justieren nach, bis alles perfekt läuft. Bei grundsätzlicher Unzufriedenheit in den ersten 14 Tagen 
                  finden wir eine faire Lösung.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Individuelle Projekte</h3>
            <p className="text-gray-300 mb-6">
              Benötigen Sie eine maßgeschneiderte Lösung? Komplexe Prozess-Automatisierung? 
              Multi-System-Integration? Wir erstellen individuelle Angebote für größere Projekte.
            </p>
            <p className="text-blue-400 font-semibold">
              Ab 1.490€ für End-to-End Prozessdigitalisierung
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PreisePage;