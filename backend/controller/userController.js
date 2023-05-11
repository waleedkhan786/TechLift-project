const User = require("../models/userModel")

// get 
const getUser = async(req, res)=>{
    let userData = await User.find()
    // let result = userData.json()
    if(userData.length > 0){
        res.send(userData)
    }else{
        res.send({msg: "No user Data found in Database"})
    }
}


// post 
const postUser = async(req, res)=>{
    let user = new User(req.body)
    let result = await user.save();
    res.send(result);  
}

// login 

const loginUser = async(req,res)=>{
    try{
        const LoginUser= await User.findOne({
            email:req.body.email,
            password:req.body.password
        })
        //assume condition true/ credentials matched
        if(LoginUser){
         res.json({message:"Login Successfully",LoginUser:LoginUser})
        }else{
            res.json("userName or password is invalid")
        }
    }
    catch{}
}


// update
const updateUser = async(req,resp)=>{
    let data = await User.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )    
    resp.send(data)
}

// delete
const deleteUser = async(req,resp)=>{
    // resp.send(req.params)
    let user = await User.deleteOne({_id: req.params.id})
    if(user){
        resp.send(user)
    }else{
        resp.send({msg: "No record found"})
    }
}
// get user details

const getUserDetails = async(req,resp)=>{
    let result = await User.findOne({_id: req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({msg: "No user found"})
    }
}

module.exports = {getUser, postUser,loginUser, updateUser, deleteUser, getUserDetails}