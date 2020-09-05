const db = require('../database/connections')

module.exports = {
    async show(request, response) {
        const { token } = request.query

        const user = await db('users').where('token', token).first()

        if (!user) {
            return response.status(400).json({ message: 'Point not found.' });
        }

        response.status(200).json({ name: user.name })
    }
}