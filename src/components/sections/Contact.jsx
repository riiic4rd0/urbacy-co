import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name ist erforderlich';
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    if (!formData.message.trim()) newErrors.message = 'Nachricht ist erforderlich';
    if (!formData.consent) newErrors.consent = 'Zustimmung erforderlich';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '', consent: false });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,136,229,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Kontaktieren Sie uns für eine kostenlose Erstberatung
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            {success && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500 rounded-lg text-green-300">
                Vielen Dank! Wir melden uns in Kürze bei Ihnen.
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr Name *"
                    className={`w-full bg-gray-900 border ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ihre E-Mail *"
                    className={`w-full bg-gray-900 border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Unternehmen"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht *"
                  rows="4"
                  className={`w-full bg-gray-900 border ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <div className="flex items-start gap-3 text-left">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-600 bg-gray-900 border-gray-700 rounded focus:ring-blue-500"
                />
                <label className="text-sm text-gray-400">
                  Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                  <Link to="/datenschutz" className="text-blue-400 hover:underline">
                    Datenschutzerklärung
                  </Link>{' '}
                  zu. *
                </label>
              </div>
              {errors.consent && (
                <p className="text-sm text-red-400 text-left">{errors.consent}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    Nachricht senden <Send size={20} />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Pflichtfelder
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" />
                  <a href="mailto:info@urbacy.co" className="hover:text-white transition-colors">
                    info@urbacy.co
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-400" />
                  <a href="tel:+49123456789" className="hover:text-white transition-colors">
                    +49 123 456789
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-400" />
                  <span>Berlin, Deutschland</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;