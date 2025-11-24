import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-800/50 to-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,136,229,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => navigate('/ueber-uns')}
            className="inline-block group mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:text-blue-400 transition-colors duration-300">
              Warum Urbacy Co.?
              <span className="inline-block ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </h2>
          </button>
          
          <p className="text-xl text-gray-300 mb-12">
            Urbacy Co. verbindet technisches Know-how und rechtliche Sensibilität. 
            Unsere Lösungen sind praxisnah, sicher und EU-konform.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4">Transparenz & Datenschutz</h3>
              <p className="text-gray-400">
                Klare Prozesse, dokumentiert und nachvollziehbar für maximale Rechtssicherheit.
              </p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Innovation & Effizienz</h3>
              <p className="text-gray-400">
                Automatisierung und KI-Integration, die Ihre Prozesse wirklich unterstützt.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/ueber-uns')}
            className="mt-12 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            Mehr über uns erfahren
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;