import React, { useContext } from "react";
import ItemContext from "../context/ItemContext";

const Item = (props) => {
    const { items,tempItem, } = useContext(ItemContext);
    const name = tempItem.find(e => e.id === props.item.item_id).item_name

    return(
        <div>
            <h3>{name}</h3>
            <p>description: {props.item.item_listing_description}</p>
            <p>location: {props.item.locations_where_sold}</p>
            <p>price: ${props.item.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Item;