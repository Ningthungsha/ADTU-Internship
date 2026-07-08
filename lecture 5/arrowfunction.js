let a = () =>{
    console.log("hello");
}

a();


//return type

// let b  = (a,b)=>{
//     return a+b  // explicit return 
// }

// let b  = (a,b)=> (a+b)  // implicit return

let b  = (a,b)=> a+b  // single line return 

let c =b(10,20);

console.log(c);