import { DataTypes } from 'sequelize';
import { sequelizeExample } from './index';

const User = sequelizeExample.define(
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

export const userInfo = async (openid) => {
  const users = await User.findAll();
  return users;
};

export default {
  userInfo,
};
