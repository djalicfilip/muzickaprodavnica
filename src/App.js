import './App.css';
import NavBar from './Navbar';
import Records from './Records';
import { useState } from "react";

function App() {
  const addToCart = (id) => {
    products.map((product) => {
      if (product.id === id) {
        product.amount = product.amount + 1;
        const a = cartNum + 1;
        setCartNum(a);
        console.log("product id=", product.id, "amount=", product.amount);
      }
    });
  };
  const remFromCart = (id) => {
    products.map((product) => {
      if (product.id === id) {
        if (product.amount > 0) {
          product.amount = product.amount - 1;
          const a = cartNum - 1;
        setCartNum(a);
          console.log("product id=", product.id, "amount=", product.amount);
        } else {
          alert("Amount of product is already 0.");
        }
      }
    });
  };

  



  const [products, setProducts] = useState ( [
    {
      id: 1,
      title: "Midnights",
      description:
        "Midnights is the tenth studio album by American singer-songwriter Taylor Swift, released on October 21, 2022, via Republic Records.",
      amount: 0,
      pic:"https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png"
    },
    {
      id: 2,
      title: "Dawn Fm",
      description:
        "Dawn FM is the fifth studio album by Canadian singer-songwriter the Weeknd. It was released on January 7, 2022, through XO and Republic Records.",
      amount: 0,
      pic:"https://upload.wikimedia.org/wikipedia/en/b/b9/The_Weeknd_-_Dawn_FM.png"
    },
    {
      id: 3,
      title: "Renaissance ",
      description:
        "Renaissance (also titled Act I: Renaissance) is the seventh studio album by American singer Beyoncé, released on July 29, 2022, by Parkwood Entertainment and Columbia Records. ",
      amount: 0,
      pic:"https://static.spin.com/files/2022/07/61yO73-xTcL._SL1500_-1024x1024.jpg"
    },
  ]);

  const [cartNum, setCartNum] = useState(0);


  return (
  <div className='App'>
<NavBar cartNum={cartNum}  />
<Records products={products} onAdd={addToCart} onRemove={remFromCart} />
</div>
  );
}

export default App;
