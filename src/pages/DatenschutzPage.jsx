const DatenschutzPage = () => {
  return (
    <main className="pt-16">
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Datenschutzerklärung</h1>
        </div>
      </div>

      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold mb-3 text-white">Allgemeine Hinweise</h3>
                <p className="text-gray-300 leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, 
                  mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-semibold mb-3 text-white">Wer ist verantwortlich?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Dessen Kontaktdaten können Sie dem Impressum entnehmen.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Wie erfassen wir Ihre Daten?</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                  Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                  durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, 
                  Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Hosting</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <h3 className="text-xl font-semibold mb-3 text-white">Externes Hosting</h3>
                <p className="text-gray-300 leading-relaxed">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
                  erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. 
                  Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
                  Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten handeln.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Kontaktformular</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung 
                  auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen 
                  (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Unsere Website verwendet so genannte "Cookies". Cookies sind kleine Datenpakete und richten 
                  auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer 
                  Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden 
                  und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder 
                  generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers 
                  aktivieren.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Ihre Rechte</h2>
                <div className="space-y-3 text-gray-300">
                  <p className="leading-relaxed">Sie haben das Recht:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
                    <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger Daten zu verlangen</li>
                    <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                    <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung zu verlangen</li>
                    <li>gemäß Art. 20 DSGVO Ihre Daten in einem strukturierten Format zu erhalten</li>
                    <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Analyse-Tools</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Wir verwenden Analyse-Tools nur mit Ihrer ausdrücklichen Einwilligung. Alle Daten werden 
                  anonymisiert erfasst und dienen ausschließlich der Verbesserung unseres Angebots.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen 
                  in Ihrem Browser anpassen oder unseren Cookie-Banner verwenden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Kontakt</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns unter:
                </p>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold">Urbacy Co.</p>
                  <p className="text-gray-300">E-Mail: datenschutz@urbacy.co</p>
                  <p className="text-gray-300">Telefon: +49 123 456789</p>
                </div>
              </section>

              <p className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-700">
                Stand: November 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DatenschutzPage;