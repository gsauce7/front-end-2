import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ItemContext from '../context/ItemContext';
import Item from './Item';


const ItemList = () =>{

    const { items, getData } = useContext(ItemContext)

    useEffect(()=> {
        getData();
    },[])


    return(
        <>
            <Link to='/addItem' >Add Listing</Link>
            {items.map((item, i) => (
                <Item 
                    key={i}
                    item={item}
                />
            ))}

        </>
    );


}

export default ItemList;