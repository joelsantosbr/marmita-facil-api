import express from 'express'

import { getMenuFoods } from '../controllers/menuFoodsController'

const router = express.Router()

router.get('/', getMenuFoods)

export default router