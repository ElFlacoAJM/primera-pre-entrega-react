import React from "react"
import Fido from "../../img/Fido.jpg"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to="/">
              <div className="logo">
                <img src={Fido} alt="logo" width="150"/>  
              </div>
            </Link>   
            <ul>
                <li>
                  <Link to="/">INICIO</Link>
                </li>
                <li>
                  <Link to="/productos">PRODUCTO</Link>
                </li>
            </ul>  
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
                </div>    
        </header>
    )
}