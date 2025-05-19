
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect for sticky navbar behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Smart Spoon" className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          <a href="#hero" className="text-foreground hover:text-primary transition-colors">
            الرئيسية
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            المميزات
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            الأسعار
          </a>
          <a href="#locations" className="text-foreground hover:text-primary transition-colors">
            المواقع
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            تواصل معنا
          </a>
          <a href="/terms" className="text-foreground hover:text-primary transition-colors">
            الشروط والأحكام
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <div className="hidden md:block">
            <Button variant="outline">احصل على عرض سعر</Button>
          </div>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">القائمة</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>
                <a href="#hero" className="w-full text-right">الرئيسية</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#features" className="w-full text-right">المميزات</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#pricing" className="w-full text-right">الأسعار</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#locations" className="w-full text-right">المواقع</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#contact" className="w-full text-right">تواصل معنا</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/terms" className="w-full text-right">الشروط والأحكام</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" className="w-full text-right">احصل على عرض سعر</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
