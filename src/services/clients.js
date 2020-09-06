const api = require('axios')

module.exports = {
    async getScore(cpf, dataNascimento) {
        const score = await api.get('https://gateway.gr1d.io/sandbox/proScore/score/v1', {
            headers: {
                'X-Api-Key': process.env.CREDENTIAL_PROSCORE
            },
            params: {
                tcpfcnpj: cpf,
                tdatnsc: dataNascimento
            }
        })

        if (!score.data || !score.data.registro || !score.data.registro[1]) {
            return false
        }

        return score.data.registro[1].resultado_final_do_score
    },

    async getVehicles(cpf) {
        const vehilhes = await api.get('https://gateway.gr1d.io/sandbox/unionsolution/localizaveiculos/v1/localizaVeiculo', {
            headers: {
                'X-Api-Key': process.env.CREDENTIAL_VEHICLES
            },
            params: {
                pstrDoc: cpf,
                pstrFormat: 'json'
            }
        })

        return vehilhes.data
    },

    async getAverageIncome(latitude, longitude) {
        const income = await api.get('https://gateway.gr1d.io/sandbox/geofusion/rendaprovavel/v1/v1/consumer', {
            headers: {
                'X-Api-Key': process.env.CREDENTIAL_INCOME
            },
            params: {
                latitude,
                longitude
            }
        })

        return income.data
    },

    async getPriceVehilhe(chassi, placa) {
        const price = await api.get('https://gateway.gr1d.io/sandbox/unionsolution/precificador/v1/precificador', {
            headers: {
                'X-Api-Key': process.env.CREDENTIAL_FIPE
            },
            params: {
                pstrChassi: chassi,
                pstrPlaca: placa,
                pstrFormat: 'json'
            }
        })

        return price.data.struct_RespostaRst.Resposta.struct_ResultadoPrecificador.PrecoMedio
    }
}