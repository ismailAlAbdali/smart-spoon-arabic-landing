
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LocationsSection() {
  return (
    <section id="locations" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">مناطق التوصيل</h2>
        
        <Tabs defaultValue="area1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="area1">المنطقة الوسطى</TabsTrigger>
            <TabsTrigger value="area2">المنطقة الغربية</TabsTrigger>
          </TabsList>
          
          <TabsContent value="area1">
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
                    title="مناطق التوصيل المنطقة الوسطى"
                    className="aspect-video"
                  ></iframe>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">المنطقة الوسطى</h3>
                  <p className="text-lg">
                    نغطي منطقة الرياض والقصيم، مع خدمة توصيل سريعة وموثوقة للوجبات الصحية الطازجة.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">الأحياء المشمولة:</h4>
                  <ul className="list-disc list-inside space-y-1 mr-4">
                    <li>الرياض - جميع الأحياء</li>
                    <li>القصيم - المدينة المركزية</li>
                    <li>الخرج - المناطق الرئيسية</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="area2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.0458559083716!2d39.19!3d21.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1619450316613!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="مناطق التوصيل المنطقة الغربية"
                    className="aspect-video"
                  ></iframe>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">المنطقة الغربية</h3>
                  <p className="text-lg">
                    نغطي منطقة جدة ومكة المكرمة، مع خدمة توصيل سريعة وموثوقة للوجبات الصحية الطازجة.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">الأحياء المشمولة:</h4>
                  <ul className="list-disc list-inside space-y-1 mr-4">
                    <li>جدة - الأحياء الرئيسية</li>
                    <li>مكة المكرمة - مناطق محددة</li>
                    <li>المدينة المنورة - المنطقة المركزية</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
