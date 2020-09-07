const { getPricePhone } = require('../handlers/phone')
const { getUsers } = require('../handlers/users')
const { getPersonas } = require('../handlers/users_personas')

const { getScore, getAverageIncome } = require('../services/clients')
const { averageVehicles } = require('../utils/average_vehicles')

module.exports = {
  async show(request, response) {
    const { token } = request.headers
    const { phone, latitude, longitude } = request.query
    // console.log(request.query)
    const user = await getUsers(token)

    if (!user) {
      return response.status(400).json({ message: 'User not found.' })
    }

    const parents = await getPersonas(user.cpf)

    const score_user = await getScore(user.cpf, user.data_nsc)

    const average_income = await getAverageIncome(latitude, longitude)

    const average_vehicles = await averageVehicles(user, parents)
    console.log(phone)
    const { price } = await getPricePhone(phone)

    let limit = price
    if (score_user >= 700) {
      limit = (average_income + average_vehicles) / 2
    } else if (300 >= score_user && score_user < 700) {
      limit = (average_income + average_vehicles) / 5
    }

    const limit_lending = limit.toFixed(2)

    response.status(200).json({ limit_lending })
  },
}
