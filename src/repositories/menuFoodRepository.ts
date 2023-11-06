import { PrismaClient } from "@prisma/client"
import { MenuFood } from "../entities/menu"

const prisma = new PrismaClient()

function isArrayOfMenuFoods(menu: unknown): menu is MenuFood[] {
  return Array.isArray(menu) && menu.every(isFood)
}

function isFood(menu: unknown): menu is MenuFood {
  return (
    typeof menu === "object" &&
    menu !== null &&
    "id" in menu &&
    "name" in menu &&
    "description" in menu &&
    "updatedAt" in menu &&
    "createdAt" in menu
  )
}

async function getAllMenuFoods(): Promise<MenuFood[]> {
  const menuFoods: unknown = await prisma.menuFood.findMany({
    include: {
      foods: true
    }
  })
  await prisma.$disconnect()
  
  if (!isArrayOfMenuFoods(menuFoods)) {
    throw new Error('Received malformed foods from server')
  }
  return menuFoods
}

export {
  getAllMenuFoods
}
