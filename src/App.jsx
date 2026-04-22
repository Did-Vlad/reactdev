import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import HomePage from "./Components/HomePage";
import CatalogPage from "./Components/CatalogPage";
import BookDetails from "./Components/BookDetails";

function App() {
  const [CardCount, setCardCount] = useState(0);
  const [CardPrice, setCardPrice] = useState(0);

  const books = [
    {id: 1, title: "Лісова пісня", price: 290, img: "https://placeholder.com"},
    {id: 2, title: "Чорна рада", price: 175, img: "https://placeholder.com"},
    {id: 3, title: "Тіні забутих предків", price: 200, img: "https://placeholder.com"},
    {id: 4, title: "Захар Беркут", price: 327, img: "https://placeholder.com"},
    {id: 5, title: "Кобзар", price: 264, img: "https://placeholder.com"},
    {id: 6, title: "Жнець", price: 234, img: "https://placeholder.com"},
  ];

  const handeBuyClick = (price) => {
    setCardCount(prev => prev + 1);
    setCardPrice(prev => prev + price);
  };

return (
 <BrowserRouter>
<div className="app-wrapper">
     <Header user='Vlad' count={CardCount} total={CardPrice} />

  <Routes>
  <Route path="/" element={<HomePage items={books} />} />
  <Route path="/main" element={<Main items={books} />} />
  <Route path="/catalog" element={<CatalogPage items={books} onBuy={handeBuyClick} />} />
  <Route path="/book/:id" element={<BookDetails items={books} />} />
  </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;