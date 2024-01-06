import React from 'react';
import './Cosmetic.css'
import { addToDb, deleteCart, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
     // console.log(props.cosmetic);
     const { name, price ,id } = props.cosmetic;

     const addToCart = (id) => {
          addToDb(id);
     }

     const removeFromCart = (id) => {
          removeFromDb(id);
     }

     // const deleteShoppingCart = () => {
     //      deleteCart();
     // }

     return (
          <div className='product'>
               <h2>Buy this: {name} </h2>
               <p>Only for: ${price}</p>
               <p><small>id: {id}</small></p>
               <button onClick={() => addToCart(id)}>Add to cart</button>
               <button onClick={() => removeFromCart(id)}>Remove</button>
               {/* <button onClick={() => deleteShoppingCart()}>Delete Cart</button> */}
          </div>
     );
};

export default Cosmetic;