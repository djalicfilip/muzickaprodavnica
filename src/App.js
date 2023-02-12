import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import Records from './Records';

function App() {
  const products = [
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
  ];

  return (
  <div className='App'>
<NavBar/>
<Records products={products}/>
</div>
  );
}

export default App;
