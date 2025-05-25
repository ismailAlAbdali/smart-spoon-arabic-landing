
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { meals } from "../data/meals";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">قائمة الوجبات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={meal.image}
                      alt={meal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="text-right">
                    <h3 className="text-xl font-bold">{meal.name}</h3>
                    <p className="text-sm text-muted-foreground">{meal.category}</p>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-right">{meal.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-right">
                  <img src={meal.image} alt={meal.name} className="w-full h-64 object-cover rounded-lg" />
                  <p className="text-muted-foreground">{meal.description}</p>
                  <div>
                    <h4 className="font-bold mb-2">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {meal.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
