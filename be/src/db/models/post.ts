import { Schema, Types, model } from 'mongoose'

const PostSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	createdAt: Date,
	createBy: {
		type: Types.ObjectId,
		ref: 'User',
	},
	// profile info
})

export interface IPost {
	_id: Types.ObjectId
	title: string
	content: string
	description: string
	createdAt: Date
	createBy: Types.ObjectId
}

export default model<IPost>('Post', PostSchema)
