import { Link } from "react-router-dom";


const Item = ({thumbnail, title, brand, description, price, id, category}) => {
    return (
        <div className="producto-container">
            <h3>{title}</h3>
            <div className="producto-image">
            <img src={thumbnail} alt="Same alt value" />
            </div>
            <div className="producto-info">
            <h4>Marca: {brand}</h4>
            <p>Detalle: {description}</p>
            <h4>Precio: {price}</h4>
            <Link to={`/item/${id}`}><button class="button-54" role="button">Ver</button></Link>
            {/* <ItemListContainer ></ItemListContainer> */}
            </div>
        </div>
    );
}

export default Item;