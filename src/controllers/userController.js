import userService from "../services/userService"

let handleLogin = async (req, res) => {
    //1.
    // return res.status(200).json({
    //     message: 'hello world'
    // })

    let email = req.body.email;
    let password = req.body.password;

    //check email exist
    //so sanh password của người dùng nhập với database

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }//Nếu nhập thiếu trường email hoặc password thì báo lỗi Missing parameter

    let userData = await userService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; // = all hoac id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            users: []
        })
    }

    let users = await userService.getAllUsers(id);
    console.log(users);

    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        users
    })
}

let handleCreateNewUser = async (req, res) => {
     let message = await userService.createNewUser(req.body);
     return res.status(200).json(message);
}

let handleEditUser = async(req,res)=>{
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message)
}


let handleDeleteUser =async(req,res) =>{
    if (!req.body.id){
        return res.status(200).json({
            errCode:1,
            errMessage: 'missing required para'
        })
    }


    let message = await userService.deleteUser(req.body.id);
    return res.status(200).json(message);

}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
}