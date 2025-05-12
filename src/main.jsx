// main.jsx
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, Store } from "./Components/Redux/Store.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./styles/css/style.css";
import "./styles/css/fonts.css";

// Pages and Layout
import Layout from "./Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Products from "./Pages/Products/Products.jsx";
import ContactUs from "./Pages/Contact/ContactUs.jsx";
import ProductsDetails from "./Pages/ProductsDetails/ProductsDetails.jsx";
import BoardofDirectors from "./Pages/About/BoardofDirectors/BoardofDirectors.jsx";
import Awards from "./Pages/About/Awards/Awards.jsx";
import Posts from "./Pages/Posts/Posts.jsx";
import Comments from "./Pages/Comments/Comments.jsx";
import Quotes from "./Pages/Quotes/Quotes.jsx";
import Recipes from "./Pages/Recipes/Recipes.jsx";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/SignUp.jsx";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails.jsx";
import PostDetails from "./Pages/PostDetails/PostDetails.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import MyProfile from "./Pages/MyProfile/MyProfile.jsx";
import Wishlist from "./Pages/Wishlist/Wishlist.jsx";
import OrderProcess from "./Pages/OrderProcess/OrderProcess.jsx";

// Routes
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/board-of-directors" element={<BoardofDirectors />} />
        <Route path="about/awards" element={<Awards />} />
        <Route path="products" element={<Products />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetails />} />
        <Route path="comments" element={<Comments />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="products/:productId" element={<ProductsDetails />} />
        <Route path="contact-us" element={<ContactUs />} />

        <Route path="cart" element={<Cart />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="wishlists" element={<Wishlist />} />
        <Route path="order-process" element={<OrderProcess />} />
      </Route>
    </>
  )
);

// Render App
createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={routes} />
    </PersistGate>
  </Provider>
);
