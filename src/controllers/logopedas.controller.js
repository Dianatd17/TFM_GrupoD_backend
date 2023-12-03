const LogopedaModel = require('../models/logopeda.model');
const selectAllEspecialidades = require('../models/especialidad.model'); 

const getAllLogopedas = async (req, res) => {
  try {
    const [result] = await LogopedaModel.selectAllLogopedas();
    if(result){
      res.status(200).json(result);
    }else{
      res.status(204).json({msg : `no hay resultados en tu busqueda`})
    }
  } catch (error) {
    res.status(500).json({ fatal: error.message });
  }
};

const getLogopedaById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await LogopedaModel.selectLogopedaById(id);
    if(result){
      res.status(200).json(result[0])
    }else{
      res.status(204).json({msg : ` no hay resultados `})
    }
  } catch (error) {
    res.status(500).json({ fatal: error.message });
  }
};

// usamos selectLogopedaEdad('infancia')
const getInfancia = async (req, res) => {
  try {
    const result = await LogopedaModel.selectLogopedasByEdad('infancia');
     if(result){
     res.status(200).json(result[0]);
     }else{
      res.status(204).json({msg:  `no hay resultados en tu busquedas`})
     }
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

// usamos selectLogopedaEdad('adulto')
const getAdultos = async (req, res) => {
  try {
    const result = await LogopedaModel.selectLogopedasByEdad('adulto')
    if(result){
      res.status(200).json(result[0]);
    }else{
      res.status(204).json({msg : 'no hay resultados '
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
    if(result){
      res.status(200).json(result[0]);
    }else{
      res.status(204).json({msg: `no hay resultados`});
    }
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

const getClientesByLogopedas = async (req,res) =>{
  try{
    const { idLogopeda } = req.params
    const [result] = await LogopedaModel.selectClientesByLogopedas(idLogopeda)
    res.json(result)
  }catch(error){
    res.status(500).json({Error: error.message})
  }
}


const postConectarLogopeda = async (req, res) => {
  try {
    // crea relación del id del token con logopeda, si es el cliente
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const putConectarIdCliente = async (req, res) => {
  try {
    //cambia status del id del token con el cliente, si es el logopeda
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = {
  getAllLogopedas,
  getLogopedaById,
  getInfancia,
  getAdultos,
  getByEspecialidadId,
  postConectarLogopeda,
  putConectarIdCliente,
  getClientesByLogopedas
};