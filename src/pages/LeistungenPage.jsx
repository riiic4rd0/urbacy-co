import Services from '../components/sections/Services';

const LeistungenPage = () => {
  return (
    <main className="pt-16">
      <Services />
      
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Detaillierte Leistungsbeschreibung</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Data Act Readiness</h3>
                <p className="text-gray-300 mb-4">
                  Der EU Data Act tritt 2025 in Kraft und verpflichtet Unternehmen, Daten strukturiert und sicher zu verwalten. 
                  Wir bereiten Sie optimal darauf vor.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Ersteinschätzung Ihrer aktuellen Datenprozesse</li>
                  <li>Gap-Analyse zur Identifikation von Handlungsfeldern</li>
                  <li>Erstellung einer individuellen Compliance-Roadmap</li>
                  <li>Handlungsempfehlungen als strukturierter PDF-Report</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">DSGVO & Datenschutz</h3>
                <p className="text-gray-300 mb-4">
                  Die DSGVO ist seit 2018 in Kraft, doch viele Unternehmen haben noch Nachholbedarf. Wir sorgen für vollständige Compliance.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>DSGVO-Compliance-Audit Ihrer Systeme und Prozesse</li>
                  <li>Erstellung/Prüfung des Verzeichnisses von Verarbeitungstätigkeiten (VVT)</li>
                  <li>Durchführung von Datenschutz-Folgenabschätzungen (DSFA)</li>
                  <li>Auftragsverarbeitungsverträge (AVV) mit Dienstleistern</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">KI-Integration</h3>
                <p className="text-gray-300 mb-4">
                  Künstliche Intelligenz bietet enormes Potenzial – muss aber rechtssicher und datenschutzkonform eingesetzt werden.
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