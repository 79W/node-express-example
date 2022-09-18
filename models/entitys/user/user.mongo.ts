import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
});

export const userMongo = mongoose.model('Blog', blogSchema);

export default userMongo;
