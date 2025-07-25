import express, { Express } from 'express'

const app: Express = express()

app.use(express.json())

app.listen(3000, () => {
	console.log('Server running on PORT 3000')
})
