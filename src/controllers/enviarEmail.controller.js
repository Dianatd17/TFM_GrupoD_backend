const nodemailer = require("nodemailer");
const UsuarioModel = require('../models/usuario.model');
require("dotenv").config();


let newUser
let emailsDestino
const postEmail = async (req, res) => {
    try {
        const { email } = req.body;
        newUser = email;

        //Vamos a obtener los usuarios que son de tipo admin para comunicar que hay un logogpeda pendiente de activar
        const [result] = await UsuarioModel.selectUsuarioRol('admin');
        if (result) {

            const filterArray = result.map(({ email }) => (email))
            emailsDestino = filterArray.join();
        } else {
            res.status(500).json({ msg: ` No se ha enviado el email ` })
        }


        const msghtml = `
<h3>Nuevo logopeda</h3>
<p>usuario ${newUser} pendiente de activar<p>`;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,

            auth: {
                user: process.env.MAILUSER,
                pass: process.env.MAILPASSW,
            },
        })


        const mailOptions = {
            from: process.env.MAILUSER,
            to: emailsDestino,
            subject: "Nuevo logopeda pendiente de activar",
            html: msghtml,
        }
        { }


        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.status(500).json({ msg: ` No se ha enviado el email ` })
            } else {
                res.status(200).json({ success: 'enviado' });

            }
        })

    } catch (error) {
        res.status(500).json({ fatal: error.message });
    }
};





module.exports = {
    postEmail
};
