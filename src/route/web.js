//mỗi lần truy cập vào 1 đường link của website thì nó sẽ chạy vào
//file này đầu tiên
//file này có nhiệm vụ điều hướng
//Service

import  Express  from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = Express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello World with Nhat');
    });// nếu gõ localhost: 8080 lên chrome thì hiện ra 'Hello ... Nhat'
    //đang viết theo chuẩn rest api
    // khi muốn lấy thông tin thì dùng method get
    // khi muốn create        thì dùng        post
    // khi muốn xóa thông tin thì dùng        delete
    // khi muốn update        thì dùng        Push

    router.get('/hoidanit', (req, res) => {
        return res.send('hoi dan it');
    });

    router.get("/homeController", homeController.getHomePage);
    router.get('/about',homeController.getAboutPage);
    router.get('/crud',homeController.getCRUD);
    router.post('/post-crud',homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud',homeController.deleteCRUD);

    //những api sử dụng ở phía React thì sẽ route /api

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);

    return app.use("/", router);

}// nếu gõ localhost:8080/hoidanit lên chrome thì hiện ra 'hoi dan it'

module.exports = initWebRoutes;// để sử dụng câu lệnh initWebRoutes bên ngoài file này
//đã xong 1 router, đã tạo 1 đường link. Nếu truy cập vào server sẽ hiện dòng chữ "Hello World with Nhat"