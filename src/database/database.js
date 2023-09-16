import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'project_db',
    'postgres',
    'Sistemas123',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);
