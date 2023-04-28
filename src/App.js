import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import SignUp from './pages/SignUp/SignUp';
import Login from "./pages/Login/Login";
import ProductList from "./pages/Admin/ProductList";
import AddProduct from "./pages/Admin/AddProduct";
import EditProduct from "./pages/Admin/EditProduct";
import CartContext from "./contexts/CartContext";
import { useState } from "react";
import CartPage from "./pages/CartPage/CartPage";
import AuthContext from "./contexts/AuthContext";
import ProductPage from "./pages/ProductPage/ProductPage";


function App() {
  const [cart, setCart] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [username, setUsername] = useState(localStorage.getItem("username"))

  return (

    <AuthContext.Provider value={{ token, setToken, username, setUsername }}>
      <CartContext.Provider value={{ cart, setCart }}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/admin/products" element={<ProductList />} />
            <Route path="/admin/products/add" element={<AddProduct />} />
            <Route path="/admin/products/edit/:id" element={<EditProduct />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductPage />} />

          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
