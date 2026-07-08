let arr = [1,2,,3,4,5,6]

let acc = 0;
for(let key in arr){
    acc+= arr[key];
}
console.log(acc);

let total = arr.reduce((acc,curr)=>{
    return accz=curr;
},0)

console.log(total);