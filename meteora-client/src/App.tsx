import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import InitialPage from "./pages/InitialPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
