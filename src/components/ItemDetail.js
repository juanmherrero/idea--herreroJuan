import ItemCount from './ItemCount';
import Item from './Item';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from "react";
const { dataList } = require('../containers/ItemList')


const ItemDetail = ({item}) => {
    /* const [data, setData] = useState([]);
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
        item
        ?
        data.map(item =>(
            <Item
            key={item.id}
            title={item.title}
            brand={item.brand}
            thumbnail={item.thumbnail}
            description={item.description} 
            price={item.price}/>
            ))
        :<p></p>}
        <ItemCount/>
        </>
    );
} */
const [data, setData] = useState([]);

    useEffect(() => {
        customFetch(2000, dataList)
            .then(datos => setData(dataList))
            .catch(err => console.log(err))
    },[]);

    return (
        <>
        {
        data.map(item =>(
            <Item
            key={item.id}
            title={item.title}
            brand={item.brand}
            thumbnail={item.thumbnail}
            description={item.description} 
            price={item.price}/>
            ))
            }
        <ItemCount/>
        </>
        );
}

export default ItemDetail;

