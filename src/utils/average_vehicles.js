const { getPriceVehilhe } = require("../services/clients")
const { getVehicles } = require('../services/clients')

module.exports = {
    async averageVehicles(user, personas) {
        const vehicles_user = await getVehicles(user.cpf)
        console.log(vehicles_user)
        const vehicle_user = vehicles_user.struct_RespostaRst.Resposta.VEICULOS.ITEM

        if (vehicle_user.length == 0) {
            return 0
        }

        let some = parseFloat(await getPriceVehilhe(vehicle_user[0].CHASSI, vehicle_user[0].PLACA))
        let index = 1

        for (persona in personas) {
            const vehicles_persona = await getVehicles(persona.cpf)

            const vehicle_persona = vehicles_persona.struct_RespostaRst.Resposta.VEICULOS.ITEM

            some += parseFloat(await getPriceVehilhe(vehicle_persona[0].CHASSI, vehicle_persona[0].PLACA))
            index++
        }

        return some / index
    }
}