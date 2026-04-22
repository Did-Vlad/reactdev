import React from "react";
import { useParams, Link } from "react-router-dom";

const BookDetails = ({ items }) => {
  const { id } = useParams();
  const book = items.find((item) => item.id === Number(id)); //Poshuk knygi za id 

    if (!book) {
        return (
            <div className="container mt-5">
                <h2>Book not found</h2>
                <Link to="/">Back to page</Link>
            </div>
        );
    }
return(
<div className="container mt-5">
      <Link to="/catalog">Back to catalog</Link>
      <div className="mt-4">
        <h1>{book.title}</h1>
        <img src={book.img} alt={book.title} style={{maxWidth: '300px'}} />
        <p><strong>Price:</strong> {book.price} UAH</p>
      </div>
    </div>
);

};

export default BookDetails;