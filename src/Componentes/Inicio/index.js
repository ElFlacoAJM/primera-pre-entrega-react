import React from "react"
import Portada from "../../img/Fido.jpg"
import { Link } from "react-router-dom";

export const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="/">
                <h1 className="title">Inicio</h1>
            </Link>
            <Link to="/productos" ></Link>
        </div>
    )
}