import express, { Response } from 'express'
import { genToken } from '../utils/auth-util'
import User, { IUser } from '../db/models/user'
import bcrypt from 'bcrypt'
import UserModel from '../db/models/user'
import { UserRole } from '../constants/types'
const router = express.Router()
router.post('/user/create', async (req: any, res: Response): Promise<any> => {
	try {
		console.log(req.body, 'body')
		const { username, email, password } = req.body
		const hashPassword = await bcrypt.hash(password, 10)
		await UserModel.create({
			username,
			email,
			password: hashPassword,
			createdAt: new Date(),
		})
		return res.sendStatus(200)
	} catch (e) {
		res.status(500).set('Content-Type', 'text/plain').send('Internal server error')
	}
})

export default router
