/* ==========================================================================
============================== Module 24 (DOM) ==============================
========================================================================== */


// let heading = document.getElementById('heading')
// heading.innerText = 'hello'



// let lists = document.getElementsByTagName('h1')          // HTML Collection or array like object
// console.log(lists)


// let lists = document.getElementsByTagName('li')          // HTML Collection or array like object
// for (const list of lists) {
//     console.log(list.innerText)
// }



// const texts = document.getElementsByClassName('text')
// console.log(texts)                                          // HTMLCollection or array like object
// for (let text of texts) {
//     console.log(text.innerText)
// }


// const lists = document.querySelectorAll('#container li')
// for (const list of lists) {
//     console.log(list)
// }
// console.log(lists)                                        // NodeList
// console.log(lists[1].innerText)


// const heading = document.querySelector('li')
// console.log(heading)                            // It will get only First element of this tag




// const heading = document.getElementById('heading')
// heading.classList.add('newClass')
// heading.classList.remove('newClass')
// heading.setAttribute('title', "Hi")





/* ========== 24.6 ==========*/

// const section = document.querySelectorAll('section')
// for (const sec of section) {
//     sec.style.border = '2px solid gray'
//     sec.style.borderRadius = '10px'
//     sec.style.padding = '10px'
//     sec.style.textAlign = 'center'
// }

// const lists = document.querySelectorAll('.list')
// for (const list of lists) {
//     list.style.border = '1px solid black'
//     list.style.marginBottom = '5px'
//     list.style.borderRadius = '5px'
// }



/* ========== 24.7 ==========*/

// const ulInContainer = document.querySelector('#container ul')

// const newLi = document.createElement('li')
// newLi.innerText = 'New List'

// ulInContainer.appendChild(newLi)



/* ========== 24.8 ==========*/
/* ----- Create New Section and append in mainContainer using Javascript: ----- */
// const mainContainer = document.getElementById('main-container')

// /* Create New Section */
// const newSection = document.createElement('section')

// /* Create New UL */
// const ul = document.createElement('ul')

// /* Create New Heading and add in ul */
// const h1 = document.createElement('h1')
// h1.innerText = 'New Section'
// ul.appendChild(h1)

// /* Create New list and add in ul */
// const li1 = document.createElement('li')
// li1.innerText = 'New section list 1'
// ul.appendChild(li1)

// const li2 = document.createElement('li')
// li2.innerText = 'New section list 2'
// ul.appendChild(li2)

// const li3 = document.createElement('li')
// li3.innerText = 'New section list 3'
// ul.appendChild(li3)

// /* Adding ul in newSection */
// newSection.appendChild(ul)

// /* Adding newSection in mainContainer */
// mainContainer.appendChild(newSection)




/* Set innerHTML directly */
// const mainContainerInner = document.getElementById('main-container')

// const innerHTMLSec = document.createElement('section')
// innerHTMLSec.innerHTML = `
// <h1>InnerHTML Section</h1>
// <ul>
//     <li>Inner first section</li>
//     <li>Inner second section</li>
//     <li>Inner third section</li>
// </ul>
// `
// mainContainerInner.appendChild(innerHTMLSec)

















/* ==========================================================================
============================== Module 25 (DOM) ==============================
========================================================================== */

/* ================ 25.2 & 3 ================ */
// /* ----- Onclick - Option: 2 ----- */
// function makeYellow() {
//     document.body.style.backgroundColor = 'yellow'
// }

// /* ----- Onclick - Option: 3 ----- */
// const tomatoBtn = document.getElementById('makeTomato')
// tomatoBtn.onclick = makeTomato
// function makeTomato() {
//     document.body.style.backgroundColor = 'tomato'
// }

// /* ----- Onclick - Option: 3 (another) ----- */
// let blueBtn = document.getElementById('makeBlue')
// blueBtn.onclick = function makeBlue() {
//     document.body.style.backgroundColor = 'blue'
// }


// /* ----- Onclick - Option: 4 ----- */
// const pinkBtn = document.getElementById('makePink')
// pinkBtn.addEventListener('click', makePink)
// function makePink() {
//     document.body.style.backgroundColor = 'pink'
// }

// /* ----- Onclick - Option: 4 (another) ----- */
// const greenBtn = document.getElementById('makeGreen')
// greenBtn.addEventListener('click', function makeGreen() {
//     document.body.style.backgroundColor = 'green'
// })

// /* ----- Onclick - Option: 4 (Final) ----- */
// document.getElementById('makeIndigo').addEventListener('click', function () {
//     document.body.style.backgroundColor = 'indigo'
// })





/* ================ 25.4 ================ */
// function welcome() {
//     document.getElementById('welcomeHeading').innerText = 'Welcome to JavaScript with onClick'
// }

// document.getElementById('welcome').addEventListener('click', function () {
//     document.getElementById('welcomeHeading').innerText = 'Welcome to JavaScript with AddEventListener'
// })

// document.getElementById('updateBtn').addEventListener('click', function () {
//     const input = document.getElementById('inputField')
//     const inputValue = input.value

//     document.getElementById('inputPara').innerText = inputValue
//     input.value = ''            // It will clear input field
// })



/* ================ 25.5 ================ */
// // Step-1: add evend listener to the post button
// document.getElementById('postBtn').addEventListener('click', function () {
//     // Step-2: get the comment inside the text area
//     const textInput = document.getElementById('textArea')
//     const textAreaValue = textInput.value

//     // Step-3: set the comment inside the comment container
//     const blogArea = document.getElementById('blogSection')
//     const paragraph = document.createElement('p')
//     paragraph.innerText = textAreaValue
//     blogArea.appendChild(paragraph)

//     // Step-4: clean the text input area
//     textInput.value = ''
// })





/* ================ 25.6 ================ */
// document.getElementById('text').addEventListener('keyup', function (event) {
//     let value = event.target.value
//     const deleteBtn = document.getElementById('deleteBtn')
//     if (value == 'delete') {
//         deleteBtn.removeAttribute('disabled')
//     } else {
//         deleteBtn.setAttribute('disabled', true)
//     }
// })
// document.getElementById('deleteBtn').addEventListener('click', function () {
//     const heading = document.getElementById('heading')
//     heading.style.display = 'none'
// })





/* ================ 25.7 (stopPropagation & stopImmediatePropagation) ================ */
// document.getElementById('list-2').addEventListener('click', function (event) {
//     console.log('list 2 main clicked')
//     event.stopImmediatePropagation()
// })
// document.getElementById('list-2').addEventListener('click', function (event) {
//     console.log('list 2 copy clicked')
//     event.stopImmediatePropagation()
// })
// document.getElementById('ul').addEventListener('click', function (event) {
//     console.log('ul clicked')
//     event.stopPropagation()
// })
// document.getElementById('container').addEventListener('click', function (event) {
//     console.log('container clicked')
//     event.stopPropagation()
// })
// document.getElementById('main-section').addEventListener('click', function (event) {
//     console.log('main section clicked')
//     event.stopPropagation()
// })






/* ================ 25.8 (Delegate) ================ */
// document.getElementById('container').addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target)
// })

// document.getElementById('addNewList').addEventListener('click', function () {
//     const ul = document.getElementById('ul')
//     const li = document.createElement('li');
//     li.innerText = 'Brand new list';
//     ul.appendChild(li)
// })


























/* ==========================================================================
============================== Module 26 (Baaper Bank) ==============================
========================================================================== */

// document.getElementById('submit-button').addEventListener('click', function () {
//     const userEmail = document.getElementById('user-email')
//     const userPassword = document.getElementById('user-password')
//     if (userEmail.value == 'baaper@bank.com' && userPassword.value == 'sontan') {
//         location.href = 'baaper-bank/bank.html'
//     } else {
//         alert('dure giya mor')
//     }
// })

// To see other file go to "baaper-bank" Folder








/* ==========================================================================
============================== Conceptual Session (14-8-2022) ==============================
========================================================================== */
// let count = 0
// document.getElementById('add-button').addEventListener('click', function () {
//     count++

//     const addInput = document.getElementById('add-input')
//     const addInputValue = addInput.value

//     if (addInputValue == '') {
//         alert('Please provide any text');
//         return;
//     }

//     const tableBody = document.getElementById('table-body')
//     const tr = document.createElement('tr')


//     tr.innerHTML = `
//         <td scope="row">${count}</td>
//         <td>${addInputValue}</td>
//         <td>
//             <button class="delete-btn bg-red-500 hover:bg-red-400 text-white p-2 font-semibold text-sm rounded-md">Delete</button>
//             <button class="edit-btn bg-green-700 hover:bg-green-500 text-white p-2 font-semibold text-sm rounded-md">Edit</button>
//         </td>
//     `

//     tr.style.borderBottom = '1px solid lightgray'

//     tableBody.appendChild(tr)

//     // Clear input area
//     addInput.value = ''


//     // Delete button
//     const deleteButton = document.getElementsByClassName('delete-btn')
//     for (const deleteBtn of deleteButton) {
//         deleteBtn.addEventListener('click', function (event) {
//             event.target.parentNode.parentNode.style.display = 'none'
//         })
//     }

//     // Edit button
//     const editButton = document.getElementsByClassName('edit-btn')
//     for (const editBtn of editButton) {
//         editBtn.addEventListener('click', function (event) {
//             event.target.parentNode.parentNode.style.textdecoration = 'underline'
//             console.log(event.target.parentNode.parentNode.style.textDecoration = 'line-through')
//         })
//     }
// })


// // Clear button
// document.getElementById('clear-btn').addEventListener('click', function () {
//     const tableBody = document.getElementById('table-body')
//     tableBody.style.display = 'none'
// })

























/* ==========================================================================
============================== Module 27 (ph-ex26-baaper-bank) ==============================
========================================================================== */

// To see Every code of this module go to "baaper-bank" Folder






// /* ===== Parctice problem (Module 27) ===== */
// function getNumber(number) {
//         const input = document.getElementById(number)
//         const inputValue = Number(input.value)
//         if (inputValue == '') {
//                 alert('Please provide a number')
//                 return
//         }
//         input.value = ''
//         return inputValue
// }

// document.getElementById('double-btn').addEventListener('click', function () {
//         document.getElementById('output').innerText = getNumber('input-number') * 2
// })
// document.getElementById('triple-btn').addEventListener('click', function () {
//         document.getElementById('output').innerText = getNumber('input-number') * 3
// })







/* ==========================================================================
============================== Module 27.5 ==============================
========================================================================== */

// /* একটা ডিসকাউন্ট ক্যালকুলেটর এর প্রাকটিস দিয়েছি। সেটা করো। যেখানে একটা প্রাইস লেখা থাকবে এবং একটা বাটন আছে। সেটাতে ক্লিক করলে প্রাইস ৩০% কমে যাবে। এইটার আরেকটু এডভান্সড ভার্সন হবে। তুমি যেদিন Apply বাটনে ক্লিক করবে তখন যদি পাশের টেক্সট বক্স এ DOM লেখা থাকে তাহলে ডিসকাউন্ট কাজ করবে। প্রাইস ৩০% কমবে। আর যদি DOM না লিখে অন্য কিছু লিখে। যেমন ধরো dom বা drum বা অন্য কিছু। তাহলে ডিসকাউন্ট কাজ হবে না। */
// document.getElementById('discount-btn').addEventListener('click', function () {
//     const outputValue = document.getElementById('output-value')
//     const outputInnerText = outputValue.innerText

//     const inputValue = document.getElementById('inputCode').value
//     const outputTotal = Number(outputInnerText) - ((Number(outputInnerText) * 30) / 100)
//     // outputValue.innerText = outputTotal
//     if (inputValue == 'DOM') {
//         outputValue.innerText = `${outputTotal} With 30% discount`
//     }
// })
































// /* ==========================================================================
// ============================== Conceptual Session (17.8.2022) ==============================
// ========================================================================== */
// let carObject = {
//     vehicle: "Car",
//     imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
//     description: 'Lorem, ipsum dolor sit amet consectb tenetur fuga corrupti sapiente laboriosam.',
//     farePerKilo: 3,
//     capacity: 4
// }
// let busObject = {
//     vehicle: "Bus",
//     imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//     description: 'Lorem, ipsum dolor sit amet consectb tenetur fuga corrupti sapiente laboriosam.',
//     farePerKilo: 2,
//     capacity: 50
// }

// let bikeObject = {
//     vehicle: "Bike",
//     imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60',
//     description: 'Lorem, ipsum dolor sit amet consectb tenetur fuga corrupti sapiente laboriosam.',
//     farePerKilo: 5,
//     capacity: 2
// }

// function services(service) {
//     const cardSection = document.getElementById('card-section')



//     const cardDiv = document.createElement('div')
//     cardDiv.innerHTML = `
//         <div class="w-3/4 mx-auto bg-white rounded-md mt-5 p-2 flex items-center border">
//             <div class="w-1/3">
//                 <img src="${service.imageUrl}"
//                     alt="">
//             </div>
//             <div class="w-2/3 pl-3">
//                 <h4 class="text-2xl font-semibold">${service.vehicle}</h4>
//                 <p class="text-sm">${service.description}</p>
//                 <div class="pl-1">
//                     <span class="text-sm text-gray-500">Fare per kilo : ${service.farePerKilo}</span>
//                     <span class="text-sm text-gray-500 pl-5">Capacity : ${service.capacity}</span>
//                 </div>
//                 <button id="modal-opening-btn" class="modal-opening-btn bg-blue-600 hover:bg-blue-700 text-white rounded px-2 py-1 " type="button">Book Now</button>
//             </div>
//         </div>
//     `

//     cardSection.appendChild(cardDiv)
// }
// services(carObject)
// services(busObject)
// services(bikeObject)



// const modalBtns = document.getElementsByClassName('modal-opening-btn')
// for (const modalBtn of modalBtns) {
//     modalBtn.addEventListener('click', function () {
//         document.getElementById('defaultModal').style.display = 'block'
//     })
// }

// document.getElementById('minimize-btn').addEventListener('click', function () {
//     document.getElementById('defaultModal').style.display = 'none'
// })



























/* ==========================================================================
================================= Module 30 ================================
========================================================================== */

// // Practice problem 1.1
// const arrowFunc = (a, b, c) => a * b * c
// console.log(arrowFunc(2, 3, 4))





// // Practice problem 1.2
// const threeLines = `I am a web developer.
// I love to code.
// I love to eat biryani.
// `
// console.log(threeLines)





// // Practice problem 1.3
// const twoPara = (a, b = 5) => `${a} ${b}`
// console.log(twoPara(3))





// // Practice problem 2
// const friends = ['Abul', 'Babul', 'Cabul', 'Dabul', 'Ebul']
// let newArray = []
// // for (let i = 0; i < friends.length; i++) {
// //     if (friends[i].length % 2 == 0) {
// //         newArray.push(friends[i])
// //     }
// // }
// // console.log(newArray)


// const friendFunc = (friendsArray) => friendsArray.forEach(element => {
//     if (element.length % 2 == 0) {
//         newArray.push(element)
//     }
// });
// friendFunc(friends)
// console.log(newArray)       // ['Abul', 'Ebul']




// // Practice problem 3
// const numbers = [1, 2, 3, 4, 5, 6, 7]
// let sum = 0
// const square = (nums) => nums.forEach(element => {
//     sum += Math.pow(element, 2)
// })
// square(numbers)
// console.log(sum)    // 140 = Sum of all elements square




// // Practice problem 4
// const arr1 = [3, 4, 9, 5]
// const arr2 = [6, 7, 8, 1, 2]
// const newArray = [...arr1, ...arr2]
// const maxNum = (array) => Math.max(...array)
// console.log(maxNum(newArray))
































/* ==========================================================================
================================= Module 31 ================================
========================================================================== */

// /* 31-(? - Nested object optional chaining) */
// const user = {
//     id: 5220,
//     name: 'Abul Miah',
//     address: {
//         street: {
//             first: '35/A Kochukhet lane',
//             second: 'third floor',
//             thrid: 'left side'
//         }
//     }
// }
// const value = user.address?.street?.second
// console.log(value)




/* Array map */
// const doubleIt = [1, 2, 3, 4, 5, 6, 7].map(x => x * 2)
// console.log(doubleIt)



/* Map string array */
// const products = [
//     { id: 1, name: 'laptop', price: 45000 },
//     { id: 2, name: 'mobile', price: 35000 },
//     { id: 3, name: 'watch', price: 27000 },
//     { id: 4, name: 'tablet', price: 12000 }
// ]
// const product = products.map(x => console.log(x.name))
// products.forEach(x => console.log(x[0]))




// const friends = ['Abul Chowdhury', 'Babul', 'Cabul', 'Dabul', 'Ebul']
// friends.forEach(x => console.log(x))
// console.log(forEachMap)



// [1, 2, 3, 4, 5, 6, 7].forEach(x => x + 1)
// console.log(add)



// const student = {
//     name: 'Abul',
//     age: 10,
//     class: 'Ten',
//     marks: {
//         math: 78,
//         physics: 85,
//         chemistry: 65
//     }
// }
// const subject = 'physics'
// const subjectMarks = student.marks[subject]     // 85
// const subjectMark = student.marks.subject       // undefined
// console.log(subjectMark)








// class Team {
//     name;
//     designation = 'Web Course Instructor'
//     team = 'web team'
//     location;
//     constructor(name, location) {
//         this.name = name;
//         this.location = location;
//     }
// }


// class Instructor extends Team {
//     startSupportSession(time) {             // like a function
//         console.log(`Start the support session at ${time}`)
//     }
//     constructor(name, location) {
//         super(name, location)
//     }
//     provideFeedback() {
//         console.log(`${this.name} thank you for your feedback.`)
//     }
// }



// class Developer extends Team {
//     startSupportSession(time) {             // like a function
//         console.log(`Start the support session at ${time}`)
//     }
//     constructor(name, location, tech) {
//         super(name, location)
//         this.tech = tech;
//     }
//     provideFeedback() {
//         console.log(`${this.name} thank you for your feedback.`)
//     }
// }
// const cabul = new Developer('cabul', 'Chattogram', 'JavaScript')
// console.log(cabul)
// cabul.startSupportSession('9.00 PM')    // Start the support session at 9.00 PM
// cabul.provideFeedback()










// /* Practice Problem 1 */
// const numbers = [1, 3, 5, 7, 9]
// const newArray = []
// for (let number of numbers) {
//     const newNumber = number + 1
//     newArray.push(newNumber)
// }
// console.log(newArray)     // [2, 4, 6, 8, 10]


// const arrayMap = numbers.map(x => x + 1)
// console.log(arrayMap)       // [2, 4, 6, 8, 10]




// /* Practice Problem 2 */
// const numbers = [33, 50, 78, 90, 101, 30]
// const filterNum = numbers.filter(x => x % 10 == 0)
// console.log(filterNum)      // [50, 90, 30]




// /* Practice Problem 3 */
// const numbers = [33, 50, 78, 90, 101, 30]
// const findNum = numbers.find(x => x % 10 == 0)
// console.log(findNum)    // 50



// /* Practice Problem 4 */
// const numbers = [1, 9, 17, 22]
// let sum = 0
// for (let number of numbers) {
//     sum += number
// }
// console.log(sum)        // 49



// const add = numbers.reduce((x, y) => x + y, 0)
// console.log(add)





// /* Practice Problem 5 */
// const people = [
//     { name: 'Meena', age: 20 },
//     { name: 'Rina', age: 15 },
//     { name: 'Suchorita', age: 22 },
// ]
// // const sumOfAge = people.map(x => x.age)
// // let sum = 0;
// // for (let num of sumOfAge) {
// //     sum += num
// // }
// // console.log(sum)


// const reduceNum = people.reduce((x, y) => {
//     return x + y.age
// }, 0)
// console.log(reduceNum)      // 57




// const obj = {
//     location: [
//         {
//             latitude: '34.5, 37.8',
//             longitude: '34.5, 37.8',
//             city: 'Hyderabad',
//             country: 'India'
//         }
//     ]
// }
// console.log(obj.location[0].city)   // Hyderabad

// const { city } = obj.location[0]
// console.log(city)                   // Hyderabad





/*
Introductrion to es6
1. var let const
2. scopes in js             // variable diclear global/function
3.templates string          // `${}`
4. ternary operator         // (condition) ? true : false
5. Array Spreading          // (...numbers)  // x = [1,2,3] \n y = [...x]
6. Object Spreading
7. Object Accessing         // student.education.subjects[2].name
8. Optionsl Chaining of Object  // student?.education?.subjects[2]?.name
9. Arrow function               // const arrowFunc = (x, y) => x * y
10. Function with default parameters    // const arrowFunc = (x, y = 0) => x * y
11. Arrow ForEach, Map, Filter, Find, Function

        // ForEach: numbers.forEach(item => console.log(item))
        // Map:     const arrayMap = numbers.map(item => item * 2)
        // Find:    numbers.find(item => item > 5)      // ans only one
        // Filter:  numbers.filter(item => item > 5)    // all nums

// Problem Solving
1. Find SCIC student using filter
2. Find Stable Jamai using Filter Method

// Advance
1. API Array Access

// If (dhorjo && somoy) duitai thakle
1. Convert Array of objects To Single Object using map or forEach
2. Array Reduce Method
*/




// /* Ternary Operator  */
// const isStudent = false;
// const result = (isStudent == true) ? 'He is a student' : 'I don\'t know him.'
// console.log(result)



// /* Spread Array */
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const [a, b, ...rest] = number;
// console.log(rest)


// /* Can Do This */
// const x = [1, 2, 3]
// const y = [...x]

// x.push(33)
// y.push(44)

// console.log(x)
// console.log(y)



// /* Object Spreading */
// const person = {
//     name: 'Abul',
//     age: 45,
//     phone: '01465665465',
//     p: [1, 3, 5, 7]
// }
// const { name: myName, age, p } = person    // re assign for name
// console.log(myName, age, p)



// /* Chaining of Object */
// const student = {
//     name: 'Abul',
//     education: {
//         subjects: [
//             { name: 'Physics', result: 95 },
//             { name: 'Chemistry', result: 73 },
//             { name: 'Math', result: 73 }
//         ]
//     }
// }
// console.log(student?.education?.subjects[2]?.name)





/* Find SCIC selected students */
// const students = [
//         { name: "mehedy bro", email: 'mehedy@gamil.com', avg: 56, fiftyPercent: true },
//         { name: "rokib bro", email: 'rokib@gamil.com', avg: 57, fiftyPercent: false },
//         { name: "sakib bro", email: 'sakib@gamil.com', avg: 42, fiftyPercent: false },
//         { name: "sojib bro", email: 'sojib@gamil.com', avg: 52, fiftyPercent: true },
//         { name: "sunny bro", email: 'sunny@gamil.com', avg: 32, fiftyPercent: false },
//         { name: "saki bro", email: 'sunny@gamil.com', avg: 37, fiftyPercent: true },
//         { name: "jackie bro", email: 'jackie@gamil.com', avg: 57, fiftyPercent: true }
// ]

// const filterStudents = students.filter(std => std.avg >= 50 && std.fiftyPercent == true)
// filterStudents.map(student => console.log(student.name))    // mehedy bro \n sojib bro \n jackie bro

// const scicStd = filterStudents.map(student => student.name)
// console.log(scicStd)            // ['mehedy bro', 'sojib bro', 'jackie bro']

// filterStudents.map(student => {
//         const { name, email } = student
//         console.log(name, email)
// })              // mehedy bro mehedy@gamil.com \n sojib bro sojib@gamil.com \n jackie bro jackie@gamil.com





// /* Find Jamai */
// const men = [
//         { Name: "Abul", job: 'sorkari', salary: 17000 },
//         { Name: "Babul", job: 'besorkari', salary: 25000 },
//         { Name: "Kabul", job: 'sorkari', salary: 21000 },
//         { Name: "Habul", job: 'besorkari', salary: 47000 },
//         { Name: "Jabul", job: 'sorkari', salary: 23000 },
//         { Name: "Mabul", job: 'besorkari', salary: 55000 }
// ]

// //  find stable jamai .. sorkari + 20000   or    besorkari + 40000

// const juggoPatro = men.filter(x => (x.job == 'sorkari' && x.salary >= 20000) || (x.job == 'besorkari' && x.salary >= 4000))
// juggoPatro.map(x => console.log(x.Name))






// /* accessAPI */
// const Students = [
//         {
//                 student1: {
//                         name: 'abul',
//                         age: '17',
//                         isMale: true,
//                         education: {
//                                 class: 7,
//                                 subjects: ['bangla', 'english', 'math'],
//                                 school: 'durgapur high school',
//                                 marks: {
//                                         bangla: 35,
//                                         english: 23,
//                                         math: 36
//                                 }
//                         }
//                 },
//                 student2: {
//                         name: 'jarina',
//                         age: '19',
//                         isMale: false,
//                         education: {
//                                 class: 6,
//                                 subjects: ['bangla', 'english', 'math'],
//                                 school: 'Rajshahi high school',
//                                 marks: {
//                                         bangla: 95,
//                                         english: 73,
//                                         math: 36
//                                 }
//                         }
//                 },
//                 student3: {
//                         name: 'habul',
//                         age: '15',
//                         isMale: true,
//                         education: {
//                                 class: 9,
//                                 subjects: ['bangla', 'english', 'math'],
//                                 school: 'Dhaka high school',
//                                 marks: {
//                                         bangla: 75,
//                                         english: 53,
//                                         math: 96
//                                 },
//                         }
//                 }
//         }
// ]
// // console.log(Students[0].student1.education.marks.bangla)
// Students.map(student => {
//         for (let i in student) {
//                 const { name, age, isMale, education } = student[i]
//                 const { subjects, school, marks } = education
//                 const { bangla, english, math } = marks

//                 const information = `
//                         Name: ${name}
//                         Age: ${age}
//                         Gender: ${isMale == true ? 'Male' : 'Female'}
//                         My subjects are: ${subjects.map(sub => sub)}
//                         My marks in bangla is: ${bangla}
//                         My marks in english is: ${english}
//                         My marks in math is: ${math}
//                 `
//                 console.log(information)
//         }
// })







// /* Convert To Single Object */
// const Persons = [
//         { id: 'ID01', name: "abul vai", age: 23 },
//         { id: 'ID02', name: "babul vai", age: 43 },
//         { id: 'ID03', name: "habul vai", age: 54 },
//         { id: 'ID04', name: "jabul vai", age: 29 }
// ]

// // expected output
// // {
// //     ID01:"abul vai",
// //      ID02: 'babul vai',
// //      ID03: 'habul vai',
// //      ID04: 'jabul vai'
// // }

// const info = {}
// Persons.map(person => {
//         info[person.id] = person.name
// })
// console.log(info)







// /* Reduce: Sum of every numbers from array */
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.reduce((x, y) => x + y, 0)
// console.log(result)

















/* ==========================================================================
================================= Module 32 ================================
========================================================================== */

/* Video 2 */
// const student = { name: "mehedy bro", email: 'mehedy@gamil.com', avg: 56, fiftyPercent: true }
// console.log(JSON.stringify(student))





// JSON.stringify()			// It will convert Object to String
// JSON.parse()				// It will convert String to Object
// const people = {
//         name: 'Abul',
//         address: {
//                 street: 'baker street',
//                 city: 'janina',
//                 country: 'oyta o jani na'
//         },
//         products: ['laptop', 'mobile', 'tab', 'keyboard'],
//         isOpen: true,
//         revenue: 4500
// }
// // console.log(people)                     // Output as an object
// const peopleJSON = JSON.stringify(people)
// // console.log(peopleJSON)                 // Output as string
// const peopleJSONParse = JSON.parse(peopleJSON)
// console.log(peopleJSONParse)            // Output as an object



/* Other concept see the (explore-api) folder */