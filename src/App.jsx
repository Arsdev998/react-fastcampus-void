import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
