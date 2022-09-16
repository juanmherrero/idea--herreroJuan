import logo from "../img/logChicoDos.png";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div id="logo">
            <Link to='/'><img src={logo}></img></Link>
        </div>
    );
}

export default Logo;
