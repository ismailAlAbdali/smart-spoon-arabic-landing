
export interface Nutrition {
  calories: number
  protein: number
  carbs: number
  fat: number
}

export interface MealData {
  id: number
  name: string
  description: string
  category: string
  imageUrl: string
  tags: string[]
  ingredients: string[]
  nutrition: Nutrition
}
