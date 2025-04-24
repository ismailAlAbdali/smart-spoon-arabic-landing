# Smart Spoon - Arabic Landing Page

A beautiful, responsive landing page for Smart Spoon, a cloud kitchen business targeting gym-goers and health-conscious individuals. The page is fully RTL (Right-to-Left) optimized for Arabic language support.

## Features

- **Full RTL Support:** Optimized for Arabic language with proper text alignment and direction
- **Responsive Design:** Fully responsive on mobile, tablet, and desktop devices
- **Dark/Light Mode:** Toggle between dark and light themes
- **Modern UI Components:** Using Shadcn UI and Tailwind CSS
- **Form Validation:** Zod schema validation for the contact form
- **Interactive Elements:** Animated statistics cards, pricing tables, and more
- **Google Maps Integration:** Shows delivery locations

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Main page components
- `src/styles/` - Global styles and Tailwind configuration
- `public/` - Static assets and images

## Setup Instructions

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/smart-spoon-landing.git
cd smart-spoon-landing
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### Google Maps API Setup

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
- Review the `.rtl` class in `index.css`

## Deployment

### Deploying to Vercel

1. Install the Vercel CLI:
```
npm install -g vercel
```

2. Deploy the application:
```
vercel
```

3. Follow the prompts to complete the deployment.

## Image Attribution

This project uses images from Unsplash:

- Hero image: Photo by [Anna Pelzer](https://unsplash.com/@annapelzer) on Unsplash
- Statistics images: Photos by various artists on Unsplash
- Footer image: Photo by [Andrew Neel](https://unsplash.com/@andrewtneel) on Unsplash

## Technologies Used

- React
- TypeScript
- Next.js
- Tailwind CSS
- Shadcn UI
- React Hook Form with Zod
- Google Maps Embed API
