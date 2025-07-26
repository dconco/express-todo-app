import express, { Express } from 'express'
import todoRoutes from './routes/todoRoutes'

const app: Express = express()

app.use(express.json())
app.use(express.static('public'))

app.use('/api', todoRoutes)

app.listen(3000, () => {
	console.log('Server running on PORT 3000')
})
