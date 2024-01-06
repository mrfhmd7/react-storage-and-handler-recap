// use local storage to manage cart data

const addToDb = id => {
     // this is a good way to practice local storage

     let shoppingCart;

     // get shopping cart from local storage
     const storedCart = localStorage.getItem('shopping-cart');
     if (storedCart) {
          shoppingCart = JSON.parse(storedCart);
     }
     else {
          shoppingCart = {};
     }

     const quantity = shoppingCart[id];

     if (quantity) {
          const newQuantity = quantity + 1;
          shoppingCart[id] = newQuantity;
     }
     else {
          shoppingCart[id] = 1;
     }

     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));



     // this is not a good way to practice local storage;

     // const quantity = localStorage.getItem(id);
     // if (quantity) {
     //      // console.log('already exists', quantity);
     //      const newQuantity = parseInt(quantity) + 1;
     //      localStorage.setItem(id, newQuantity)
     // }
     // else { 
     //      // console.log('new item');
     //      localStorage.setItem(id, 1);
     // }
}

const removeFromDb = id => {
     const storedCart = localStorage.getItem('shopping-cart');
     if (storedCart) {
          const shoppingCart = JSON.parse(storedCart);
          if (id in shoppingCart) {
               delete shoppingCart[id];
               localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
          }
     }
}

// const deleteCart = () => {
//      localStorage.removeItem('shopping-cart');
// }

export {
     addToDb,
     removeFromDb,
     deleteCart,
};