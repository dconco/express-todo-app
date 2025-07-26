import { Response } from 'express'

const sendError = (res: Response, status: number, message: string): void => {
	res.status(status).json({ message })
}

const sendSuccess = (res: Response, data: any): void => {
	res.json({ success: true, data })
}

export { sendError, sendSuccess }
