/* import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { dataList } from "../containers/ItemList"; */


/* const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        customFetch(2000, dataList)
            .then(result => setData(result[6]))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={data} />
    );
} */


import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
/* const { products } = require('../utils/products'); */
import { dataList } from "../containers/ItemList";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, dataList.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;