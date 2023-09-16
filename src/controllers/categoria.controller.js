import { Categoria } from "../models/Categoria.js";
import { Producto } from "../models/Producto.js";

export async function getCategorias(req, res) {
    try {
        const categorias = await Usuario.findAll({
            attributes: ['id','nombre'],
        });

        res.json(categorias);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}


export async function createCategoria(req, res){
    console.log('Creating project', req.body);
    const {nombre} = req.body;
    try {
        const newCategoria = await Usuario.create({
            nombre
        },{
            fields: ['nombre'],
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}

export async function getCategoria(req, res){
    const {id}=req.params;
    try {
        const categoria = await Categoria.findOne({
            where: {id},
        });
        return res.json(categoria);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}


export async function updateCategoria(req, res){
    const {id}=req.params;
    const {nombre} = req.body;

    try {
        const categoria = await Usuario.findByPk(id);
        categoria.nombre = nombre;

        await categoria.Save();

        return res.json(categoria);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}


export async function deleteCategoria(req, res){
    const {id}=req.params;
    try {
        await Categoria.destroy({
            where:{ id },
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