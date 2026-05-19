# BLUSH MC - Minecraft Server Website

A modern, responsive website for your PvP Minecraft server built with Vite + React + Tailwind CSS.

## Features

- 📋 **Rules Page** - Clear server rules and enforcement policies
- 🚫 **Prohibited Mods** - List of banned items and allowed mods
- 🔄 **Server Status** - Real-time server status and player count
- ✅ **Verification Guide** - Discord/Minecraft account linking instructions
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized Vite build and Tailwind CSS

## Setup & Installation

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The site will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.jsx         # Server title and branding
│   ├── Rules.jsx          # Server rules and punishments
│   ├── ProhibitedMods.jsx # Banned and allowed mods list
│   ├── ServerStatus.jsx   # Server status and player count
│   ├── Verification.jsx   # Discord/Minecraft verification guide
│   └── Footer.jsx         # Footer with links
├── App.jsx                # Main app with navigation
├── main.jsx               # React entry point
└── index.css              # Tailwind CSS base styles

index.html                 # HTML template
vite.config.js            # Vite configuration
tailwind.config.js        # Tailwind CSS configuration
postcss.config.js         # PostCSS configuration
package.json              # Project dependencies
```

## Customization

### Update Server Info
Edit the components to add your actual:
- Server IP/domain (`ServerStatus.jsx`)
- Discord server links (`Footer.jsx`)
- Server version and details (`Header.jsx`)

## License

Feel free to use this as a template for your own server website!
