export default {
	// system config
	port: process.env.PORT,
	// auth
	jwtSecret: process.env.SECRET,
	adminCode: process.env.ADMIN_CODE,
	//mongo
	mongoDBConn: process.env.MONGO_URL,
}
