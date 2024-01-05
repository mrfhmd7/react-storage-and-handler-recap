import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
     // console.log(props.cosmetic);
     const { name, price ,id } = props.cosmetic;

     const addToCart = (id) => {
          console.log('added',id);
     }
     return (
          <div className='product'>
               <h2>Buy this: {name} </h2>
               <p>Only for: ${price}</p>
               <small>id: {id}</small> <br />
               <button onClick={() => addToCart(id)}>Add to cart</button>
          </div>
     );
};

export default Cosmetic;