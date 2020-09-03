const api = require('./api')

module.exports = {
    async getScore(cpf, dataNascimento) {
        const score = await api.get('proScore/score/v1', {
            headers: {
                'X-Api-Key': process.env.CREDENTIAL
            },
            params: {
                tcpfcnpj: cpf,
                tdatnsc: dataNascimento
            }
        })

        return score.data
    }
}