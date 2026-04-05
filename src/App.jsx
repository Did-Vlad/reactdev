import React, {useState} from "react";
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const books = [
{id: 1, title:"Лісова пісня", price: 290, img: "https://placeholder.com"},
{id: 2, title:"Чорна рада", price: 175, img: "https://placeholder.com"},
{id: 3, title:"Тіні забутих предків", price: 200, img: "https://placeholder.com"},
{id: 4, title:"Захар Беркут", price: 327, img: "https://placeholder.com"},
{id: 5, title:"Кобзар", price: 264, img: "https://placeholder.com"},
{id: 6, title:"Жнець", price: 234, img: "https://placeholder.com"},
];


function App(){
 const [CardCount, setCardCount] = useState(0);
 const [CardPrice, setCardPrice] = useState(0);

 const handeBuyClick = (price) => {
  setCardCount(prev => prev + 1);
  setCardPrice(prev => prev + price);
  }

return(
    <div className="app-wrapper">
  
    <Header user='Vlad' const={CardCount} total={CardPrice}/>
    <Main items = {books} onBuy={handeBuyClick}/>
    <Footer/>

    </div>
  );
}
export default App;