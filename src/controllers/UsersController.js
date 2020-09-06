const { getUsers } = require('../handlers/users');

module.exports = {
    async show(request, response) {
        const { token } = request.query

        const user = await getUsers(token)

        if (!user) {
            return response.status(400).json({ message: 'User not found.' });
        }

        response.status(200).json({ name: user.name })
    }
}