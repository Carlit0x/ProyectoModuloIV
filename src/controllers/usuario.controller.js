import { Usuario } from "../models/Usuario.js";
import { Categoria } from "../models/Categoria.js";
import { Producto } from "../models/Producto.js";


export async function getUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['id','nombre','correo','contrasena','estado'],
        });

        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}

export async function createUsuario(req, res){
    console.log('Creating project', req.body);
    const {nombre, correo, contrasena, estado} = req.body;
    try {
        const newUsuario = await Usuario.create({
            nombre,
            correo,
            contrasena,
            estado
        },{
            fields: ['nombre','correo','contrasena','estado'],
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}

export async function getUsuario(req, res){
    const {id}=req.params;
    try {
        const usuario = await Usuario.findOne({
            where: {id},
        });
        return res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}


export async function updateUsuario(req, res){
    const {id}=req.params;
    const {nombre, correo, contrasena, estado} = req.body;

    try {
        const usuario = await Usuario.findByPk(id);
        usuario.nombre = nombre;
        usuario.correo = correo;
        usuario.contrasena = contrasena;
        usuario.estado = estado;

        await usuario.Save();

        return res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}

export async function deleteUsuario(req, res){
    const {id}=req.params;
    try {
        await Categoria.destroy({
            where:{ usuario_id: id },
        });
        await Usuario.destroy({
            where: {id},
        });
        await Producto.destroy({
            where:{ usuario_id: id },
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}