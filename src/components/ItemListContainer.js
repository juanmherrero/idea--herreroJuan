import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    const onAdd = (qty) => {
        alert ("Se han agregado " + qty + " productos.");
    }

    return (
        <>
            {/* <h3>{greeting}</h3> */}
            <ItemCount stock={8} initial={1} onAdd={onAdd} />
        </>
    )
};

export default ItemListContainer;