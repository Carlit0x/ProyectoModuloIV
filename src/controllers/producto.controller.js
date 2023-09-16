import { Producto } from "../models/Producto.js";


export async function getProductos(req, res) {
    try {
        const productos = await Usuario.findAll({
            attributes: ['id','nombre','precio_unitario','estado'],
        });

        res.json(productos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}

export async function createProducto(req, res){
    console.log('Creating project', req.body);
    const {nombre, precio_unitario, estado} = req.body;
    try {
        const newProducto = await Producto.create({
            nombre,
            precio_unitario,
            estado
        },{
            fields: ['nombre','precio_unitario','estado'],
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}

export async function getProducto(req, res){
    const {id}=req.params;
    try {
        const producto = await Producto.findOne({
            where: {id},
        });
        return res.json(producto);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}


export async function updateProducto(req, res){
    const {id}=req.params;
    const {nombre, precio_unitario, estado} = req.body;

    try {
        const producto = await Usuario.findByPk(id);
        producto.nombre = nombre;
        producto.precio_unitario = precio_unitario;
        producto.estado = estado;

        await producto.Save();

        return res.json(producto);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}

export async function deleteProducto(req, res){
    const {id}=req.params;
    try {
        await Producto.destroy({
            where:{ id },
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        }

        );
    }
}