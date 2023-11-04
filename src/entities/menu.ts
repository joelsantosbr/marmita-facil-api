import { Food } from "./food"

export type MenuFood = {
  id: number
  name: string
  description: string
  foods: Food[]
  updatedAt: string
  createdAt: string
}