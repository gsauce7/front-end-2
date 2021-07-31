import React from "react";

const Item = (props) => {

    return(
        <div>
            <h3>{props.item.item_id}</h3>
            <p>description: {props.item.item_listing_description}</p>
            <p>location: {props.item.locations_where_sold}</p>
            <p>price: ${props.item.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Item;