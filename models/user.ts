import { userMongo } from './entitys';

export const userInfo = async (openid) => {
  //   const users = await User.findAll();
  // 生成document，内容要和定义的Schema保持一致
  //   userMongo.create({
  //     name: 'zhang2',
  //     age: 37,
  //     address: 'hubei2',
  //   });

  const a = await userMongo.find();

  return a;
};

export default {
  userInfo,
};
