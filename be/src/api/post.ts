import { Request, Response } from 'express'
import User, { IPublicUserInfo, IUser } from '../db/models/user'
import { AuthRequest, AuthUser } from '../constants/types'
import { apiError, parseAuthorization, randomNumberInRange } from '../utils/common-util'
import PostModel from '../db/models/post'
import { Types } from 'mongoose'
export default {
	createPost: async (req: any, res: Response): Promise<any> => {
		try {
			const user = req.user
			await PostModel.create({
				title: req.body.title,
				content: req.body.content,
				createdAt: new Date(),
				createBy: user._id,
			})
			return res.status(200).send({ data: { message: 'Success' } })
		} catch (e) {
			apiError(e, res)
		}
	},
}
