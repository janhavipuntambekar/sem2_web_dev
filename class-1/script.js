// function greet(a){
//     console.log("Hello",arguments[4]);
// }
// greet(1,2,3,4,"World",true,11)



// function noOfArg(){
//     console.log(arguments.length)
// }
// noOfArg(1,2,3,4);


// function findArg(a,b,...arg){
//     console.log(a,b,arg)
// }
// findArg(1,2,5,6,7,8,"apple")

// let king = prompt();
// if(king>=10){
// king = king*(90/100);
// }
// king = king + king*(18/100);
// console.log(king);

// let x=10;
// function outer(){
//     let x=20;
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }
// outer();

// let str="hello developers cat dog"
// let str1=str.slice(12,10);
// console.log(str1);


// let str=" Learn JavaScript Functions Arrow IIFE ";
// let str1=str.trim();
// console.log(str1);
// console.log(str1.length);
// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str1.substring(6,16));
// console.log(str1.slice(6,16));
// console.log(str1.includes("Function","Arrow","iife"));
// console.log(str1.charAt(6));
// console.log(str1.charCodeAt(0));
// let str2=str1.toLowerCase();
// console.log(str2.includes("javascript"));


// var x=1;
// if(true){
//     var x=2;
// }
// console.log(x);


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