import ItemListContainer from "./ItemListContainer";


const Item = ({thumbnail, title, brand, description, price}) => {
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
            {/* <ItemListContainer ></ItemListContainer> */}
            </div>
        </div>
    );
}

export default Item;