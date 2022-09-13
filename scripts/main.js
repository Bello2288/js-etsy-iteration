// The array.map(), array.forEach(), array.filter() and array.reduce() 
// methods for pulling data out of an array



// 1. Show me how to calculate the average price of all items. 
//    Please console.log the average.
// The average price is $23.63

let prices = items.map(function(item) {
    return item.price
}); 

// console.log(prices)

const average = prices.reduce((a, b) => a + b, 0) / prices.length;
console.log(`The average price is $${average.toFixed(2)}`);






// 2. Show me how to get an array of items that cost between $14.00 
//    and $18.00 USD. Please console.log the answer.


const between  = items.filter(function(item) {
        return  item.price >= 14 && item.price <= 18
});


console.log("Items that cost between $14.00 USD and $18.00 USD:");

between.forEach(function(item) {
    console.log(item.title);
});


// 3. Show me how find the item with a "GBP" currency code and print 
//    its name and price. Please console.log the one you find.

// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18


const print  = items.filter(function(item) {
    return item.currency_code === 'GBP'
});

print.forEach(function(item) {
console.log(item.title, "costs £", item.price);
});





// 4. Show me how to find which items are made of wood. Please console.log 
//    the ones you find.
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.


//




// 5. Show me how to find which items are made of eight or more materials. 
//    Please console.log the ones you find.

//




// 6. Show me how to calculate how many items were made by their sellers. 
//    Please console.log your answer.
// 18 were made by their sellers

//




