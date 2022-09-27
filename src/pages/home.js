import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import Logo from "../components/logo";
import Header from "../components/NavBar";
import ItemDetail from "../components/ItemDetail";
import Carrito from "../components/Carrito";
import CartContextProvider from "../components/CartContext";


const Home = () => {
    return (
        <CartContextProvider>
        <BrowserRouter>
            <Logo />
            <Header></Header>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/carro' element={<Carrito/>}/>
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home;