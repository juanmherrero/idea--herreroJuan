import ItemList from '../containers/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);
    return (
            <ItemList items={datos} />
    );
}

export default ItemListContainer;