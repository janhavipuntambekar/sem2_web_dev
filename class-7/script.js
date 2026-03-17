const cart=["strawberry","cherry","blueberry","apricot"];
const promise = createOrder(cart);

//print promise
console.log(promise);

//consume
promise.then(function (orderId){
    //this runs when promise is fulfilled
    console.log(orderId);
});

function createOrder(cart){

function validateCart(){
    return true;
}

    const pr=new Promise (function(resolve,reject){
        //craeteorder
        //validate the cart(check in stock)
        //return orderid

        //fail-first approach
        if(!validateCart(cart)){
            setTimeout(function(){
                const err=new Error("cart is invalid");
                reject(err);
            },2000);
        }

        //logic for createorder
        const orderId='0910';

        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }
    })
    return pr;
}