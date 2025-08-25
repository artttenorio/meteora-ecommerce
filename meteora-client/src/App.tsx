import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InitialPage from "./pages/initialPage";
import ProductPage from "./pages/productPage";
import Kart from "./pages/kart";
import Admin from "./pages/Admin";
import ProductRegister from "./components/admin/product-Register/ProductRegister";
import ViewProducts from "./pages/ViewProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/kart" element={<Kart />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="products/new" element={<ProductRegister />} />
            <Route path="products" element={<ViewProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;