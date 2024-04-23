import bcrypt from 'bcryptjs';
import db from "../models/index";

let handleUserLogin = (email, password)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let userData ={};

            let isExist = await checkUserEmail(email);
            if (isExist){
                //user exist
                //comppare password

                let user = await db.User.findOne({
                    attributes: ['email','password'],//chỉ lấy trường thông tin email và password
                    where: {email:email}
                });

                if (user){
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check){
                        userData.errCode = 0;
                        userData.errMessage = "OK",
                        userData.user = user;
                    }
                    else{
                        userData.errCode =3;
                        userData.errMessage = 'Wrong password';
                    }
                }else{
                    userData.errCode = 2;
                    userData.errMessage = 'user is not found';
                }

            }else{
                //return error
                userData.errCode = 1;
                userData.errMessage = 'Your email is not exist in system';
            }
            resolve(userData)
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) =>{
    return new Promise(async(resolve, reject)=>{
        try {
           let user = await db.User.findOne({
                where:{email : userEmail}//Kiem tra email nguoi dung nhap voi email trong database
           })

           if (user) {
            resolve(true)
           }
           else {
            resolve(false)
           }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUsers = (userId) =>{
    return new Promise(async(resolve, reject)=>{
        try {
            let users = '';
            if (userId ==='ALL'){
                users =await db.User.findAll({
                    attributes:{
                        exclude: ['password']
                    }
                })
            }
            if (userId && userId !=='ALL'){
                users = await db.User.findOne({
                    where: {id : userId},
                    attributes:{
                        exclude: ['password']}
                })    
            }
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}
module.exports ={
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
}