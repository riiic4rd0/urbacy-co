import Services from '../components/sections/Services';

const LeistungenPage = () => {
  return (
    <main className="pt-16">
      <Services />
      
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Detaillierte Modul-Beschreibungen</h2>
            
            <div className="space-y-8">
              <div id="email-automation" className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">E-Mail Automation</h3>
                <p className="text-gray-300 mb-4">
                  Intelligente E-Mail-Verarbeitung mit KI — automatische Sortierung, Priorisierung und Antworten.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Was wir liefern:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Automatische E-Mail-Kategorisierung (wichtig/unwichtig)</li>
                    <li>KI-generierte Antwortvorschläge</li>
                    <li>Auto-Reply für häufige Anfragen (FAQ)</li>
                    <li>Follow-Up-Erinnerungen</li>
                    <li>Integration mit Ihrem bestehenden E-Mail-System</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm text-blue-300">
                    <strong>Typische Zeitersparnis:</strong> 5-10 Stunden pro Woche
                  </p>
                </div>
              </div>

              <div id="whatsapp-automation" className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">WhatsApp Automation</h3>
                <p className="text-gray-300 mb-4">
                  24/7 WhatsApp-Bot über offizielle Business API — beantwortet Kundenanfragen automatisch.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Was wir liefern:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>WhatsApp Business API Setup</li>
                    <li>KI-Bot für FAQ und Standardanfragen</li>
                    <li>Terminbuchung direkt über WhatsApp</li>
                    <li>Weiterleitung komplexer Anfragen an Menschen</li>
                    <li>Automatische Bestätigungen & Erinnerungen</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm text-blue-300">
                    <strong>Ideal für:</strong> Restaurants, Handwerker, Dienstleister mit hohem Anfrageaufkommen
                  </p>
                </div>
              </div>

              <div id="webchat-automation" className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Webchat-KI</h3>
                <p className="text-gray-300 mb-4">
                  Intelligenter Chat-Widget auf Ihrer Website — beantwortet Besucherfragen rund um die Uhr.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Was wir liefern:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Chat-Widget-Integration auf Ihrer Website</li>
                    <li>Training auf Ihre Produkte/Dienstleistungen</li>
                    <li>Automatische Lead-Erfassung</li>
                    <li>Übergabe an Menschen bei Bedarf</li>
                    <li>Chat-Verlauf & Analytics</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm text-blue-300">
                    <strong>Effekt:</strong> Höhere Conversion, weniger verpasste Anfragen
                  </p>
                </div>
              </div>

              <div id="telefon-automation" className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Telefon-KI</h3>
                <p className="text-gray-300 mb-4">
                  KI-gestützte Anrufannahme — nimmt Anrufe entgegen, beantwortet Fragen und vereinbart Termine.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Was wir liefern:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Telefon-KI mit natürlicher Stimme (deutsch)</li>
                    <li>Anrufannahme außerhalb Geschäftszeiten</li>
                    <li>Terminvereinbarung mit Kalender-Sync</li>
                    <li>Weiterleitung wichtiger Anrufe</li>
                    <li>Gesprächszusammenfassungen per E-Mail</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm text-blue-300">
                    <strong>Ideal für:</strong> Praxen, Kanzleien, Handwerksbetriebe
                  </p>
                </div>
              </div>

              <div id="interner-assistent" className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Interner KI-Assistent</h3>
                <p className="text-gray-300 mb-4">
                  Ihr persönlicher KI-Mitarbeiter für Recherchen, Texterstellung und interne Workflows.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Was wir liefern:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Firmen-Wissensdatenbank mit KI-Zugriff</li>
                    <li>Automatische Angebotserstellung</li>
                    <li>Dokumenten-Templates generieren</li>
                    <li>Interne Recherche-Unterstützung</li>
                    <li>E-Mail-Entwürfe & Texte erstellen</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm text-blue-300">
                    <strong>Nutzen:</strong> Weniger Routinearbeit, mehr Zeit für Kerngeschäft
                  </p>
                </div>
              </div>

              <div id="prozess-automation" className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Prozess-Automation</h3>
                <p className="text-gray-300 mb-4">
                  End-to-End Automatisierung kompletter Geschäftsprozesse mit KI-Unterstützung.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Was wir liefern:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Workflow-Analyse & Optimierung</li>
                    <li>Verknüpfung mehrerer Tools (CRM, Kalender, Shop)</li>
                    <li>Automatische Datenübertragung</li>
                    <li>Status-Updates & Benachrichtigungen</li>
                    <li>Reporting & Analytics</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm text-blue-300">
                    <strong>Beispiel:</strong> Lead → Angebot → Auftrag → Rechnung — vollautomatisch
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Technisch-Organisatorische Beratung</h3>
              <p className="text-gray-300 mb-4">
                Optional: Wir erstellen ein technisches Beratungsdokument für den sicheren Einsatz von KI in Ihrem Unternehmen.
              </p>
              <ul className="text-left space-y-2 text-gray-400 mb-4">
                <li>✓ Analyse Ihrer bestehenden Systeme</li>
                <li>✓ Technische Risikoübersicht</li>
                <li>✓ Tool-Empfehlungen (EU-Server, sichere Alternativen)</li>
                <li>✓ 8-12 seitiges PDF mit Handlungsempfehlungen</li>
              </ul>
              <p className="text-sm text-blue-300">
                <strong>Wichtig:</strong> Keine Rechtsberatung — rein technisch-organisatorische Empfehlungen
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LeistungenPage;