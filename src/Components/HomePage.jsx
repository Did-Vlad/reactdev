import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
    <div className="conteiner py-5 text-center">
        <h1>Welcome to our library</h1>
        <p className="lead">Here you will find the best literature</p>
        <Link to="/catalog" className="btn btn-primary btn-lg mt-3">Go to catalog</Link>
    </div>
    );
};
export default HomePage;