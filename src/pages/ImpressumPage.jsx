const ImpressumPage = () => {
  return (
    <main className="pt-16">
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Impressum</h1>
        </div>
      </div>

      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2 text-gray-300">
                  <p className="font-semibold text-white">Urbacy Co.</p>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin</p>
                  <p>Deutschland</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Kontakt</h2>
                <div className="space-y-2 text-gray-300">
                  <p>Telefon: +49 (0) 123 456789</p>
                  <p>E-Mail: <a href="mailto:urbacy.co@gmail.com" className="text-blue-400 hover:underline">info@urbacy.co</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Vertretungsberechtigter</h2>
                <div className="space-y-2 text-gray-300">
                  <p>Geschäftsführer: Ricardo Urban</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Umsatzsteuer-ID</h2>
                <div className="space-y-2 text-gray-300">
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                  <p>DE123456789</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Handelsregister</h2>
                <div className="space-y-2 text-gray-300">
                  <p>Registergericht: Amtsgericht Berlin</p>
                  <p>Registernummer: HRB 123456</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Verantwortlich für den Inhalt</h2>
                <div className="space-y-2 text-gray-300">
                  <p>nach § 55 Abs. 2 RStV:</p>
                  <p className="font-semibold text-white mt-2">Ricardo Urban</p>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Haftungsausschluss</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-white">Haftung für Inhalte</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach 
                  den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
                  jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                  oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Haftung für Links</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss 
                  haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte 
                  der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Urheberrecht</h3>
                <p className="text-gray-300 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                  deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                  außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
                  Autors bzw. Erstellers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">EU-Streitschlichtung</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                </p>
                <p className="text-gray-300">
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-gray-300 mt-3 leading-relaxed">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Verbraucherstreitbeilegung</h2>
                <p className="text-gray-300 leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <p className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-700">
                Stand: November 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImpressumPage;