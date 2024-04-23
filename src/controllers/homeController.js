// homeController như 1 object có hàm getHomPage
import db from '../models/index'
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

//để hàm getHomePage có thể chạy được ngoài file homeControllers thì phải dùng lệnh exports
//cấu trúc của 1 object:
// Object :{
//     key: '',
//     value: ''
// }

// let getCRUD = (req, res) => {
//     return res.send('get CRUD with me');
// }

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("Post crud from server");
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

let getEditCRUD = async (req, res) => {
    // console.log(req.query.id);
    // return res.send('hello');
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);


        return res.render('editCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('users not found');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('Delete user succeed');
    }
    else return res.send('user not found');
}

//hàm export để sử dụng được những phương thức này ở ngoài file homeController.js
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}