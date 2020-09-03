const ProScore = require("../services/ProScore")

module.exports = {
    async index(request, response) {
        const score = await ProScore.getScore('', '')
        console.log(score)
        response.status(200).json(score.registro[1].resultado_final_do_score)
    }
}