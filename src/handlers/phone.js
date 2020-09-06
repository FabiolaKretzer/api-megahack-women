const db = require('../database/connections')

module.exports = {
    async getPricePhone(phone) {
        const price = await db('phone')
            .where('phone.model', phone.model)
            .where('phone.mark', phone.mark)
            .where('phone.name_os', phone.name_os)
            .distinct()
            .select('phone.price')
            .first();

        return price
    }
}