const jsonwebtoken = require('jsonwebtoken');
const UsuarioModel = require('../models/usuario.model');

const checkToken = async (req, res, next) => {
    // Comprobar si el token viene incluido en la cabecera
    if(!req.headers['authorization']) {
        return res.status(403).json({ fatal: 'Necesitas la cabecera de authorization' });
    }
    
    const token = req.headers['authorization'];
    // Comprobar si el token es válido
    let payload;
    try {
        payload = jsonwebtoken.verify(token, process.env.SECRET_KEY);
        //console.log(payload);
    } catch(error) {
        res.status(403).json({ fatal: error.message });
    }
    // Recuperar el usuario que realiza la petición
    const user = await UsuarioModel.selectUsuarioById(payload.user_id);
    // Metemos el usuario logado en el objeto req para que arrastre en la parte privada
    req.user = user;

    next();
}

module.exports = { checkToken }