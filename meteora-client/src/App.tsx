import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import InitialPage from "./pages/initialPage";
import ProductPage from "./pages/productPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />}>
            {" "}
          </Route>

          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
