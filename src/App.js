import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import SignUp from './pages/SignUp/SignUp';
import Login from "./pages/Login/Login";
import ProductList from "./pages/Admin/ProductList";
import AddProduct from "./pages/Admin/AddProduct";
import EditProduct from "./pages/Admin/EditProduct";
import AuthContext from "./contexts/AuthContext";
import { useState } from "react";


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [username, setUsername] = useState(localStorage.getItem("username"))


  return (
    <AuthContext.Provider value={{ token, setToken, username, setUsername }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/products/add" element={<AddProduct />} />
          <Route path="/admin/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>

    </AuthContext.Provider>

  );
}

export default App;
