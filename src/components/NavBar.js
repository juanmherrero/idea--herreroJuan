import Carro from "./CartWidget"
import "../App.css"
const Header = () => {
    return (
        <div id="hd">
            <div id="nav1">
                <a href=""><h1>Huemul Clothes</h1></a>
                <a href="">Productos</a>
                <a href="">Contacto</a>
                <a href="">Preguntas Frecuentes</a>
                <a href="">Sobre nosotros</a>
                <Carro />
            </div>
        </div>
    );
}

export default Header;
