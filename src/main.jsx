import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import "./styles/css/style.css";
import "./styles/css/fonts.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from "./Pages/Home/Home.jsx";
import About from './Pages/About/About.jsx';
import Services from './Pages/Services/Services.jsx';
import Products from './Pages/Products/Products.jsx';
import ContactUs from './Pages/Contact/ContactUs.jsx';
import ProductsDetails from './Pages/ProductsDetails/ProductsDetails.jsx';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="products" element={<Products />} />
      <Route path='products/:productId' element={<ProductsDetails />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
  </RouterProvider>
);
