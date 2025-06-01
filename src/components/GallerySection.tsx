
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { meals } from "../data/meals";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MEALS_PER_PAGE = 9;

export default function GallerySection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(meals.map(meal => meal.category)));
    return ["الكل", ...uniqueCategories];
  }, []);

  // Filter meals based on selected category
  const filteredMeals = useMemo(() => {
    if (selectedCategory === "الكل") {
      return meals;
    }
    return meals.filter(meal => meal.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredMeals.length / MEALS_PER_PAGE);
  const startIndex = (currentPage - 1) * MEALS_PER_PAGE;
  const endIndex = startIndex + MEALS_PER_PAGE;
  const currentMeals = filteredMeals.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of gallery section
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">قائمة الوجبات</h2>
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className="transition-all duration-300 hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-6 text-muted-foreground">
          {selectedCategory === "الكل" 
            ? `إجمالي الوجبات: ${filteredMeals.length}` 
            : `وجبات ${selectedCategory}: ${filteredMeals.length}`
          }
        </div>

        {currentMeals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMeals.map((meal, index) => (
            <Dialog key={startIndex + index}>
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
              <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto m-4">
                <DialogHeader>
                  <DialogTitle className="text-right text-lg sm:text-xl">{meal.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-right">
                  <img 
                    src={meal.image} 
                    alt={meal.name} 
                    className="w-full h-48 sm:h-64 object-cover rounded-lg" 
                  />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="text-sm text-muted-foreground order-2 sm:order-1">{meal.category}</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold order-1 sm:order-2 self-end sm:self-auto">
                      {meal.calories} سعرة حرارية
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">{meal.description}</p>
                  <div>
                    <h4 className="font-bold mb-2 text-base sm:text-lg">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
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
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">لا توجد وجبات في هذه الفئة</p>
            <Button 
              variant="outline" 
              onClick={() => handleCategoryChange("الكل")}
              className="mt-4"
            >
              عرض جميع الوجبات
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => goToPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
}
