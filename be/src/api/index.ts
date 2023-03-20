import express, { Response } from 'express'

const router = express.Router()
import UserFn from './user'
import { requireUser } from '../middlewares/auth'

router.post('/user/sign-up', UserFn.signUp)
router.post('/user/sign-in', UserFn.signIn)
router.get('/user/get-info', requireUser, UserFn.userInfo)

export default router
