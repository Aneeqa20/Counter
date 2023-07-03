let decrement=document.getElementById('dec')
let reset=document.getElementById('reset')
let increment=document.getElementById('inc')
let value=0;

let numContainer=document.getElementById('num')

// increment.addEventListener('click', () =>{      Another way
//     value++;
//     numContainer.innerHTML=value;

// })

// // decrement.addEventListener('click', () =>{
// //     value--;
// //     numContainer.textContent=value;

// // })

// // decrement.addEventListener('click', () =>{
// //     value--;
// //     numContainer.textContent=value;

// // })
function first(){
    value--;
    numContainer.innerHTML=value;
    
}
function second(){
    value++;
    numContainer.innerHTML=value;
    
}
function third(){
    value=0;
    numContainer.innerHTML=value;
    
}
