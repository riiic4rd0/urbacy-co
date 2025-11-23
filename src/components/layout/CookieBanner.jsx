import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('urbacy_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('urbacy_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('urbacy_cookie_consent', 'declined');
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('urbacy_cookie_consent', 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 shadow-2xl">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0">
            <Cookie size={32} className="text-blue-400" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Cookie-Einstellungen</h3>
            <p className="text-sm text-gray-300 mb-2">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. 
              Sie können wählen, welche Cookies Sie akzeptieren möchten.
            </p>
            
            {showDetails && (
              <div className="mt-4 p-4 bg-gray-800/50 rounded-lg text-sm space-y-2">
                <div>
                  <strong className="text-blue-400">Notwendige Cookies:</strong>
                  <p className="text-gray-400">Für grundlegende Funktionen erforderlich.</p>
                </div>
                <div>
                  <strong className="text-blue-400">Analyse-Cookies:</strong>
                  <p className="text-gray-400">Helfen uns zu verstehen, wie Besucher unsere Website nutzen.</p>
                </div>
              </div>
            )}
            
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-blue-400 hover:underline mt-2"
            >
              {showDetails ? 'Weniger anzeigen' : 'Mehr Informationen'}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button
              onClick={handleEssentialOnly}
              className="px-4 py-2 border border-gray-600 hover:bg-gray-800 rounded-lg text-sm font-semibold transition-colors"
            >
              Nur Notwendige
            </button>
            <button
              onClick={handleDecline}
              className="px-4 py-2 border border-gray-600 hover:bg-gray-800 rounded-lg text-sm font-semibold transition-colors"
            >
              Alle ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;