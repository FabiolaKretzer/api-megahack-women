const db = require('../database/connections')

module.exports = {
    async getUsers(token) {
        const user = await db('users').where('token', token).first()

        return user
    }
}