const api = require('./api')

module.exports = {
    async getScore(cpf, dataNascimento) {
        const score = await api.get('proScore/score/v1', {
            headers: {
                'X-Api-Key': process.env.CREDENTIAL_PROSCORE
            },
            params: {
                tcpfcnpj: cpf,
                tdatnsc: dataNascimento
            }
        })

        return score.data
    },

    async getVehicles(cpf) {
        const vehilhes = await api.get('unionsolution/localizaveiculos/v1/localizaVeiculo', {
            headers: {
                'X-Api-Key': process.env.CREDENTIAL_VEHICLES
            },
            params: {
                pstrDoc: cpf,
                pstrFormat: 'json'
            }
        })

        return vehilhes.data
    }
}