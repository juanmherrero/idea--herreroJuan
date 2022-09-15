import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { dataList } = require('../containers/ItemList')


const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        customFetch(2000, dataList)
            .then(result => setData(result[6]))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;