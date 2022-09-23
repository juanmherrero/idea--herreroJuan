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
    /* const addItem = (product, qty) => {
        setCartList([...cartList, product, qty]);
    } */
    const clear = () => {
        setCartList([]);
    }
    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.idItem !== id));
    }
    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            { children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;