import React, {useState} from 'react'


const ItemForm = () => {
  const [itemFormValues, setItemFormValues] = useState({
    productName: "", 
    description: "", 
    seller_price: 0, 
    qty: 0
  });

  const inputChange = (e) => {
    
    const { name, value } = e.target;
      console.log(`name: ${name}, value: ${value}`);
    const inputValue = value;
      console.log("inputValue: ", inputValue)
      setItemFormValues({ ...itemFormValues, [name]: inputValue });
    } 

  const onFormSubmit = (e) => {
      console.log('Item Submitted and Displayed on Next Line');
      e.preventDefault();

      
  
      }
    
    return (
        <>
        
            <div className='background-itemForm'>
            <div className='itemForm-container'>
            <form className='itemForm' onSubmit={onFormSubmit}>
                <div className='itemForm-title'>
                    <h1 >Inventory</h1>
                    <h2>Welcome Merchant!</h2>
                    <p>Fill in form and click submit to add new products to sell on Sauti Market.</p>
                </div>


            <label htmlFor="name">
            Product name: 
                <input
                    type="text"
                    name="productName"
                    placeholder="Product's Name"
                    onChange={inputChange} 
                    // value={itemFormValues =>{}}
                    value={itemFormValues.productName}
                    label="Product name"
                />
            </label>

            
            <label htmlFor="name">
            Product: 
                    <input
                    type="text"
                    name="description"
                    placeholder="Product description"
                    onChange={inputChange} 
                    value={itemFormValues.description}
                    label="product description"
                />
                </label>

            
            <label htmlFor="name">
            Price:  
                    <input
                    type="text"
                    name="seller_price"
                    placeholder="Seller price"
                    onChange={inputChange} 
                    value={itemFormValues.seller_price}
                />
            </label>

            
            <label htmlFor="name">
            Qty: 
                <input
                type="text"
                name="qty"
                placeholder="Qty"
                onChange={inputChange} 
                value={itemFormValues.qty}
                />
            </label>


                <div className='itemForm-slider'>
                    <div className="slider-container">

                    </div>
                </div>

                <br/>
                <br/>
                <button type="submit" id="submitBtn" >Submit</button> 

            </form>
            </div>
            </div>

            

        </>
    )
    }    
export default ItemForm;