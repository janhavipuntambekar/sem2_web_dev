// document.querySelector("#grandparent").addEventListener("click", ()=>{
//     console.log("Grandparent clicked");
// },false)
// document.querySelector("#parent").addEventListener("click", ()=>{
//     console.log("Parent clicked");
// },false)
// document.querySelector("#child").addEventListener("click", ()=>{
//     console.log("Child clicked");
// },false)



// document.querySelector("#grandparent").addEventListener("click", ()=>{
//     console.log("Grandparent clicked");
// },true)
// document.querySelector("#parent").addEventListener("click", ()=>{
//     console.log("Parent clicked");
// },true)
// document.querySelector("#child").addEventListener("click", ()=>{
//     console.log("Child clicked");
// },true)



// document.querySelector("#grandparent").addEventListener("click", ()=>{
//     console.log("Grandparent clicked");
// },false)
// document.querySelector("#parent").addEventListener("click", ()=>{
//     console.log("Parent clicked");
// },true)
// document.querySelector("#child").addEventListener("click", ()=>{
//     console.log("Child clicked");
// },false)



// document.querySelector("#grandparent").addEventListener("click", ()=>{
//     console.log("Grandparent clicked");
// },false) //bubbling

// document.querySelector("#parent").addEventListener("click", ()=>{
//     console.log("Parent clicked");
// },false) //bubbling

// document.querySelector("#child").addEventListener("click", (e)=>{
//     console.log("Child clicked");
//     e.stopPropagation();
// },false) //bubbling but will stop after clicking at child only because of stop propagation


document.querySelector(".grandparent").addEventListener("click", ()=>{
    console.log("Grandparent clicked");
    document.querySelector("#text").innerText += "Grandparent → Bubbling\n";
},false)
document.querySelector(".parent").addEventListener("click", ()=>{
    console.log("Parent clicked");
    document.querySelector("#text").innerText += "Parent → Bubbling\n";
},false)
document.querySelector("#child").addEventListener("click", ()=>{
    console.log("Child clicked");
    document.querySelector("#text").innerText += "Child → Bubbling\n";
},false)

