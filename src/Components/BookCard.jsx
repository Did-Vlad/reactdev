import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function BookCard(props){
    const [localCount, setLocalCount] = useState(0);
  
    const handeBuyClick = () => {
        setLocalCount(localCount + 1);
        
        if (props.onBuy) {
            props.onBuy(props.price);
        }
    };
    return (
        <div className="card h-100 shadow-sm">
          <img src={props.img} className="card-img-top" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.price} грн</p>
            <button onClick={handeBuyClick}>Купити</button>
          </div>
        </div>
      );
}

export default BookCard;