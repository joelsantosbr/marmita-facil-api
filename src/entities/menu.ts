import { Food } from "./food"

export type Menu = {
  id: number
  name: string
  description: string
  foods: Food[]
  updatedAt: string
  createdAt: string
}