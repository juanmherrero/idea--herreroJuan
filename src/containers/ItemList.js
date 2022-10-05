import Item from '../components/Item';
import fischer1 from '../img/fischer1.png';
import fischer2 from '../img/fischer2.png';
import burton1 from '../img/burton1.png';
import burton2 from '../img/burton2.png';
import botSki from '../img/botSki.png';
import botSnow from '../img/botSnow.png';
import tabSk81 from '../img/tabSk81.png';
import tabSk82 from '../img/tabSk82.png';
import shoes from '../img/shoes.png';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from "react";

/* import { dataList } from '../utils/productos'; */

/* export const dataList = [
    {
        title: "Esquíes Fischer Rc4 The Curv Ti",
        brand: "Fischer",
        thumbnail: fischer1,
        description: "Carrera -Pista",
        price: $250000
    },
    {
        title: "Esquies Fischer XTR RC One 73 RT + RS 10 GW",
        brand: "Fischer",
        thumbnail: fischer2,
        description: "Pista",
        price: "$200 000"
    },
    {
        title: "Snowboard Burton Ripcord",
        brand: "Burton",
        thumbnail: burton1,
        description: "Pista",
        price: "$220 000"
    },
    {
        title: "Snowboard Burton Custom Camber",
        brand: "Burton",
        thumbnail: burton2,
        description: "Fuera de Pista - Pista",
        price: "$290 000"
    },
    {
        title: "Botas Fischer RC One 100 Vacuum Walk",
        brand: "Fischer",
        thumbnail: botSki,
        description: "Esquí",
        price: "$150 000"
    },
    {
        title: "Botas Salomon Launch",
        brand: "Salomon",
        thumbnail: botSnow,
        description: "Snowboard",
        price: "$135 000"
    },
    {
        title: "Skateboard Element Tecuala",
        brand: "Element",
        thumbnail: tabSk81,
        description: "Con trucks",
        price: "$25 000"
    },
    {
        title: "Skateboard Element Solar Vibes",
        brand: "Element",
        thumbnail: tabSk82,
        description: "Con trucks",
        price: "$35 000"
    },
    {
        title: "Zapatillas skateboard Vans Old Skool Pro",
        brand: "Vans",
        thumbnail: shoes,
        description: "Skate - Urbanas",
        price: "$15 000"
    }
] */

export const dataList = [
    {
        id:1,
        title: "Esquíes Fischer Rc4 The Curv Ti",
        brand:"Fischer",
        thumbnail: fischer1,
        description: "Carrera - Pista",
        price: 250000 ,
        category: 10,
        stock: 5
    },
    {
        id:2,
        title: "Esquies Fischer XTR RC One 73 RT + RS 10 GW",
        brand:"Fischer",
        thumbnail: fischer2,
        description: "Pista",
        price: 200000,
        category: 10,
        stock: 3
    },
    {
        id:3,
        title: "Snowboard Burton Ripcord",
        brand: "Burton",
        thumbnail: burton1,
        description: "Pista",
        price: 220000,
        category: 10,
        stock: 4
    },
    {
        id:4,
        title: "Snowboard Burton Custom Camber",
        brand:"Burton"
        ,
        thumbnail: burton2,
        description: "Fuera de Pista - Pista",
        price: 290000,
        category: 10,
        stock: 2
    },
    {
        id:5,
        title: "Botas Fischer RC One 100 Vacuum Walk",
        brand: "Fischer",
        thumbnail: botSki,
        description: "Esquí",
        price: 150000,
        category: 10,
        stock: 6
    },
    {
        id:6,
        title: "Botas Salomon Launch",
        brand: "Salomon",
        thumbnail: botSnow,
        description: "Snowboard",
        price: 135000,
        category: 10,
        stock: 3
    },
    {
        id:7,
        title: "Skateboard Element Tecuala",
        brand:"Element",
        thumbnail: tabSk81,
        description: "Con trucks",
        price: 25000,
        category: 20,
        stock: 9
    },
    {
        id:8,
        title: "Skateboard Element Solar Vibes",
        brand: "Element",
        thumbnail: tabSk82,
        description: "Con trucks",
        price: 35000,
        category: 20,
        stock: 7
    },
    {
        id:9,
        title: "Zapatillas skateboard Vans Old Skool Pro",
        brand: "Vans",
        thumbnail: shoes,
        description: "Skate - Urbanas",
        price: 15000,
        category: 20,
        stock: 12
    }
]

const ItemList = ({ items }) => {
    const [datos, setData] = useState([]);

    useEffect(() => {
        customFetch(2000, dataList)
            .then(datos => setData(dataList))
            .catch(err => console.log(err))
    },[]);

    return (
        items.map(item => 
            <Item 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            brand={item.brand} 
            description={item.description} 
            price={item.price} 
            thumbnail={item.thumbnail} 
            stock={item.stock} />)
        );
}

{/* {
        data.map(item =>(
            <Item
            key={item.id}
            id={item.id}
            category={item.category}
            title={item.title}
            brand={item.brand}
            thumbnail={item.thumbnail}
            description={item.description} 
            price={item.price}/>
            ))
            } */}


export default ItemList;