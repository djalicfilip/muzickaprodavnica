import "./App.css";
import MenuBar from "./components/MenuBar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Renaissance",
      url: "https://upload.wikimedia.org/wikipedia/en/a/ad/Beyonc%C3%A9_-_Renaissance.png",
      description:
        "Renaissance (also titled Act I: Renaissance) is the seventh studio album by American singer Beyoncé, released on July 29, 2022, by Parkwood Entertainment and Columbia Records.",
      price: 55,
      amount: 0,
    },
    {
      id: 2,
      title: "Harry's House",
      url: "https://upload.wikimedia.org/wikipedia/en/d/d5/Harry_Styles_-_Harry%27s_House.png",
      description:
        "Harry's House is the third studio album by English singer and songwriter Harry Styles, released on 20 May 2022 by Columbia Records and Erskine.",
      price: 45,
      amount: 0,
    },
    {
      id: 3,
      title: "Midnights",
      url: "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
      description:
        "Midnights is the tenth studio album by American singer-songwriter Taylor Swift, released on October 21, 2022, via Republic Records",
      price: 40,
      amount: 0,
    },
    {
      id: 4,
      title: "Dawn FM",
      url: "https://upload.wikimedia.org/wikipedia/en/b/b9/The_Weeknd_-_Dawn_FM.png",
      description:
        "Dawn FM is the fifth studio album by Canadian singer-songwriter the Weeknd. It was released on January 7, 2022, through XO and Republic Records.",
      price: 32,
      amount: 0,
    },
    {
      id: 5,
      title: "30",
      url: "https://upload.wikimedia.org/wikipedia/en/7/76/Adele_-_30.png",
      description:
        "30 is the fourth studio album by English singer-songwriter Adele. It was released on 19 November 2021 by Columbia Records, as Adele's first studio album since 25 (2015).",
      price: 43,
      amount: 0,
    }
  
  ]);

  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    setCartNum(cartNum + 1);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
    });
    refreshCart();
  }
  function removeProduct(title, id) {
    products.forEach((prod) => {
      if (prod.id === id) {
        if (prod.amount > 0) {
          prod.amount--;
          setCartNum(cartNum - 1);
        }
      }
    });
    refreshCart();
  }

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="/shop"
          element={
            <>
              <MenuBar cartNum={cartNum} isHome={0} isShop={1} />,
              <Shop
                products={products}
                onAdd={addProduct}
                onRemove={removeProduct}
              />
              <Footer />
            </>
          }
        />
        <Route path="/" element={<MenuBar cartNum={cartNum} isHome={1} />} />
        <Route
          path="/cart"
          element={
            <>
              <MenuBar cartNum={cartNum} isHome={0} />,
              <Cart products={cartProducts} onRemove={removeProduct} />
              <Footer />
            </>
          }
         
        />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
