import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/assets/UrbacyLogo-Blue.png" 
                alt="Urbacy Co. Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl">Urbacy Co.</span>
            </div>
            <p className="text-gray-400 text-sm">
              Data & AI Solutions for the New Digital Era
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-blue-400">Module</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/leistungen#email-automation" className="hover:text-white transition-colors">
                  E-Mail Automation
                </a>
              </li>
              <li>
                <a href="/leistungen#whatsapp-automation" className="hover:text-white transition-colors">
                  WhatsApp Automation
                </a>
              </li>
              <li>
                <a href="/leistungen#webchat-automation" className="hover:text-white transition-colors">
                  Webchat-KI
                </a>
              </li>
              <li>
                <a href="/leistungen#telefon-automation" className="hover:text-white transition-colors">
                  Telefon-KI
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-blue-400">Unternehmen</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/ueber-uns" className="hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-white transition-colors">
                  Karriere
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-blue-400">Rechtliches</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="hover:text-white transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Urbacy Co. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;