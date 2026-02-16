import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsCategoryPage from "./pages/ProductsCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";
import FindInstallersPage from "./pages/FindInstallersPage";
import ProjectShowcasePage from "./pages/ProjectShowCase";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<ProductsCategoryPage />} />
        <Route
          path="/products/:category/:productSlug"
          element={<ProductDetailPage />}
        />
        <Route path="/services/:serviceType" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/find-installers" element={<FindInstallersPage />} />
        <Route path="/project-showcase" element={<ProjectShowcasePage />} />
        <Route
          path="/project-showcase/project/:slug"
          element={<ProjectDetailPage />}
        />
        {/* Remove the state route unless you create a separate component */}
      </Routes>
    </Router>
  );
}

export default App;
