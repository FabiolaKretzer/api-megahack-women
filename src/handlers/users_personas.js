const db = require('../database/connections')

module.exports = {
    async getPersonas(cpf) {
        const user = await db('users')
            .join('users_personas', 'users.id', '=', 'users_personas.user_id')
            .join('personas', 'users_personas.persona_id', '=', 'personas.id')
            .where('users.cpf', cpf)
            .distinct()
            .select('personas.*');

        return user
    }
}