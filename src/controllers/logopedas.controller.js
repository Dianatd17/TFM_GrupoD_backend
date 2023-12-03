const LogopedaModel = require('../models/logopeda.model');
const selectAllEspecialidades = require('../models/especialidad.model');

const getAllLogopedas = async (req, res) => {
  try {
    const [result] = await LogopedaModel.selectAllLogopedas();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ msg: `no hay resultados en tu busqueda` })
    }
  } catch (error) {
    res.status(500).json({ fatal: error.message });
  }
};

const getLogopedaById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await LogopedaModel.selectLogopedaById(id);
    if (result) {
      res.status(200).json(result[0])
    } else {
      res.status(204).json({ msg: ` no hay resultados ` })
    }
  } catch (error) {
    res.status(500).json({ fatal: error.message });
  }
};

// usamos selectLogopedaEdad('infancia')
const getInfancia = async (req, res) => {
  try {
    const result = await LogopedaModel.selectLogopedasByEdad('infancia');
    if (result) {
      res.status(200).json(result[0]);
    } else {
      res.status(204).json({ msg: `no hay resultados en tu busquedas` })
    }
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

// usamos selectLogopedaEdad('adulto')
const getAdultos = async (req, res) => {
  try {
    const result = await LogopedaModel.selectLogopedasByEdad('adulto')
    if (result) {
      res.status(200).json(result[0]);
    } else {
      res.status(204).json({
        msg: 'no hay resultados '
      })
    }
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

//devuelve todos los que tienen relación con id especialidad en especialidades_has_logopedas
const getByEspecialidadId = async (req, res) => {
  try {
    const idSpecialidad = req.params.idespecialidad;
    const result = await LogopedaModel.selectLogopedasByEspecialidad(idSpecialidad);
    if (result) {
      res.status(200).json(result[0]);
    } else {
      res.status(204).json({ msg: `no hay resultados` });
    }
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};



const postConectarLogopeda = async (req, res) => {
  try {

    const { logopeda_id, cliente_id } = req.body;
    const [resultcnt] = await LogopedaModel.selectConnectionLogopedasHasClientes(logopeda_id, cliente_id);
    const { cnt } = resultcnt[0];

    //Antes de hacer un insert, verificamos si ya existe un registro del logopeda , con el cliente
    if (cnt > 0) {
      res.status(204).json({ msg: `El registro ya existe` });
    } else {
      //Creamos el registro de contacto cliente- logopeda
      const [result] = await LogopedaModel.insertConnection(req.body);
      if (result) {
        res.status(200).json(result.insertId);
      } else {
        res.status(204).json({ msg: `no hay resultados` });
      }
    }



  } catch (error) {
    res.json({ fatal: error.message });
    //res.status(500).json({ Error: error.message });
  }
};

const putConectarLogopeda = async (req, res) => {
  try {
    const { idConecta } = req.params;
    const [result] = await LogopedaModel.updateConnection(idConecta, req.body);
    if (result) {
      res.status(200).json({ succes: 'actualización correcta' });
    } else {
      res.status(204).json({ msg: `no hay resultados` });
    }

  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

module.exports = {
  getAllLogopedas,
  getLogopedaById,
  getInfancia,
  getAdultos,
  getByEspecialidadId,
  postConectarLogopeda,
  putConectarLogopeda
};