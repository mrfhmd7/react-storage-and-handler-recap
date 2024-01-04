import React from 'react';
import { add, multiply } from '../../../utilities/calculate';

const Shoes = () => {
     const first = 45;
     const second = 50;
     const result = multiply(first, second);
     const sum = add(result, second);
     return (
          <div>
               <h2>This is shoes components.</h2>
               <h4>Result: {result} and Sum: {sum}</h4>
          </div>
     );
};

export default Shoes;