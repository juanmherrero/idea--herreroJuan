import Header from "./components/NavBar";
import Logo from "./components/logo";
import ItemList from "./containers/ItemList";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  return (
    <div>
      <Logo />
      <Header></Header>
      {/* <ItemList /> */}
      <ItemDetailContainer />
    </div>
  );
}
