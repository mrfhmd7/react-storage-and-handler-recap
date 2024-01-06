import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { deleteCart } from '../../utilities/fakedb';
import { totalPrice } from '../../utilities/calculate';

const Cosmetics = () => {
     const [cosmetics, setCosmetics] = useState([]);

     const deleteShoppingCart = () => {
          // console.log('delete');
          deleteCart();
     }

     const total = totalPrice(cosmetics);

     useEffect(() => {
          fetch(`data.json`)
               .then(res => res.json())
               .then(data => setCosmetics(data))
     }, []);
     return (
          <div>
               <h1>Welcome to my Cosmetics Store.</h1>
               <p>Your total price: ${total}</p>
               {
                    cosmetics.map(cosmetic => <Cosmetic
                         key={cosmetic.id}
                         cosmetic={cosmetic}
                    ></Cosmetic>)
               }
               <button onClick={() => deleteShoppingCart()}>Delete Cart</button>
          </div>
     );
};

export default Cosmetics; 