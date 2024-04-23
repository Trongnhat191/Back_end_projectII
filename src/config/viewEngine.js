import  Express  from "express";

let configViewEngine = (app) => {
    app.use(Express.static("./src/public"));//ví dụ sau này lấy ảnh trên server thì phải nói cho express chỉ lấy ảnh trong folder public
    app.set("view engine", "ejs");//có thể gõ được logic trong html
    app.set("views","./src/views");//đường link để lấy views, phải viết ở trong folder views mà ko phải folder khác
    //có nghĩa là views đã ở thư mục views rồi
}

module.exports = configViewEngine;