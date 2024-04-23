import userService from "../services/userService"

let handleLogin =async(req,res) =>{
    //1.
    // return res.status(200).json({
    //     message: 'hello world'
    // })
    
    let email = req.body.email;
    let password = req.body.password;

    //check email exist
    //so sanh password của người dùng nhập với database

    if (!email || !password){
        return res.status(500).json({
            errCode:1,
            message: 'Missing inputs parameter!'
        })
    }//Nếu nhập thiếu trường email hoặc password thì báo lỗi Missing parameter

    let userData = await userService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user :{}
    })
}

let handleGetAllUsers= async (req,res)=>{
    let id = req.body.id; // = all hoac id
    let users = await userService.getAllUsers(id);

    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        users
    })
}

module.exports ={
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
}