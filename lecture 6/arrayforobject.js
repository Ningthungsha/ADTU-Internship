// let codingLang = ["js","python", "c++", "java", "c","ruby"];



// for(let key in codingLang){
//     console.log(codingLang[key]);
// }


// for-each

// codingLang.forEach(function (item){
//     console.log(item);
// })

// //using arrow function 

// codingLang.forEach((item)=>{
//     console.log(item);
// })




let myarr = [
    {
        langname: "C++",
        langext: "cpp"
    },
    {
        langname: "javascript",
        langext: "js"
    },
    {
        langname: "java",
        langext: "java"
    },
    {
        langname: "Python",
        langext: "py"
    }
]

myarr.forEach((item)=>{
    console.log(item.langext);
})