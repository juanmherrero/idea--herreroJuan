import carro from "../img/carrito.png"
import "../App.css"
import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { MDBBadge, MDBIcon } from 'mdb-react-ui-kit';


const Carro = () => {
    const ctx = useContext(CartContext);

    return (
        <div id="divCarro" >
            <img id="carro" src={carro} alt=""></img>
            <MDBIcon fas icon='envelope' size='lg' />
            <MDBBadge color='danger' notification pill>
                {ctx.calcItemQty()}
            </MDBBadge>
        </div>
    );
}

export default Carro;