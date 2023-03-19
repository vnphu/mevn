import mongoose, { ConnectOptions } from 'mongoose'
import config from '../config'

async function init() {
	try {
		const db = await mongoose.connect(config.mongoDBConn)
		console.log('[Db::init] DB connected')
		return db
	} catch (error) {
		console.error('[Db::init] Failed to connect', error)
		process.exit(1)
	}
}

export default { init }
