const jsonwebtoken = require('jsonwebtoken');
const UsuarioModel = require('../models/usuario.model');

const checkToken = async (req, res, next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({auth : false, msg : 'No se proporcionó un token'})
    }else{
        /*const token = authorization.split(' ')[1];
        try{
            const decode = jwt.verify(token, process.env.SECRET_KEY);
            req.user = {id: decode.id, role : decode.role}
            next();
        } catch(e) {
            return res.status(500).json({auth : false, msg : 'Token no válido'})
        }*/
        const token = req.headers['authorization'];
        // Comprobar si el token es válido
        let payload;
        try {
            payload = jsonwebtoken.verify(token, process.env.SECRET_KEY);
        } catch(error) {
            res.status(403).json({ fatal: error.message });
        }
        // Recuperar el usuario que realiza la petición
        const user = await UsuarioModel.selectUsuarioById(payload.user_id);
        // Metemos el usuario logado en el objeto req para que arrastre en la parte privada
        req.user = user;

        next();
    }

}

module.exports = { 
    checkToken
 };