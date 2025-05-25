import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const statistics = [
  {
    title: "اشتراك نشط",
    value: "+45",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=200",
    alt: "اشتراكات نشطة",
  },
  {
    title: "عدد العملاء",
    value: "+1000",
    image:
      "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=200",
    alt: "عملاء سعداء",
  },
  {
    title: "وجبة يومية",
    value: "+110",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200",
    alt: "وجبات يومية",
  },
  {
    title: "سنوات الخبرة",
    value: "+5",
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=200",
    alt: "سنوات الخبرة",
  },
];

export default function StatisticsSection() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">إحصائياتنا</h2>

        <div className="grid grid-cols-1 gap-8">
          {statistics.map((stat, index) => (
            <Card
              key={index}
              className="border-2 border-primary/10 overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={stat.image}
                  alt={stat.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-center">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary text-center">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
