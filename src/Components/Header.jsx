import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header ({count, total}){
    return(
<header className="header">
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
<div className="container d-flex justify-content-between align-items-center">             
      <ul className="navbar-nav d-flex flex-row gap-3 mb-0" style={{ listStyle: 'none' }}>
      <li className="nav-item">
              <Link className="nav-link" to="/">Головна</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">Каталог</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Контакти</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
<div className="navbar-text text-white">Користувач: Vlad | Сума: <strong className="text-success">{total} грн</strong></div>
    </div>
    </nav>
</header>
    );
}

export default Header;