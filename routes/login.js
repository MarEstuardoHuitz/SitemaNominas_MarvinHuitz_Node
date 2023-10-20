const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');
//const { verificarToken } = require('../middleware/auth'); 


// Rutas para login
router.post('/', loginController.iniciarSesion);



module.exports = router;
