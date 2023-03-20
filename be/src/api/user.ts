import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import User, { IUser } from '../db/models/user'
import { AuthRequest, AuthUser } from '../constants/types'
import UserModel from '../db/models/user'
import { apiError, parseAuthorization, randomNumberInRange } from '../utils/common-util'
import config from '../config'
import { genToken, UserRequest } from '../utils/auth-util'

export default {
	signIn: async (req: any, res: Response): Promise<any> => {
		try {
			const { email, password } = req.body
			const user = await User.findOne({ email })
			console.log(user)
			if (!user) return res.status(400).send({ error: 'User with provided email is not exists' })
			const validate = await bcrypt.compare(password, user.password)
			if (!validate) return res.status(400).send({ error: 'Incorrect email or password' })
			const token = genToken(user)
			return res.status(200).send({ data: { user, token } })
		} catch (e) {
			apiError(e, res)
		}
	},
	signUp: async (req: any, res: Response): Promise<any> => {
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
			return res.status(200).send({
				data: {
					message: 'success',
				},
			})
		} catch (e) {
			apiError(e, res)
		}
	},

	userInfo: async (req: AuthRequest, res: Response): Promise<any> => {
		try {
			const authUser = req.user as IUser
			return res.status(200).send({ data: authUser })
		} catch (e) {
			apiError(e, res)
		}
	},
}
