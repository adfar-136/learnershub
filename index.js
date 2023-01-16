var a = [1,2,3,4,5,6,7]
//extract the part given inside it => slice
// array.slice(start,end)
// var b = a.slice(2,4)
// console.log(a)
// console.log(b)
//splice methods
// remove/add elements to/from the existing
// Array.splice(start,delete,element1,element2)
// a.splice(2,4,'x','y','z',1,2,3,4,5,6,7,8)
// console.log(a)
//concat method is used to combine multiple methods
// var arr1 = [1,2,3,4]
// var arr2=[5,6,7,8]
// var arr3 = [9,10,11,12]
// var c = [].concat(arr1,arr2,arr3)
// console.log(c)
//indexOf search the position of a particular element in a array.
//if an element is not present in my array;  it returns -1

// var arr1 = [1,32,3,4,5,6,67]
// console.log(arr1.indexOf(3534))

//Rest Operator and spread operator
//rest: allows my function to accept indefinite no. of arguments as an array
//for ..of loop

// var scores = [80,90,10,60,70]
// //for(variable of iterable) 
// for (let x of scores){
//     x = x+5
//     console.log(x)
// }
// Rest Operator
// function add(a,b,c){
//     return a+b+c;
// }
// const result = add(4,5,6)
// console.log(result)
// function add(a,b,c,...other){
//     console.log(other)
//     return a+b+c+other;
// }
// const result = add(4,5,6,6,8,9,6,5,68,78,6787)
// console.log(result)
// function add(...other){
//    let sum = 0;
//    for(let i of other){
//     sum= sum+i;

//    }
//    return sum
// }
// const result = add(4,5,6,6,8,9,6,5,68,78,6787)
// console.log(add(1,2,3,4,5,56,67,6766,4433,53,34))
// console.log(result)
//Spread Operator => ...other
//construct an array using spread operator
// let num1 =[1,2,3]
// let newNum = [...num1,4,5,6]
// console.log(newNum)
// let words = ['a','b','c']
// let NewWords = [...words]
// console.log(NewWords)


// var arr =  [2,5,6,3,8,9]
// // var newarr = arr.map(function(val){
// //     return val*val
// // })
// var newarr =arr.map(x=>x*x)
// console.log(newarr)
// const numbers = [3,4,5,9,16]
// const newarr =numbers.map(Math.sqrt)
// console.log(newarr)

// Array.sort(compare function)
// let numbers = [1,3,2,9,4,5,-1,-2,-3]
// console.log(numbers.sort())
// const items = ["banana","orange",'apple',"mango"]
// console.log(items.sort())

// let numbers = [20,-120,0,5.2,100,3,30]
// console.log(numbers.sort(function(a,b){
//     return b-a
// }))

// function canVote(age){
//     return age > 0
// }

// function funct(){
//     var filtered = [-3,-5,-7,10,24,56,23,1,0,65].filter(canVote)
//     console.log(filtered)
// }
// funct()

const array  = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13]
function isPrime(num){
    for(let i =2;num>i;i++){
        if(num%i === 0){
            return false;
        }
    }
    return num > 1;
}
console.log(array.filter(isPrime))




