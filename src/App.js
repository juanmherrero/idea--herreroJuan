import Header from "./components/NavBar";
import Logo from "./components/logo";
import ItemList from "./containers/ItemList";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./pages/home";

export default function App() {
  return (
    <div>
      {/* <Logo />
      <Header></Header> */}
      {/* <ItemList /> */}
      <Home></Home>
      {/* <ItemDetailContainer /> */}
    </div>
  );
}
