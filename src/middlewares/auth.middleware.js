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

const auth = (req, res, next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({auth : false, msg : 'No se proporcionó un token'})
    }else{
        const token = authorization.split(' ')[1];

        try{
            const decode = jwt.verify(token, process.env.SECRET_KEY);
            req.user = {id: decode.id, role : decode.role}
            next();
        }catch(e){
            return res.status(500).json({auth : false, msg : 'Token no válido'})

        }
    }

}

module.exports = { 
    createToken,
    auth
 };