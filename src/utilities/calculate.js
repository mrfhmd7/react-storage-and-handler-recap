const add = (a, b) => {
     return a + b;
}

const multiply = (a, b) => {
     return a * b;
}

// const numbers = [20, 30, 40, 50, 60];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0);
// console.log(total);


// const items = [
//      {id:1, name: 'a', price: 100},
//      {id:2, name: 'b', price: 200},
//      {id:3, name: 'c', price: 300},
//      {id:4, name: 'd', price: 400},
//      {id:5, name: 'e', price: 500},
// ]

// const itemSumReducer = (previous, current) => previous + current.price;
// const total = items.reduce(itemSumReducer, 0)
// console.log(total);

const getTotalPrice = products => {
     const reducer = (previous, current) => previous + current.price;
     const totalPrice = products.reduce(reducer, 0);
     return totalPrice;
}

export {
     add,
     multiply,
     getTotalPrice as totalPrice
};