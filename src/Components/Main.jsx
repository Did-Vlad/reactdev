import React from "react";
import BookCard from "./BookCard";
import 'bootstrap/dist/css/bootstrap.min.css';


function Main({ items, onBuy }) { 
  return (
<main className="mainContent">
      <div className="text-center py-5 mb-4 bg-light rounded-3 shadow-sm">
        <h1 className="display-5 fw-bold">Ласкаво просимо на наш сайт</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Ми раді привітати на головній сторінці навчального проєкту
        </p>
      </div>
    <div className="row g-4">
    {items.map((book) => (
    <div className="col-12 col-md-6 col-lg-4" key={book.id}>
        <BookCard title={book.title} price={book.price} img={book.img} onBuy={onBuy}/>
    </div>
    )
   )
  }
    </div>
</main>
);
}

export default Main;