
import './App.css'
import './Navbar.css'
import CategoriesPage from './components/Categories'
import Contact from './components/Contact'
import FooterSection from './components/FooterSection'
import HomeSection from './components/HomeSection'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import SearchProduct from './components/SearchProduct'
import Navbar from './layout/Navbar'
import {BrowserRouter , Routes, Route} from "react-router-dom"

function App() {


  return (
      <>
          <BrowserRouter>
              <Navbar />

              <Routes>
                  <Route path="/" element={<HomeSection />} />
                  <Route path="/categories" element={<CategoriesPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/productDetails" element={<ProductDetails />} />
                  <Route path="/searchProduct" element={<SearchProduct />} />
              </Routes>

              <FooterSection />
          </BrowserRouter>
      </>
  );
}

export default App
