const { response} = require('express');


const getUsuarios = (req, res = response) => {
    res.json({
        'msg': 'Api Get'
    })
}

const postUsuarios = (req, res = response) => {

    const body = req.body;


    res.json({
        'msg': 'Api post',
        body
    })
}

const deleteUsuarios = (req, res = response) => {
    res.json({
        'msg': 'Api delete'
    })
}

const putUsuarios = (req, res = response) => {

    const id = req.params.id;

    res.json({
        'msg': 'Api put',
        'id': id
    })
}





module.exports = {
    getUsuarios,
    postUsuarios,
    deleteUsuarios,
    putUsuarios
}