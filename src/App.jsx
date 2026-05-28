import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  const removeFromCart = (index) => {

    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);
  };

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              cart={cart}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;