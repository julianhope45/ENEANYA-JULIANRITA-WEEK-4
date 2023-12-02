// tyes of data type
//*string data type . examples
let name = "Aunrika Julianrita";
let surname = "Eneanya"

// examples of numbers types of data
var a = 70;
let b = 10
console.log(a)
//  additions
let c= a*b;
console.log(c)

// examples of subtraction
let d = a-b;
console.log(d)
let f = a/b;
console.log (f)


// boolean data type eg true or false.
 
true
false



// examples of conditional statemant
// i. if

let myAge = 70;
if(myAge > 40){
    console.log("go and marry")
}
if(myAge > 40){
    console.log("work and build you self")
}else{
    console.log("go and marry")
}
// examples of for loop
for(let j = 0; j <= 10; j++)(
    console.log(j)//0 1 2 3 4 5 6 7 8 9
)

//4. function and scope
function multiplytwovalues(){
    let h = 6;
    let w = 15;
  console.log(h*w)
}
multiplytwovalues()

function countonetofive(){
    for(let i = 0; i <= 5; i++){
        console.log(i)
    }
}

countonetofive()

function addtwovalues(x,y){
    console.log(x+y)
}
addtwovalues(7,9)
addtwovalues(10,12)

function addthreevalues(x,y,z){
    console.log(x+y+z)
}
addthreevalues(23,34,54)
addthreevalues(45,89,78)

// 5. arrays and objectsl
let emptyarry=[];
 fruits = ['orange', 'pawpaw', 'guava','apple', 'lemon','cumcumber']
console.log(fruits)
console.log(fruits [0])
console.log(fruits [4])
let fruitlength=fruits.length;
console.log(fruitlength)

 fruits.push('grape')
 fruits.unshift('cherry')

 console.log(fruits)


 //Object
 let personone = {
    firstname: "Aunrika",
    surname: "Julianrita",
    age: 30,
    job: "Software Engineer",
    hobbies: ["football", "basketball", "cricket"]


}


console.log(personone.firstname)

console.log(personone.surname)

console.log(personone.age)

console.log(personone.job)

console.log(personone.hobbies)


//higher order function


let arr=[1,2,3,4,5];
output=arr.map((num) => num +=10)
console.log(arr);//[1,2,3,4,5]

const users=[
    {firstname:'Ben',lastname:'Hank', Age: 26},
    {firstname:'James',lastname:'Bells',Age:40},
    {firstname:'Grace',lastname:'okeke', Age: 36},
    {firstname:'Sophie',lastname:'williams', Age: 55}

]
const result = users.map((user) => user.firstname+' '+user.lastname)
console.log(result) ;//['Ben  Hank']





















// 










