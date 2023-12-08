const dayjs = require('dayjs');
const jsonwebtoken = require('jsonwebtoken');
const NodeGeocoder = require('node-geocoder');

const createToken = (user) => {
    const payload = {
        user_id: user.id,
        user_role: user.rol,
        exp_at: dayjs().add(7, 'days').unix()
    }
    return jsonwebtoken.sign(payload, process.env.SECRET_KEY);
}

const getGeolocation = async (direccion, localidad, provincia) => {
    if ((direccion && direccion !== null) 
    || (localidad && localidad !== null) 
    || (provincia && provincia !== null)) {
        const options = {
            provider: 'google',
            // Optional depending on the providers
            apiKey: 'AIzaSyDVagBwIQ9b9-lCfA5l3IS2ZReTZ7e884o', // for Mapquest, OpenCage, Google Premier
        };
        const geocoder = NodeGeocoder(options);
        // Using callback
        //const response = await geocoder.geocode('29 champs elysée paris');
        const response = await geocoder.geocode(`${direccion} ${localidad} ${provincia}, España`);
        if (response) return [response[0].latitude, response[0].longitude];
    }
    return [null, null];
}

module.exports = { createToken, getGeolocation };
