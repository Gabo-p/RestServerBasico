const { Router } = require('express');
const { getUsuarios, putUsuarios, postUsuarios, deleteUsuarios } = require('../controllers/usuarios');

const router = Router();



router.get('/',  getUsuarios);

router.post('/', postUsuarios);

router.delete('/', deleteUsuarios);

router.put('/:id', putUsuarios);













module.exports = router;