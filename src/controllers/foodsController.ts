
import { Request, Response } from 'express'
import { getAllFoods } from '../repositories/foodRepository'

async function getFoods(req: Request, res: Response) {
  const foods = await getAllFoods()
  if (!Array.isArray(foods) || foods.length === 0)
    res.sendStatus(404)
  
  res.json(foods)
}

export {
  getFoods
}