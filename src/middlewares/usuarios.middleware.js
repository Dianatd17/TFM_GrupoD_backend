const UsuarioModel = require('../models/usuario.model');

const checkEmail = async (req, res, next) => {
    // ¿Existe el email en la base de datos?
    const { email } = req.body;
    try {
        const emailcheck = await UsuarioModel.selectUsuarioByEmail(email);
        if (emailcheck[0].length > 0) {
            return res.json({ fatal: 'Ya existe usuario con ese email' });
        }
        next();
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { checkEmail }