import { useContext } from "react";
import { CartContext } from "./CartContext";

const Carrito = () => {
    const ctx = useContext(CartContext);

    return (
        <>
            <h1>Carro de compras</h1>
            {
                ctx.cartList.map(item => 
                    
                <li><h3>{item.nameItem}</h3> <br></br>
                <img src={item.imgItem}/> <br></br>
                <h4>{item.costItem}</h4> <br></br>
                <h4>Cantidad: {item.qtyItem}</h4> <br></br>
                <button onClick={() => ctx.removeItem(item.idItem)} class="button-54" role="button">Eliminar producto</button> <br></br>
                </li>
                
                )
            }
            <button onClick={ctx.clear} class="button-54" role="button">Vaciar Carrito</button>
        </>
    );
}

export default Carrito;

