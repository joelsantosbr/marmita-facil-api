import express from 'express'

import { getFoods } from '../controllers/foodsController'

const router = express.Router()

router.get('/', getFoods)

export default router