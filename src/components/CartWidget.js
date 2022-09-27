import carro from "../img/carrito.png"
import "../App.css"
import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

const Carro = () => {
    const ctx = useContext(CartContext);

    return (
        <div id="divCarro" {...ctx.calcItemQty()}>
            <img id="carro" src={carro} alt=""></img>
        </div>
    );
}

export default Carro;