
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "أسبوعي",
    price: "299",
    description: "مناسب للتجربة الأولى",
    features: [
      "5 وجبات أسبوعية",
      "توصيل مجاني",
      "اختيار من قائمة محدودة",
      "دعم عبر الواتساب",
    ],
    popular: false,
  },
  {
    name: "شهري",
    price: "999",
    description: "الخيار الأكثر شعبية",
    features: [
      "20 وجبة شهريًا",
      "توصيل مجاني",
      "اختيار من القائمة الكاملة",
      "استشارة تغذية مجانية",
      "تتبع السعرات والبروتين",
    ],
    popular: true,
  },
  {
    name: "ربع سنوي",
    price: "2699",
    description: "أفضل قيمة لفترة طويلة",
    features: [
      "60 وجبة ربع سنويًا",
      "توصيل مجاني",
      "اختيار من القائمة الكاملة",
      "استشارة تغذية متعددة",
      "تتبع السعرات والبروتين",
      "خطة تغذية مخصصة",
      "وجبات إضافية بخصم 15%",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">خطط الاشتراك</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          اختر الخطة المناسبة لاحتياجاتك الغذائية
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`${
                plan.popular 
                  ? "border-primary shadow-lg shadow-primary/10 relative overflow-hidden" 
                  : "border"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 font-medium">
                  الأكثر شعبية
                </div>
              )}
              <CardHeader className={plan.popular ? "pt-8" : ""}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline text-right">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="mr-2 text-muted-foreground">ريال / {plan.name.split(" ")[0]}</span>
                </div>
                <ul className="space-y-2 text-right">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-end">
                      <span className="ml-2">{feature}</span>
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular ? "" : "bg-secondary hover:bg-secondary/90"
                  }`}
                >
                  اشترك الآن
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-4">تحتاج إلى خطة مخصصة لفريقك أو مؤسستك؟</p>
          <Button variant="outline" size="lg">احصل على عرض سعر</Button>
        </div>
      </div>
    </section>
  );
}
