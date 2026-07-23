// import mongoose from "mongoose";
// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const authorSchema = new mongoose.Schema({
//   fname: {
//     type: String,
//     required: [true, 'first name is required'],
//   },
//   lname: {
//     type: String,
//     required: [true, 'last name is required'],
//   },
//   title: {
//     type: String,
//     required: [true, 'title name is required'],

//     enum: {
//       value: ["Mr", "Mrs", "Miss"],
//       message: 'only ["Mr","Mrs","Miss"] are allowed'
//     }
//   },
//   email: {
//     type: String,
//     required: [true, "Email address is required"],
//     lowercase: true,
//     unique: true,
//     match: [emailRegex, 'fill the valid email address']
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required']
//   }
// }, { timestamps: true })

// const authorModel = mongoose.Schema.model('author', authorSchema)
// export default authorModel

import mongoose from "mongoose";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const authorSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "First name is required"],
  },
  lname: {
    type: String,
    required: [true, "Last name is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    enum: {
      values: ["Mr", "Mrs", "Miss"],
      message: 'Only "Mr", "Mrs" and "Miss" are allowed',
    },
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    lowercase: true,
    unique: true,
    match: [emailRegex, "Enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
}, { timestamps: true });

const authorModel = mongoose.model("Author", authorSchema);

export default authorModel;