const { Router } = require('express');
const { getUsuarios, getUsuario, putUsuarios, postUsuarios, deleteUsuarios, loginUsuario } = require('../controllers/usuarios');

const router = Router();



router.get('/',  getUsuarios);

router.get('/:id',  getUsuario);

router.post('/', postUsuarios);

router.post('/login/', loginUsuario);

router.delete('/', deleteUsuarios);

router.put('/:id', putUsuarios);













module.exports = router;