import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import Logo from "../components/logo";
import Header from "../components/NavBar";
import ItemDetail from "../components/ItemDetail";
import Carrito from "../components/Carrito";

const Home = () => {
    return (
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
    );
}

export default Home;