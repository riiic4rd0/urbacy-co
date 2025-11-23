import { ArrowRight } from 'lucide-react';

const Hero = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,136,229,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,136,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,136,229,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4">
            Data & AI Solutions for the New Digital Era
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Ihre KI-Integration<br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              rechtskonform & sicher
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Wir begleiten KMU, Selbstständige und Dienstleister bei der Integration von KI und der Umsetzung von Data Act & DSGVO
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={() => onNavigate('/preise')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              Pakete ansehen <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('/kontakt')}
              className="border-2 border-blue-600 hover:bg-blue-600/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Kostenlose Beratung
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;