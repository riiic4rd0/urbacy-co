import { useState, useEffect } from 'react';
import { Mail, MessageSquare, MessageCircle, Phone, Bot, Workflow } from 'lucide-react';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return;

      const cards = document.querySelectorAll('.service-card');
      const windowCenter = window.innerHeight / 2;
      let closestIndex = -1;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - windowCenter);

        if (distance < closestDistance && rect.top < windowCenter && rect.bottom > windowCenter) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'E-Mail Automation',
      description: 'Priorisierung, Canned Responses, Follow-Ups',
      icon: Mail,
      anchor: '#email-automation'
    },
    {
      title: 'WhatsApp Automation',
      description: 'API-Bot, FAQ, Terminbuchung',
      icon: MessageSquare,
      anchor: '#whatsapp-automation'
    },
    {
      title: 'Webchat-KI',
      description: 'SaaS-Widget mit KI-Backend',
      icon: MessageCircle,
      anchor: '#webchat-automation'
    },
    {
      title: 'Telefon-KI',
      description: 'Anrufannahme, Terminbuchung, Gesprächszusammenfassungen',
      icon: Phone,
      anchor: '#telefon-automation'
    },
    {
      title: 'Interner Assistent',
      description: 'Recherche, Angebotserstellung, SOP-Generator',
      icon: Bot,
      anchor: '#interner-assistent'
    },
    {
      title: 'CRM-Verknüpfung',
      description: 'Automatische Lead-Erstellung & Status-Updates',
      icon: Workflow,
      anchor: '#crm-automation'
    }
  ];

  const handleServiceClick = (service) => {
    window.location.href = `/leistungen${service.anchor}`;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,136,229,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere KI-Module</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Wählen Sie die Module, die Ihren Arbeitsalltag vereinfachen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeIndex === index;
            
            return (
              <div
                key={index}
                onClick={() => handleServiceClick(service)}
                className={`service-card group bg-gray-900/50 border rounded-xl p-6 transition-all duration-500 cursor-pointer ${
                  isActive 
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/30 scale-105 md:scale-100' 
                    : 'border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105'
                }`}
              >
                <div className={`mb-4 transition-all duration-300 ${
                  isActive ? 'text-blue-400 scale-110' : 'text-blue-400 group-hover:scale-110'
                }`}>
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
                }`}>
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
                <div className={`mt-4 text-blue-400 text-sm font-semibold transition-opacity ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  Mehr erfahren →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;