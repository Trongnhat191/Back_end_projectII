import Express from "express";
import bodyParser from "body-parser";//lấy được tham số bên phía client
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
import connectDB from './config/connectDB';
import cors from 'cors';

require('dotenv').config();// để chạy được process.env

let app = Express();
//app.use(cors({ origin: true }));
app.use(cors({ credentials: true, origin: true }));
//config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);// khai báo tất cả các link cho Express biết để nó tìm kiếm

connectDB();

let port = process.env.PORT || 6969;//nếu ko thấy cổng thì lấy cổng 6969

app.listen(port, () => {
    console.log("Backend NodeJS is running on the port: " + port)
})


