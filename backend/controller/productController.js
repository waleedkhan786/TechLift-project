const Product = require("../models/productModel")

// get 
const getProduct = async(req, res)=>{
    let productData = await Product.find()
    // let result = artData.json()
    if(productData.length > 0){
        res.send(productData)
    }else{
        res.send({msg: "No art Data found in Database"})
    }
}


// post 
// const postArt = async(req, res)=>{
//     let art = new Art(req.body)
//     let result = await art.save();
//     res.send(result);  
// }

const postProduct = async(req,res)=>{
    try {
        const post =  new Product({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.file.filename, //image can be sent
        })
        await post.save()
        res.json(post)
    } catch (error) {
        console.log(error)
    }
}


// update
const updateProduct = async(req,resp)=>{
    let data = await Product.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )    
    resp.send(data)
}

// delete
const deleteProduct = async(req,resp)=>{
    // resp.send(req.params)
    let product = await Product.deleteOne({_id: req.params.id})
    if(product){
        resp.send(product)
    }else{
        resp.send({msg: "No record found"})
    }
}
// get art details

const getProductDetails = async(req,resp)=>{
    let result = await Product.findOne({_id: req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({msg: "No user found"})
    }
}

module.exports = {getProduct, postProduct, updateProduct, deleteProduct, getProductDetails}