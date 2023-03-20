import express from 'express'
import { MongoClient, Db, MongoClientOptions } from 'mongodb'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
import config from './config'
import db from './db'
import cors from 'cors'
import api from './api'
// Replace the connection string with your own
db.init().then(() => {
	const app = express()
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(cors())
	app.use('/', api)
	app.get('/', (req, res) => {
		res.send('Hello, World!')
	})

	const port = config.port || 3000
	app.listen(port, () => {
		console.log(`Server listening on port ${port}`)
	})
})
