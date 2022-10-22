import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import Fido from "../img/Fido.jpg";


export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  } 


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
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length} </span>
                </div>    
        </header>
    );
};