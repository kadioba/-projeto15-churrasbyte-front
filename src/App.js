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
import Menu from "./components/Menu/Menu";
import { useEffect } from "react";


function App() {
  const [cart, setCart] = useState([])
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [username, setUsername] = useState(localStorage.getItem("username"))

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <AuthContext.Provider value={{ token, setToken, username, setUsername }}>


        <BrowserRouter>
          <Menu />
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
      </AuthContext.Provider>
    </CartContext.Provider>

  );
}

export default App;
