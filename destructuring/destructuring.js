//object
let person = {
    firstName:" Mohamed",
    age: 40
}
// console.log(person.firstName)
// console.log (person)
console.log(person ["age"]);
console.log(person ["firstName"])
//destructuring object

let { firstName, age } = person
console.log(firstName, age)

//array
let listOfStudent = ["Ali" , "Mohaa", "Gedi" , "Halima"  ]
console.log(listOfStudent[0] , listOfStudent[2])

// destructuring array
let [firtposition, secondposition, thirdposition, forthposition] = listOfStudent
console.log(firtposition, thirdposition, forthposition)