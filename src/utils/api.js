const API_ENDPOINT = import.meta.env.VITE_API_URL || 'https://api.urbacy.co';

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        message: formData.message,
        consent: formData.consent,
        timestamp: new Date().toISOString(),
        source: window.location.href,
        userAgent: navigator.userAgent
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    
    // Fallback: Log to console in development
    if (import.meta.env.DEV) {
      console.log('Form Data (Dev Mode):', formData);
    }
    
    throw error;
  }
};

// Analytics tracking
export const trackEvent = (category, action, label, value) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }

  if (typeof window._paq !== 'undefined') {
    window._paq.push(['trackEvent', category, action, label, value]);
  }
};

// Track page views
export const trackPageView = (path) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', import.meta.env.VITE_GA4_ID, {
      page_path: path
    });
  }

  if (typeof window._paq !== 'undefined') {
    window._paq.push(['setCustomUrl', path]);
    window._paq.push(['trackPageView']);
  }
};