
import { Card, CardContent } from "@/components/ui/card";

export default function LocationsSection() {
  return (
    <section id="locations" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">مناطق التوصيل</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7247.552806952689!2d46.675!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0336b3d0ebd7%3A0xcb98dd27eedd4319!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1619450316613!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="مناطق التوصيل Smart Spoon"
                className="aspect-video"
              ></iframe>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">مناطق التغطية</h3>
              <p className="text-lg">
                نغطي الرياض وجدة والدمام والعديد من المدن الرئيسية في المملكة، مع خدمة توصيل سريعة وموثوقة للوجبات الصحية الطازجة.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-2">مدن التوصيل الرئيسية:</h4>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>الرياض - جميع الأحياء</li>
                <li>جدة - الأحياء الرئيسية</li>
                <li>الدمام - وسط المدينة والضواحي</li>
                <li>الخبر - جميع المناطق</li>
                <li>مكة - مناطق محددة</li>
              </ul>
            </div>
            
            <div className="flex justify-end">
              <div className="flex flex-col items-center">
                <img 
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=200" 
                  alt="توصيل سريع"
                  className="w-20 h-20 object-cover rounded-full mb-2" 
                />
                <p className="text-sm font-medium">توصيل سريع وموثوق</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
