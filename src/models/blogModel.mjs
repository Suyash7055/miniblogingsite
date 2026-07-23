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
  },
  tags: [String],
  category: {
    type: String,
    required: [true, 'category id required']
  },
  subcategory: {
    type: [String]
  },
  deletedAt: {
    type: Date,
    default: null
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date,
    default: Date.now()
  },
  isPublished: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })
const blogModel = mongoose.model('blog', blogSchema)
export default blogModel;