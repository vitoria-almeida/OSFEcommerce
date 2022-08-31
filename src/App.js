import Footer from "./pages/footer/footer";
import Header from "./pages/header/header";
import RoutesPath from "./routes/routes";

import { CartContext } from './contexts/CartContext'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [productQuantity, setProductQuantity] = useState(true)

  return (
    <div className="App">
      <CartContext.Provider value={{cart, setCart, wishlist, setWishlist, productQuantity, setProductQuantity}}>
        <Header/>
        <RoutesPath/>
      </CartContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
