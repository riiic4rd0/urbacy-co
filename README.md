# Urbacy Co. - Data & AI Solutions

Moderne React-Webseite für Urbacy Co. mit Vite, Tailwind CSS und React Router.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

Die Website läuft auf `http://localhost:3000`

### Production Build
```bash
npm run build
```

Build-Output wird in `dist/` erstellt.

### Preview Production Build
```bash
npm run preview
```

## 📁 Projektstruktur
```
urbacy-co/
├── public/              # Statische Assets
├── src/
│   ├── components/      # React Komponenten
│   │   ├── layout/      # Header, Footer, CookieBanner
│   │   ├── sections/    # Hero, Services, Packages, etc.
│   │   └── ui/          # Wiederverwendbare UI-Komponenten
│   ├── pages/           # Seiten (HomePage, KontaktPage, etc.)
│   ├── hooks/           # Custom React Hooks
│   ├── utils/           # Utility-Funktionen & Konstanten
│   ├── App.jsx          # Haupt-App mit Routing
│   ├── index.jsx        # Entry Point
│   └── index.css        # Tailwind Imports
├── vite.config.js       # Vite Konfiguration
├── tailwind.config.js   # Tailwind Konfiguration
└── package.json
```

## 🎨 Features

- ✅ React 18 mit Vite
- ✅ Tailwind CSS für Styling
- ✅ React Router für Navigation
- ✅ Lazy Loading & Code Splitting
- ✅ DSGVO-konformer Cookie Banner
- ✅ Responsive Design
- ✅ SEO-optimiert
- ✅ Performance-optimiert
- ✅ Accessibility (ARIA)

## 🔧 Konfiguration

### Environment Variables

Erstelle eine `.env` Datei im Root:
```env
VITE_API_URL=https://api.urbacy.co
VITE_GA4_ID=G-XXXXXXXXXX
VITE_MATOMO_URL=https://analytics.urbacy.co
VITE_MATOMO_SITE_ID=1
```

### Deployment

#### Netlify
```bash
npm run build
netlify deploy --prod
```

#### Vercel
```bash
npm run build
vercel --prod
```

#### Docker
```bash
docker build -t urbacy-co .
docker run -p 80:80 urbacy-co
```

## 📝 Anpassungen

### Farben ändern

Bearbeite `tailwind.config.js`:
```javascript
colors: {
  'urbacy': {
    'basic': 'rgb(76, 175, 80)',
    // ... weitere Farben
  }
}
```

### Inhalte ändern

Bearbeite `src/utils/constants.js` für globale Konstanten.

### API-Endpoint ändern

Bearbeite `src/utils/api.js` für Backend-Integration.

## 🐛 Troubleshooting

### Port bereits in Verwendung
```bash
npm run dev -- --port 3001
```

### Build-Fehler
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 Lizenz

© 2024 Urbacy Co. Alle Rechte vorbehalten.

## 🤝 Support

Bei Fragen: info@urbacy.co