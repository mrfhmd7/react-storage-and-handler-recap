import React from 'react';
import { add } from '../../utilities/calculate';

const Cosmetics = () => {
     const first = 15;
     const second = 20;
     const result = add(first, second);
     return (
          <div>
               <h1>Welcome to my Cosmetics Store.</h1>
               <h4>Result: {result}</h4>
          </div>
     );
};

export default Cosmetics; 