let cart = [
    {
        name : "Laptop",
        priceInUSD : 1000,
    },
    {
        name : "iPad",
        priceInUSD : 500,
    },
    {
        name : "T-shirt",
        priceInUSD : 100,
    },
]

let exchangeRate = 80

function convertToINR(priceInUSD){
    return priceInUSD*exchangeRate
}

let cart2 = cart.map((item)=>({
    name : item.name,
    priceInINR : convertToINR(item.priceInUSD),
}))

console.log(cart2);