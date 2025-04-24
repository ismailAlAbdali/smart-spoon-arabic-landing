
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80"
          alt="وجبات صحية لجسم قوي"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/40 dark:from-black/80 dark:to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mr-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            وجبات صحية لجسم قوي مع <span className="text-primary">Smart Spoon</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-up">
            وجبات عالية البروتين، طازجة ومغذية مصممة خصيصًا لمساعدتك على تحقيق أهدافك في اللياقة البدنية.
          </p>
          <div className="flex flex-wrap gap-4 rtl">
            <Button className="text-lg px-8 py-6">ابدأ الاشتراك الآن</Button>
            <Button variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              احصل على عرض سعر
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
