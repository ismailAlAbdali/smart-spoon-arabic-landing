
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LocationsSection() {
  return (
    <section id="locations" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">مناطق التوزيع</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          وكلاء لاجود انواع المكملات الغذائية و الصحية في سلطنة عمان 🇴🇲
        </p>
        
        <Tabs defaultValue="khoud" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="khoud">فرع الخوض</TabsTrigger>
            <TabsTrigger value="amerat">فرع العامرات</TabsTrigger>
            <TabsTrigger value="sohar">فرع صحار</TabsTrigger>
          </TabsList>
          
          <TabsContent value="khoud">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.7012987518983!2d58.1891712!3d23.6150432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de32d55323153%3A0xd93474e2db8fc638!2zQWxvc3RvcmEg2KfZhNil2LPYt9mI2LHYqSDZhNmE2YXZg9mF2YTYp9iqINin2YTYutiw2KfYptmK2Kkg2YTZhNix2YrYp9i22YrZhg!5e0!3m2!1sen!2som!4v1748154842409!5m2!1sen!2som"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع فرع الخوض"
                    className="aspect-video"
                  ></iframe>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">فرع الخوض</h3>
                  <p className="text-lg mb-4">
                    نقدم خدمة توصيل المكملات الغذائية والصحية في منطقة الخوض
                  </p>
                  <a 
                    href="http://wa.me/+96890105050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    تواصل معنا على واتساب
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="amerat">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.718135045807!2d58.4756826!3d23.470629600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91fb5c026e31ad%3A0xcbfb0eed5637e2ca!2z2YXYrdmEINin2YTYp9iz2LfZiNix2Kkg2YTZhNmF2YPZhdmE2KfYqiDYp9mE2LrYsNin2KbZitipINmB2LHYuSDYp9mE2LnYp9mF2LHYp9iq!5e0!3m2!1sen!2som!4v1748154893454!5m2!1sen!2som"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع فرع العامرات"
                    className="aspect-video"
                  ></iframe>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">فرع العامرات</h3>
                  <p className="text-lg mb-4">
                    نقدم خدمة توصيل المكملات الغذائية والصحية في منطقة العامرات
                  </p>
                  <a 
                    href="http://wa.me/+96879371003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    تواصل معنا على واتساب
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sohar">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.509955817877!2d56.708940899999995!3d24.3635573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8b451192ced355%3A0xf7b07bf87212b60e!2z2KfZhNin2LPYt9mI2LHYqSDZhNmE2YXZg9mF2YTYp9iqINin2YTYutiw2KfYptmK2Kk!5e0!3m2!1sen!2som!4v1748154913694!5m2!1sen!2som"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع فرع صحار"
                    className="aspect-video"
                  ></iframe>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">فرع صحار</h3>
                  <p className="text-lg mb-4">
                    نقدم خدمة توصيل المكملات الغذائية والصحية في منطقة صحار
                  </p>
                  <a 
                    href="http://wa.me/+96871529931"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    تواصل معنا على واتساب
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
