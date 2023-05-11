const express = require("express")
const {getProduct, postProduct, updateProduct, deleteProduct, getProductDetails} = require("../controller/productController")
const upload = require("../middleware/imgMulter")
const router = express.Router()


router.route("/").get(getProduct)

router.route("/new").post(upload,postProduct ) 

router.route("/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)


module.exports = router