// Practice JS

// Variables

// strings
let firstName = 'Reina'
// console.log(firstName)
let lastName = 'Mitchell'
// console.log(lastName)

// int
let age = 26
// console.log(age)

// boolean
let fullAge = true
// console.log(fullAge)

/**
 Variable mutation and type coercion
 */

// console.log(firstName + ' ' + age)

let job, isMarried
job = 'teacher'
isMarried = false
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried)

age = 'twenty-eight'
job = 'driver'
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried)

// lastName = prompt('What is her last name? ')
// console.log(lastName)

// Math Operators

let year = 2020
let yearReinaBorn = year - 1993
let yearMarkBorn = year - 1983

// console.log(yearReinaBorn)
// console.log(yearMarkBorn)

let ageReina = 27
let ageMark = 37

// Logical operators
let markOlder = ageMark > ageReina
// console.log(markOlder)

// typeof operator
// console.log(typeof markOlder)
// console.log(typeof ageReina)
// console.log(typeof 'Reina is younger than Mark.')

// Operator Precedence
let ofAge = 18
let isFullAge = year - 1983 >= ofAge
// console.log(isFullAge)

let x, y

x = (3 + 5) * 4 - 6 // 8 * 4 - 6 => // 32 - 6 => // 26
// console.log(x)

// Code Challenge 1

let markWeight = 68
let markHeight = 1.82

let johnWeight = 81
let johnHeight = 1.87

let markBMI = markWeight / markHeight ** 2
let johnBMI = johnWeight / johnHeight ** 2

let bool = johnBMI >= markBMI
// console.log("Is John's BMI greater than or equal to Mark's? " + bool)
// console.log(markBMI, johnBMI)
