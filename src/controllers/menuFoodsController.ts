
import { Request, Response } from 'express'
import { getAllMenuFoods } from '../repositories/menuFoodRepository'

async function getMenuFoods(req: Request, res: Response) {
  const menuFoods = await getAllMenuFoods()
  if (!Array.isArray(menuFoods) || menuFoods.length === 0)
    res.sendStatus(404)
  
  res.json(menuFoods)
}

export {
  getMenuFoods
}