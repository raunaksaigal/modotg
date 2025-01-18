import {Sequelize, DataTypes} from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite3'
  });

export const User = sequelize.define(
    'User',
    {
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }
)

