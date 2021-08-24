const { response} = require('express');
const conexion = require('../database/config');
const bcrypt = require('bcryptjs');


const getUsuarios = (req, res = response) => {
    
    conexion.query('SELECT * FROM usuarios', (err,rows,fields) => {
        if(err) console.log(err);
        res.json(rows);
    });
}

const getUsuario = (req, res = response) => {
    
    const id = req.params.id;
    
    conexion.query('SELECT * FROM usuarios where id=?', [id], (err,rows,fields) => {
        if(err) console.log(err);
        res.json(rows);
    });

}

const loginUsuario = (req, res = response) => {

    const correo = req.body.correo;
    const password = req.body.password;

    console.log(req.body.correo);

    conexion.query('SELECT * FROM usuarios WHERE correo=? LIMIT 1', [correo], (err,rows,fields) => {
        if(err) console.log(err);

        if(rows.length == 0){
            res.json({
                'msg':'No existe ningun usuario con ese correo'
            });
        }else{
            
            if(rows[0].password == password){
                res.json({
                    'msg':'Completado',
                    'id':rows[0].id,
                    'nombre':rows[0].nombre,
                    'apellido':rows[0].apellido,
                    'correo':rows[0].correo
                });
                
            }else{
                res.json({
                    'msg':'La contraseña es incorrecta'
                });

            }

        }

    });

}



const postUsuarios = (req, res = response) => {

    const { nombre, apellido, correo, password, rut, img, markersid, telefono } = req.body.nombre;

    conexion.query('INSERT INTO usuarios (nombre, apellido, correo, password, rut, img, telefono, markersid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellido, correo, password, rut, img, telefono, markersid], (err,rows,fields) => {
        if(err) console.log(err);
        res.json({
            'msg': 'Peticion correcta'
        });
    });

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
    getUsuario,
    postUsuarios,
    deleteUsuarios,
    putUsuarios,
    loginUsuario
}