import ItemCount from './ItemCount';
import Item from './Item';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from "react";
import { dataList } from '../containers/ItemList';
import ItemListContainer from './ItemListContainer';


const ItemDetail = ({item}) => {
const [data, setData] = useState([]);

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
            <h4>Precio: {item.price}</h4>
            </div>
        </div>
        </>
        );
}

export default ItemDetail;

