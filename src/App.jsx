import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { Routes, Route ,useLocation} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
function App() {
  const location = useLocation()
  console.log(location.pathname);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/admin/products" element={<ProductManagementPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
