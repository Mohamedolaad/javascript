//example1
let arr1 = [1, 2, 3,]
let arr2 = [5, 6, 7, ]
let marged =[...arr1, ...arr2]
console.log(marged)

//example2
let num = [10, 20, 30]
let copy = [...num]
console.log(num)
console.log(copy)
//example3
let user = {
    firstName: "Hawa",
    secondName: "Ali",
    age: 25
}
let details = { country: "kenya", phone: +254}
let profile = {...user, ...details}
console.log(profile)

