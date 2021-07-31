import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "../hooks/useForm"
import ItemContext from '../context/ItemContext';
import { axiosWithAuth } from '../helpers/axiosWithAuth';




const ItemForm = () => {
    const { items, setItems } = useContext(ItemContext);

    const initialValues = {
        item_id: "", 
        item_listing_description: "", 
        locations_where_sold: "",
        price: 0, 
        category:"",
        qty: 0
    } 

    const [value, handleChanges] = useForm(initialValues)

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newItem ={
            item_id:value.name.trim(),
            item_listing_description:value.description.trim(),
            category:value.category,
            locations_where_sold: value.location,
            price:Number(value.price),
            qty: value.qty
        }

        axiosWithAuth().post("/items-for-sale", newItem)
            .then(res=>{
                console.log('Item Submitted:', res.data);
                setItems([...items, newItem])    
            })
            .catch(err =>{
                console.log(err);
            });
            window.location.href = "/listings"
        }
    
    return (
        <>
        
            <div className='background-itemForm'>
            <div className='itemForm-container'>
            <form className='itemForm' onSubmit={onFormSubmit}>
                <div className='itemForm-title'>
                    <h1 >Items</h1>
                    <p>Fill out form to put items up for sale</p>
                </div>


            <label htmlFor="name">
            Product name: 
                <input
                    type="text"
                    name="name"
                    placeholder="Product's Name"
                    onChange={handleChanges} 
                    value={value.item_id}
                    label="Product name"
                />
            </label>

            
            <label htmlFor="name">
            Description: 
                    <input
                    type="text"
                    name="description"
                    placeholder="Product description"
                    onChange={handleChanges} 
                    value={value.item_listing_description}
                    label="product description"
                />
                </label>

            
            <label htmlFor="name">
            Price:  
                    <input
                    type="text"
                    name="price"
                    placeholder="Seller price"
                    onChange={handleChanges} 
                    value={value.price}
                />
            </label>

            <label htmlFor="name">
            Category: 
                <select value={value.category} onChange={handleChanges} name="category" id="category">
                    <option value="fruits">Fruits</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="peas">Peas</option>
                    <option value="dairy">Dairy</option>
                    <option value="beans">Beans</option>
                    <option value="animal_products">Animal Products</option>
                    <option value="cereals-maize">Cereals-Maize</option>
                    <option value="cereals-rice">Cereals-Rice</option>
                    <option value="cereals-other">Cereals-Other</option>
                    <option value="roots_tubers">Roots & Tubers</option>
                    <option value="seeds_nuts">Seeds & Nuts</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <label htmlFor="name">
            Location:  
                    <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={handleChanges} 
                    value={value.locations_where_sold}
                />
            </label>

            
             <label htmlFor="name">
            Qty: 
                <input
                type="number"
                name="qty"
                placeholder="Qty"
                onChange={handleChanges} 
                value={value.qty}
                />
            </label> 


                <div className='itemForm-slider'>
                    <div className="slider-container">

                    </div>
                </div>

                <br/>
                <br/>
                <button type="submit" id="submitBtn" >Submit</button> 
                <Link to='/listings'>Cancel</Link>

            </form>
            </div>
            </div>

            

        </>
    )
    }    
export default ItemForm;