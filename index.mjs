import express from "express";
import mongoose from "mongoose";
import { URI, PORT } from './config.mjs'
import router from './src/route.mjs'
const app = express();
app.use(express.json());
mongoose.connect(URI).then(() => console.log("Database connected successfully")).catch((err) => console.log(err))
app.use('/', router);
app.listen(PORT || 8080, () => { console.log(`server is running on PORT : ${PORT || 8000}`) })