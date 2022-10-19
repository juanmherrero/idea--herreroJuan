import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const addItem = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.thumbnail,
                    nameItem: item.title,
                    costItem: item.price,
                    qtyItem: qty
                }
            ]);
        } else {
            found.qtyItem += qty;
        }
    }
    const clear = () => {
        setCartList([]);
    }
    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.idItem !== id));
    }
    const calcItemQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }
    const calcSubtotal = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }
    const calcTotal = () => {
        let totalPerItem = cartList.map(item => calcSubtotal(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, calcItemQty, calcSubtotal, calcTotal}}>
            { children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;