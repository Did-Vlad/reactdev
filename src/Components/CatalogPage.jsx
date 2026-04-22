import React from "react";
import { Link } from "react-router-dom";

const CatalogPage = ({ items, onBuy }) => {
  return (
    <div className="container mt-4">
 <h2>Our Catalog</h2>
  <div className="row">
   {items.map((book) => (
    <div key={book.id} className="card col-md-4 mb-3">
     <div className="card-body">
     <h5 className="card-title">{book.title}</h5>
     <p className="card-text">{book.price} UAH</p>
     <Link to={`/book/${book.id}`} className="btn btn-secondary me-2">More</Link>
<button onClick={() => onBuy(book.price)} className="btn btn-primary">Buy</button>
    </div>
</div>
))}
</div>
</div>
  );
};

export default CatalogPage;