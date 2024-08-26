import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import CreateProductPage from "./pages/admin/CreateProductPage";
import EditProductPage from "./pages/admin/EditProductPage";
import CounterPage from "./pages/CounterPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
  const location = useLocation();
  return (
    <>
      {!location.pathname.startsWith("/admin") ? <Header /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/admin">
          <Route path="products" element={<ProductManagementPage />} />
          <Route path="products/create" element={<CreateProductPage />} />
          <Route path="products/edit/:id" element={<EditProductPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!location.pathname.startsWith("/admin") ? <Footer /> : null}
    </>
  );
}

export default App;
