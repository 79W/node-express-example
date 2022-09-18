import { DataTypes } from 'sequelize';
import { sequelizeExample } from '../../db';

export const userMysql = sequelizeExample.define(
  'user',
  {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.NUMBER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

export default userMysql;
