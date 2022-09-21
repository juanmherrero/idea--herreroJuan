/* import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";
import ItemList from "../containers/ItemList";

const ItemListContainer = () => {
    const onAdd = (qty) => {
        alert ("Se han agregado " + qty + " productos.");
    }

    return (
        <>
            <ItemList></ItemList>
            
            <ItemCount stock={8} initial={1} onAdd={onAdd} />
        </>
    )
};

export default ItemListContainer; */

import ItemCount from './ItemCount';
import ItemList from '../containers/ItemList';
import { dataList } from '../containers/ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
/* const { products } = require('../utils/products'); */

const ItemListContainer = () => {
    const [datos, setDato] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory) {
            customFetch(2000, dataList.filter(item => item.category == idCategory))
                .then(result => setDato(result))
                .catch(err => console.log(err))
        } else {
            customFetch(2000, dataList)
                .then(result => setDato(result))
                .catch(err => console.log(err))
        }
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;