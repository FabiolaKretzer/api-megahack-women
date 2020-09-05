const { getScore } = require('../services/clients')

module.exports = {
    async index(request, response) {
        const score = await getScore('10241526930', '28051998')

        response.status(200).json(score.registro[1].resultado_final_do_score)
    }
}