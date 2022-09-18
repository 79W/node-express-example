import { User } from './entitys/user.entity';
import { mysqlConnection } from './index';
const userModel = mysqlConnection.getRepository(User);

export const userInfo = async (openid) => {
  console.log('进来了');
  const users = await userModel.find();
  console.log(users);
  return users;
};

export default {
  userInfo,
};
