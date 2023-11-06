import { PrismaClient } from "@prisma/client"
import { Food } from "../entities/food"

const prisma = new PrismaClient()

function isArrayOfFoods(foods: unknown): foods is Food[] {
  return Array.isArray(foods) && foods.every(isFood)
}

function isFood(food: unknown): food is Food {
  return (
    typeof food === "object" &&
    food !== null &&
    "id" in food &&
    "type" in food &&
    "name" in food &&
    "menuId" in food &&
    "updatedAt" in food &&
    "createdAt" in food
  )
}

async function getAllFoods(): Promise<Food[]> {
  const foods: unknown = await prisma.food.findMany()
  await prisma.$disconnect()
  
  if (!isArrayOfFoods(foods)) {
    throw new Error('Received malformed foods from server')
  }
  return foods
}

export {
  getAllFoods
}
