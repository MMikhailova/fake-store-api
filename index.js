import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express from 'express'
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser'
import router from './routes/user.js';


dotenv.config();
const PORT = process.env.PORT || 3005

//initialize express
const app = express()

//parse cookies
app.use(cookieParser());

const __fileName = fileURLToPath(import.meta.url);
const PATH = path.dirname(__fileName);

//set template egine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

//parse the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set public folder
app.use(express.static(path.join(PATH, 'public')));


//routers
app.use(router);

//404
app.use('*', (req, res) => {
    res.status(404).render('404',{message:`Page is not found`})
})
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)})