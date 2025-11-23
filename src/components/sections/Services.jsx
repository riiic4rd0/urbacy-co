const Services = () => {
  const services = [
    {
      title: 'Data Act Readiness',
      description: 'Bereiten Sie Ihr Unternehmen optimal auf die EU-Vorgaben vor',
      icon: '📊'
    },
    {
      title: 'DSGVO & Datenschutz',
      description: 'Vollständige datenschutzrechtliche Absicherung',
      icon: '🔒'
    },
    {
      title: 'KI-Integration',
      description: 'Rechtssichere Integration moderner KI-Systeme',
      icon: '🤖'
    },
    {
      title: 'Managed Compliance',
      description: 'Laufende Compliance-Betreuung und Monitoring',
      icon: '⚙️'
    },
    {
      title: 'Workshops & Schulung',
      description: 'Praktische Trainings für Teams',
      icon: '📚'
    },
    {
      title: 'Automatisierung & APIs',
      description: 'Integration von GPT, Twilio, Make.com & mehr',
      icon: '🔗'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,136,229,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere Kernleistungen</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Umfassende Lösungen für Ihre digitale Transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;