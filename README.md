# Smart Spoon Landing Page

A modern React landing page for Smart Spoon, built with React, TypeScript, Tailwind CSS, and Shadcn UI.

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://0.0.0.0:8080 to view the app

## Deployment on Replit

This project is optimized for deployment on Replit's Static Deployment service. To deploy:

1. Make sure all your changes are saved
2. Click the "Deploy" button in the top right corner
3. Select "Static" as your deployment type
4. Configure the deployment:
   - Build Command: `npm run build`
   - Output Directory: `dist`

Your site will be available at `<your-repl-name>.replit.app`

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/data` - Static data files
  - `/hooks` - Custom React hooks
  - `/lib` - Utility functions
  - `/pages` - Page components

## Features

- 🌙 Dark/Light mode
- 📱 Fully responsive design
- 🌐 RTL support for Arabic
- 📍 Google Maps integration
- 💬 Contact form with validation

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- Vite

## Google Maps API Setup

To use the Google Maps integration:

1. Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Replace the placeholder URL in the `LocationsSection.tsx` with your API key:
```jsx
<iframe 
  src="https://www.google.com/maps/embed?pb=YOUR_API_KEY_HERE" 
  // ...rest of the code
></iframe>
```

## RTL and Arabic Font Setup

This project uses:

- Noto Sans Arabic from Google Fonts
- RTL direction applied using the `dir="rtl"` attribute
- Tailwind CSS for RTL styling support

To modify RTL settings:
- Check the `dir` attribute in `index.html` and `Index.tsx`

## Image Attribution

This project uses images from Unsplash:

- Hero image: Photo by [Anna Pelzer](https://unsplash.com/@annapelzer) on Unsplash
- Statistics images: Photos by various artists on Unsplash
- Footer image: Photo by [Andrew Neel](https://unsplash.com/@andrewtneel) on Unsplash