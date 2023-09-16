import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Categoria } from "./Categoria.js";
import { Producto } from "./Producto.js";

export const Usuario = sequelize.define(
    'usuarios',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING,
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado: {
            type : DataTypes.BOOLEAN,
        }
    },
    {
        timestamps: false,
    }
);

Usuario.hasMany(Categoria, {
    foreignKey: 'usuario_id',
    sourceKey: 'id',
}
);

Categoria.belongsTo(Usuario, {
    foreignKey:'usuario_id' ,  //nombre de la llave foranea en categorias
    targetKey: 'id',
}
);

Usuario.hasMany(Producto, {
    foreignKey: 'usuario_id',
    sourceKey: 'id',
}
);

Producto.belongsTo(Usuario, {
    foreignKey:'usuario_id',
    targetKey: 'id',
}
);