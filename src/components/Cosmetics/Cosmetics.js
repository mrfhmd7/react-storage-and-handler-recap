import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
     const [cosmetics, setCosmetics] = useState([]);

     useEffect(() => {
          
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
          </div>
     );
};

export default Cosmetics; 