import ItemCount from './ItemCount';
import Item from './Item';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from "react";
import { dataList } from '../containers/ItemList';
import ItemListContainer from './ItemListContainer';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './CartContext';


const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);
    const ctx = useContext(CartContext);
    const [data, setData] = useState([]);

    const onAdd = (qty) => {
        alert ("Se han agregado " + qty + " productos.");
        setItemCount(qty);
        ctx.addItem(item, qty);
    }

    useEffect(() => {
        customFetch(2000, dataList)
            .then(datos => setData(dataList))
            .catch(err => console.log(err))
    },[]);

    return (
        <>
        <div className="producto-container">
            <h3>{item.title}</h3>
            <div className="producto-image">
            <img src={item.thumbnail} alt="Same alt value" />
            </div>
            <div className="producto-info">
            <h4>Marca: {item.brand}</h4>
            <p>Detalle: {item.description}</p>
            <h4>Precio: ${item.price}</h4>
            <p>Stock: {item.stock}</p>
            </div>
            {
                itemCount === 0
                ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                : <Link to ='/carro'><button class="button-54" role="button">Ir al Carro</button></Link>
            }
        </div>
        </>
        );
}

export default ItemDetail;

