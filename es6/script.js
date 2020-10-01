//declaring variable let and const block scope var is function scope
let condition = false;
if(condition === true){
    const name = 'Rogmer'
    console.log(name)
}else{
    const name = 'Bulaclac'
    console.log(name)
}

var es5IIFE = (function(){
    console.log('This is es5 iife')
})()


//Arrow Function

const years = [1990, 1965,1982,1937]

let ages = years.map((year) => {
    return 2016 - year
})

console.log(ages)