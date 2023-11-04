import dotenv from 'dotenv'
import app from './'

import { foodsRouter, menuFoodsRouter } from './routers'

dotenv.config()

const PORT = parseInt(`${process.env.PORT || 3333}`)

app.listen(PORT, () => console.log(`Server is running at ${PORT}.`))

app.use('/foods', foodsRouter)
app.use('/menu-foods', menuFoodsRouter)