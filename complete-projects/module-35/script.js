/* ======= (v-1) Different types of Objects ======= */

// /* Create objects using object literals */
// const player = {}
// player.name = 'Abul'                // (properties)
// player.age = 65
// player.profession = function () {   // (method)
//     console.log('I am a player')
// }
// console.log(player)     // { name: 'Abul', age: 65, profession: [Function (anonymous)] }
// player.profession()     // I am a player




// /* Create objects using object literals */
// const student = {
//     name: 'Babul',
//     profession: function () {
//         console.log('I am a student')
//     },
//     age: 17
// }
// console.log(student)        // { name: 'Babul', profession: [Function: profession], age: 17 }
// student.profession()        // I am a student




// /*  Object Constructor */
// const person = new Object()
// console.log(person)         // {}




// // /* Object create method */
// // const item = Object.create(null)
// // console.log(item)           // [Object: null prototype] {}

// const item = Object.create(student)
// console.log(item)           // {}
// console.log(item.name)      // Babul
// item.profession()           // I am a student




// /* Class */
// class Person {
//     name = 'Cabul';
//     address = 'kosu khet';
//     constructor(age) {
//         this.age = age;
//     }
// }
// const person1 = new Person(35)
// console.log(person1)    // Person { name: 'Cabul', address: 'kosu khet', age: 35 }




// /* Function */
// function Car(model, price) {
//     this.model = model;
//     this.price = price;
// }
// const tesla = new Car('tesla', 15000)
// console.log(tesla)          // Car { model: 'tesla', price: 15000 }













// /* ======= (v-2)  ======= */
// const student = {
//     name: 'Abul',
//     age: 18,
//     money: 5000,
//     profession: function () {
//         console.log(this.name, 'is a student.')         // this.name = 'Abul'
//     },
//     whoIs: function (whichClass) {
//         this.profession()                               // Abul is a student.
//         console.log(`He is ${this.age} years old.`)     // He is 18 years old.
//         console.log(`And he is in class ${whichClass}.`)    // And he is in class 10.
//     },
//     frndTrt: function (amount) {
//         this.money = this.money - amount            // 5000 - 900
//         console.log('Remaining:', this.money)       // Remaining: 4100
//     }
// }
// console.log(student)    // { name: 'Abul', age: 18, profession: [Function: profession] }
// student.profession()    // Abul is a student.
// student.whoIs(10)       // Abul is a student. \n He is 18 years old. \n And he is in class 10.
// student.frndTrt(900)                  // Remaining: 4100
// const csnTrt = student.frndTrt(500)   // Remaining: 3600









// /* ======= (v-3)  ======= */
// const array = { color: 'red', price: 50, isCleaned: true }
// console.log(Object.keys(array))     // [ 'color', 'price', 'isCleaned' ]
// console.log(Object.values(array))   // [ 'red', 50, true ]
// /* Two dimensional array */
// console.log(Object.entries(array))  // [ [ 'color', 'red' ], [ 'price', 50 ], [ 'isCleaned', true ] ]

// delete array.isCleaned;             // { color: 'red', price: 50 }

// const { price, ...b } = array
// console.log(b)                      // { color: 'red', isCleaned: true }

// array.height = 111                  // { color: 'red', price: 50, height: 111 }

// /* seal korle delete kora jabena, add kora jabena bt update kora jabe */
// console.log(array)                  // { color: 'red', price: 5000 }
// Object.seal(array)
// delete array.price                  // delete kora jabe na
// array.length = 222                  // add kora jabe na
// array.price = 5000                  // update kora jabe
// console.log(array)                  // { color: 'red', price: 5000 }

// /* Freeze korle kuno kichu e kora jabe na */
// console.log(array)                  // { color: 'red', price: 5000, height: 111 }
// Object.freeze(array)
// delete array.price
// array.price = 5000
// array.width = 333
// console.log(array)                  // { color: 'red', price: 5000, height: 111 }











// /* ======= (v-4)  ======= */

// /* Use (For if) for array: */
// const array = [1, 2, 3, 4, 5, 6, 7]
// for (const num of array) {
//     console.log(num)
// }			       // 1 2 3 4 5 6 7


// /* Use (For in) for object: */
// const obj = { color: 'red', price: 50, isCleaned: true }
// for (const key in obj) {
//     console.log(key)
// }                       // color price isCleaned



// /* Keys: */
// const obj = { color: 'red', price: 50, isCleaned: true }
// const objKeys = Object.keys(obj)     // ['color', 'price', 'isCleaned']
// for (const key of objKeys) {
//     console.log(key)
// }                                    // color price isCleaned


// /* Values: */
// const obj = { color: 'red', price: 50, isCleaned: true }
// const objValue = Object.values(obj)     // [ 'red', 50, true ]
// for (const value of objValue) {
//     console.log(value)
// }                          			// red 50 true



// /* Keys and Values: */
// const obj = { color: 'red', price: 50, isCleaned: true }
// const objKeysValues = Object.entries(obj)
// // [ [ 'color', 'red' ], [ 'price', 50 ], [ 'isCleaned', true ] ]
// for (const [key, value] of objKeysValues) {
//     console.log(key, value)
// }                          // color red \n price 50 \n isCleaned true





// const obj = { color: 'red', price: 50, isCleaned: true }
// for (const key in obj) {
//     console.log(key, obj[key])
// }           // color red \n price 50 \n isCleaned true










// /* ======= (v-5) ======= */

// const first = {}
// const second = {}
// if (first === second) {
//     console.log('same')
// } else {
//     console.log('different')
// }                       // different



// const first = { a: 5, b: 2 }
// const second = { a: 5, b: 2 }
// const firstString = JSON.stringify(first)
// const secondString = JSON.stringify(second)
// if (firstString === secondString) {
//     console.log('same')
// } else {
//     console.log('different')
// }                       // same




/* Get the values of two objects for the same keys: Important */
// const first = { a: 1, b: 2, c: 3 }
// const second = { b: 3, c: 7, a: 1 }
// const firstKeys = Object.keys(first)
// const secondKeys = Object.keys(second)
// for (const key of firstKeys) {
//     console.log(first[key], second[key])
// } 			// 1 1   \n   2 3	   \n   3 7




/* Compare keys and values of two array: Important */
// const first = { a: 1, b: 2, c: 3 }
// const second = { b: 2, c: 3, a: 1 }
// function compare(first, second) {
//     const firstKeys = Object.keys(first)
//     const secondKeys = Object.keys(second)
//     if (firstKeys.length === secondKeys.length) {
//         for (const key of firstKeys) {
//             if (first[key] !== second[key]) {
//                 return 'false'
//             }
//         }
//         return 'true'
//     }
// }
// console.log(compare(first, second))     // true












// /* ======= (v-6) ======= */
// const student1 = {
//     name: 'Abul',
//     age: 18,
//     money: 5000,
//     profession: function () {
//         console.log(this.name, 'is a student.')         // this.name = 'Abul'
//     },
//     whoIs: function (whichClass) {
//         this.profession()                               // Abul is a student.
//         console.log(`He is ${this.age} years old.`)     // He is 18 years old.
//         console.log(`And he is in class ${whichClass}.`)    // And he is in class 10.
//     },
//     frndTrt: function (amount) {
//         this.money = this.money - amount
//         console.log('Remaining:', this.money)
//     }
// }
// const student2 = {
//     name: 'Babul',
//     money: 8000,
//     frndTrt: function (amount) {
//         this.money = this.money - amount
//         console.log('Remaining:', this.money)
//     }
// }

// student1.profession()                   // Abul is a student.
// student1.profession.call(student2)      // Babul is a student.

// /* call(secondArrayName, value) */
// student2.frndTrt(900)                   // 8000 - 900 = 7100
// student2.frndTrt.call(student1, 900)    // 5000 - 900 = 4100

// /* apply(secondArrayName, [value]) */
// student2.frndTrt.apply(student1, [900]) // 5000 - 900 = 4100

// /* bind(secondArrayName) then call with value */
// const remaining = student2.frndTrt.bind(student1)
// remaining(900)                           // 5000 - 900 = 4100









// /* ======= (v-7) ======= */
// const student1 = {
//     name: 'Abul',
//     money: 5000,
//     profession: function () {
//         console.log(this.name, 'is a student.')         // this.name = 'Abul'
//     },
//     normalFunction: function () {
//         console.log(this)
//     },
//     arrowFunction: () => {
//         console.log(this)
//     }
// }


// const student2 = {
//     name: 'Babul',
//     money: 8000
// }

// student1.profession()                   // Abul is a student.

// student2.profession = student1.profession
// student2.profession()                   // Babul is a student.

// student1.normalFunction()   // {name: 'Abul', age: 18, money: 5000, profession: ƒ, normalFunction: ƒ, …}
// student1.arrowFunction()    // Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// /* See buttons from HTML code */
// function domFunctionBtn() {
//     console.log(this)
// }   // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// document.getElementById('dom-id-btn').addEventListener('click', function () {
//     console.log(this)
// })  // <button id="dom-id-btn">DOM Button</button>

















// /* ======= (v-8) ======= */

// /* Shallow copy */
// const data = { name: 'Abul', age: 56 }
// const dataCopy = { ...data }
// data.height = 111
// dataCopy.width = 333
// console.log(data)       // { name: 'Abul', age: 56, height: 111 }
// console.log(dataCopy)   // { name: 'Abul', age: 56, width: 333 }


// /* Deep Copy */
// const data = { name: 'Abul', age: 56 }
// const dataCopy = JSON.parse(JSON.stringify(data))
// data.height = 111
// dataCopy.width = 333
// console.log(data)       // { name: 'Abul', age: 56, height: 111 }
// console.log(dataCopy)   // { name: 'Abul', age: 56, width: 333 }
