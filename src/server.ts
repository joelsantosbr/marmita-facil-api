import dotenv from 'dotenv'
import app from './'
import foodsRouter from './routers/foodsRouter'

dotenv.config()

const PORT = parseInt(`${process.env.PORT || 3333}`)

app.listen(PORT, () => console.log(`Server is running at ${PORT}.`))

app.use('/foods', foodsRouter)