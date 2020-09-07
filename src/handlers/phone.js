const db = require('../database/connections')

module.exports = {
    async getPricePhone(phone_model) {
        const price = await db('phone')
            .where('phone.model', phone_model)
            .distinct()
            .select('phone.price')
            .first()

        return price
    },
}
