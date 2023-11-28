const dayjs = require('dayjs');
const jsonwebtoken = require('jsonwebtoken');

const createToken = (user) => {
    const payload = {
        user_id: user.id,
        user_role: user.rol,
        exp_at: dayjs().add(7, 'days').unix()
    }
    console.log(user);
    return jsonwebtoken.sign(payload, process.env.SECRET_KEY);
}

module.exports = { createToken };
