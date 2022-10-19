import Carro from "./CartWidget";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="hd">
            <div id="nav1">
                <Link to='/'><h1>Huemul Clothes</h1></Link>
                <Link to='/category/10'><h3 className="h33">Snow</h3></Link>
                <Link to='/category/20'><h3 className="h33">Skate</h3></Link>
                <Link to='/carro'><Carro /></Link>               
            </div>
        </div>
    );
}

export default Header;
