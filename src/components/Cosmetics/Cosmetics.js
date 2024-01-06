import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { deleteCart } from '../../utilities/fakedb';

const Cosmetics = () => {
     const [cosmetics, setCosmetics] = useState([]);

     const deleteShoppingCart = () => {
          // console.log('delete');
          deleteCart();
     }

     useEffect(() => {
          fetch(`data.json`)
               .then(res => res.json())
               .then(data => setCosmetics(data))
     }, []);
     return (
          <div>
               <h1>Welcome to my Cosmetics Store.</h1>
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