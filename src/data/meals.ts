
export interface Meal {
  name: string;
  category: string;
  image: string;
  description: string;
  ingredients: string[];
}

export const meals: Meal[] = [
  {
    name: "أرز مع تونة",
    category: "وجبة رئيسية",
    image: "https://bank-sohar-dig.b-cdn.net/smart-spoon/food-gallery/_DSC9479-min.jpg",
    description: "تونة مفرومة مصدر ممتاز للبروتين. أرز الزعفران يحتوي على نشويات سريعة الهضم. وجود خضار خفيفة وشريحة ليمون يعزز الهضم.",
    ingredients: [
      "تونة",
      "بصل مفروم",
      "ثوم مهروس",
      "طماطم مفرومة",
      "فلفل رومي (أخضر أو ملون)",
      "بهارات (اختياري)",
      "زيت نباتي",
      "أرز بسمتي منقوع مسبقًا",
      "ماء أو مرق دجاج",
      "زعفران أو لون طعام أصفر (اختياري)",
      "ورق غار وحب هيل"
    ]
  },
  // ... rest of the meals data
];
