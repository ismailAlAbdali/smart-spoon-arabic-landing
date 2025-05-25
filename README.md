# سمارت سبون - خدمة توصيل الوجبات الصحية

موقع تفاعلي حديث لسمارت سبون، مبني باستخدام React وTypeScript وTailwind CSS وShadcn UI.

## إعداد بيئة التطوير

1. تثبيت المتطلبات:
```bash
npm install
```

2. تشغيل خادم التطوير:
```bash
npm run dev
```

3. افتح http://0.0.0.0:8080 لعرض التطبيق

## المميزات الرئيسية

- 🌙 وضع الليل/النهار
- 📱 تصميم متجاوب بالكامل
- 🌐 دعم الواجهة العربية (RTL)
- 📍 تكامل مع خرائط جوجل
- 💬 نموذج اتصال مع التحقق

## الهيكل التقني

- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- Vite

## هيكل المشروع

- `/src` - الكود المصدري
  - `/components` - مكونات React
  - `/data` - ملفات البيانات الثابتة
  - `/hooks` - React hooks مخصصة
  - `/lib` - دوال مساعدة
  - `/pages` - مكونات الصفحات

## حول سمارت سبون

سمارت سبون هي خدمة توصيل وجبات صحية متخصصة في سلطنة عُمان. نقدم:
- وجبات عالية البروتين
- برامج تغذية مخصصة
- خطط غذائية للرياضيين
- توصيل يومي للوجبات الطازجة
- دعم من أخصائيي التغذية

## Deployment on Replit

This project is optimized for deployment on Replit's Static Deployment service. To deploy:

1. Make sure all your changes are saved
2. Click the "Deploy" button in the top right corner
3. Select "Static" as your deployment type
4. Configure the deployment:
   - Build Command: `npm run build`
   - Output Directory: `dist`

Your site will be available at `<your-repl-name>.replit.app`

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