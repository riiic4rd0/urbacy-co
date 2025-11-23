import Services from '../components/sections/Services';

const LeistungenPage = () => {
  return (
    <main className="pt-16">
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Umfassende Data & AI Solutions für Ihr Unternehmen
          </p>
        </div>
      </div>
      <Services />
      
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Detaillierte Leistungsbeschreibung</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Data Act Readiness</h3>
                <p className="text-gray-300 mb-4">
                  Der EU Data Act verpflichtet Unternehmen ab 2025, Daten strukturiert und sicher zu verwalten. 
                  Wir helfen Ihnen bei der Vorbereitung:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Ersteinschätzung Ihrer aktuellen Datenprozesse</li>
                  <li>Gap-Analyse zur Identifikation von Handlungsfeldern</li>
                  <li>Erstellung einer individuellen Compliance-Roadmap</li>
                  <li>Handlungsempfehlungen als PDF-Report</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">DSGVO & Datenschutz</h3>
                <p className="text-gray-300 mb-4">
                  Vollständige datenschutzrechtliche Absicherung nach DSGVO:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>DSGVO-Compliance-Audit Ihrer Systeme</li>
                  <li>Erstellung/Prüfung des Verzeichnisses von Verarbeitungstätigkeiten (VVT)</li>
                  <li>Durchführung von Datenschutz-Folgenabschätzungen (DSFA)</li>
                  <li>Auftragsverarbeitungsverträge (AVV) mit Dienstleistern</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">KI-Integration</h3>
                <p className="text-gray-300 mb-4">
                  Rechtssichere Integration von KI-Systemen in Ihre Prozesse:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>KI-Strategie-Entwicklung & Use-Case-Analyse</li>
                  <li>Compliance-Check Ihrer geplanten KI-Systeme</li>
                  <li>Integration in bestehende Workflows</li>
                  <li>Aufbau einer KI-Governance-Struktur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LeistungenPage;