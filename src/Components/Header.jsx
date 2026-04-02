import React from "react";

function Header (){
    return(
        <header className="header">
            <nav>
                <ul style={{display: 'flex', gap:'20px', padding: '10px', background: '#D3D3D3'}}>
                    <li><a href="Main.jsx">Головна</a></li>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Про нас</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;