import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import Logo from "../components/logo";
import Header from "../components/NavBar";
import ItemDetail from "../components/ItemDetail";

const Home = () => {
    return (
        <BrowserRouter>
            <Logo />
            <Header></Header>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Home;