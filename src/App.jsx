import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Regitster from "./pages/Regitster";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Furnite/" element={<Navigate to="/Furnite/home" />} />
        <Route path="/Furnite/home" element={<Home />} />
        <Route path="/Furnite/register" element={<Regitster />} />
        <Route path="/Furnite/login" element={<Login />} />
        <Route path="/Furnite/cart" element={<Cart />} />
        <Route path="/Furnite/products" element={<ProductList />} />
        <Route path="/Furnite/products/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
