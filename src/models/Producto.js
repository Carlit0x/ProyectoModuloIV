import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Producto = sequelize.define(
    'productos',
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
        precio_unitario: {
            type: DataTypes.FLOAT,
        },
        estado: {
            type: DataTypes.BOOLEAN,
        }
    }
);