import Packages from '../components/sections/Packages';

const PreisePage = () => {
  return (
    <main className="pt-16">
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Unsere Pakete</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparente Preise für jede Unternehmensgröße
          </p>
        </div>
      </div>
      <Packages />
      
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Häufig gestellte Fragen</h2>
            
            <div className="space-y-6 text-left">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Sind die Preise fix?</h3>
                <p className="text-gray-300">
                  Alle Preise sind Startpreise. Der finale Preis richtet sich nach Unternehmensgröße, 
                  Komplexität der Systeme und Umfang der Datenverarbeitung.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Kann ich Pakete kombinieren?</h3>
                <p className="text-gray-300">
                  Ja! Das KI-INTEGRATION Paket kann als Add-on zu allen anderen Paketen gebucht werden. 
                  Wir erstellen auch individuelle Angebote nach Ihren Anforderungen.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Gibt es eine Geld-zurück-Garantie?</h3>
                <p className="text-gray-300">
                  Wir bieten eine kostenlose Erstberatung (15-30 Min), damit Sie uns kennenlernen können. 
                  Bei Unzufriedenheit innerhalb der ersten 14 Tage erstatten wir Ihren Betrag vollständig.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Bietet ihr auch juristische Beratung?</h3>
                <p className="text-gray-300">
                  Wir bieten technische und organisatorische Unterstützung, keine juristische Rechtsberatung 
                  im engeren Sinne. Bei rechtlichen Fragen arbeiten wir mit spezialisierten Anwaltskanzleien zusammen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PreisePage;