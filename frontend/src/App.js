import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Signup } from "./pages/Signup";
// import { Cart } from "./pages/cart/cart";
// import { ProductDetails } from "./pages/productDetails/productDetails";
import { ShopContextProvider } from "./context/shop-context";
import Footer from "./components/Footer";
import { useState } from "react";
import Form from "./pages/Form";
import Update from "./pages/Update";
import SingleProduct from "./pages/SingleProduct";
import { Login } from "./pages/Login";
import AllUsers from "./pages/AllUsers";
import UpdateProduct from "./pages/UpdateProduct";
import PrivateRoutes from "./components/PrivateRoutes";

// signup
// login
// all user
// add item
// show item
// delete item

// update 

function App() {
  // //state for editing the data
  // const [Getid, SetGetid] = useState();
  // const empty = {
  //   title: "",
  //   desc: "",
  //   price: "",
  // };
  // //state for handling input
  // const [handle, setHandle] = useState(empty);

  // // function for handle the input fields
  // const handler = (e) => {
  //   const { name, value } = e.target;
  //   setHandle({ ...handle, [name]: value });
  //   console.log(handle);
  // };

  // // function for creating the Api data
  // const createApi = () => {
  //   fetch("http://localhost:4000/item-api", {
  //     method: "POST",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //     body: JSON.stringify(handle),
  //   });
  // };
  // // function for editing the Api
  // const editApi = async (id) => {
  //   var data = await fetch(`http://localhost:4000/item-api/${id}`);
  //   data = await data.json();
  //   console.log(data);
  //   setHandle(data);
  //   SetGetid(id);
  // };
  // // function for updating the Api
  // const updateApi = () => {
  //   fetch(`http://localhost:4000/item-api/${Getid}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //     body: JSON.stringify(handle),
  //   });
  // };

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* 

<Route
path="/update"
element={
  <Update updateApi={updateApi} handle={handle} handler={handler} />
}
/> */}
            {/* <Route path="/detail/:id" element={<SingleProduct />} /> */}
            <Route element={<PrivateRoutes/>}>
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/editproduct/:id" element={<UpdateProduct />} />
            <Route path="/add" element={<Form/>} />
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            </Route>
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/cart" element={<Cart />} />           
            <Route path="/product/:id" element={<ProductDetails />} /> */}
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

