const { getVehicles } = require('../services/clients')

module.exports = {
    async index(request, response) {
        const vehilhes = await getVehicles('10241526930')

        response.status(200).json(vehilhes.struct_RespostaRst.Resposta.VEICULOS.ITEM)
    }
}