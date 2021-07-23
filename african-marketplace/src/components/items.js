import React, {useState} from 'react'
// import TextInput from './TextInput.js'



const ItemForm = () => {
  const [itemFormValues, setItemFormValues] = useState({
    productName: "", 
    description: "", 
    seller_price: 0, 
    qty: 0
  });

    //const {itemFormValues, setItemFormValues, loginDisabled} = props

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
        // console.log(item);
        
    
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
            Product name: &nbsp;
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

            &nbsp; &nbsp;
            <label htmlFor="name">
            Product: &nbsp;
                    <input
                    type="text"
                    name="description"
                    placeholder="Product description"
                    onChange={inputChange} 
                    value={itemFormValues.description}
                    label="product description"
                />
                </label>

            &nbsp; &nbsp;
            <label htmlFor="name">
            Price: &nbsp;  
                    <input
                    type="text"
                    name="seller_price"
                    placeholder="Seller price"
                    onChange={inputChange} 
                    value={itemFormValues.seller_price}
                />
            </label>

            &nbsp; &nbsp;
            <label htmlFor="name">
            Qty: &nbsp;
                <input
                type="text"
                name="qty"
                placeholder="Qty"
                onChange={inputChange} 
                value={itemFormValues.qty}
                />
            </label>


                  {/* <div>{itemFormErrors.itemName}</div> */}

                {/* <div className='itemForm-radio'>
                <input type="radio" name="isOverEighteen" onChange={inputChange} value={true}/>Are you over 18 years of age?
                  </div> */}
                  {/* <div>{itemFormErrors.isOverEighteen}</div> */}


                <div className='itemForm-slider'>
                    <div className="slider-container">
                    {/* <label className="switch">
                        <input id="isMerchant" type="checkbox" name="merchant"
                        checked={itemFormValues.isMerchant} onChange={inputChange}/> 
                        <span className="slider"></span><br/>
                    </label>
                      <p className="slider-text">Are you an instructor?</p> */}

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