import mongoose from 'mongoose';
const blogSchema = new mongoose.schema({
  title: {
    type: String,
    required: [true, 'title name is required'],
  },
  body: {
    type: String,
    require: [true, 'content is required']
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'author',
    required: [true, 'AuthorId is required']
  }
})