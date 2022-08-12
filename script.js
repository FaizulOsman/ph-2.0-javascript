/*========================================================
=================== Module 16 - JavaScript ===============
========================================================*/
// // Practice Problem 1
// var monGaveToHarry = 1000;
// var priceOfOrange = 700;
// var shopkeeperWillReturn = monGaveToHarry - priceOfOrange;
// console.log("Shopkeeper will return: " + shopkeeperWillReturn + " Tk");



// Practice Problem 2
// var math = 75.25;
// var bio = 65;
// var che = 80;
// var phy = 35.45;
// var ban = 99.50;
// var sum = math + bio + che + phy + ban;
// var average = sum / 5;
// average = average.toFixed(2);
// console.log(average);



// Practice Problem 3
// var first = "I am going to be";
// var second = "an awesome web developer.";
// console.log(first + " " + second);



// Practice Problem 4
// var num = 119;
// console.log(num % 5);






/*========================================================
=================== Module 17 - JavaScript ===============
========================================================*/

/* ========== 17-6 (if-else, comparison) ========== */
/*var a = 100;
var b = 80;
if (a > b) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}*/



/* ========== 17-7 (if - else if - else) ========== */
// var isGraduated = false;
// var salary = 40000;
// var cars = 2;

// if (isGraduated === true && salary >= 50000 && cars >= 1) {
//     console.log("Amare thekai k?");
// } else if (isGraduated === true || salary >= 50000 || cars >= 1) {
//     console.log("Eso prem kori.");
// } else {
//     console.log("Tur kopale biye nai.");
// }



/* ========== 17-8 (Musti Stage condition & nested condition) ========== */
// var money = 10;
// var danish = 45;
// var butterBon = 35;
// var toastBiscuit = 20;

// if (money > danish) {
//     console.log("Danish r cha dao.")
// } else if (money > butterBon) {
//     console.log("Butter bon r cha dao.")
// } else if (money > toastBiscuit) {
//     console.log("Toast Biscuit r cha dao.")
// } else {
//     console.log("Khali cha e shaster jonno valo.")
// }


// var math = true;
// var geometry = false;

// if (math == true) {
//     if (geometry == true) {
//         console.log("You can be anything.")
//     } else {
//         console.log("You can be a mathematician.")
//     }
// } else {
//     console.log("You can't be anything.")
// }






/* ========== 17-9 () ========== */
/*
var destination = ['sajek', 'coxsbazar', 'nepal', 'singapur'];
console.log(destination[2]);                    // will show 3rd element

destination[2] = "thailand";                    // it will set new element in 3rd array
console.log(destination[2]);

var index = destination.indexOf('singapur');    // Will show index of this element in array
console.log(index);

destination.push("mulasia");                    // Will add new element in last array
console.log(destination)

destination.pop();                              // Will remove last element from array
console.log(destination)
*/



/* ========== 17-9 (practice problem 1) ========== */
// var fruits = ['Apple', 'Banana', 'Orange'];
// var bananaIndex = fruits.indexOf("Banana");
// console.log(bananaIndex);

// fruits[bananaIndex] = "Mango";
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.push("Watermelon");
// console.log(fruits);





/* ========== 17-9 (practice problem 2) ========== */
// function grades(number) {
//     let result = ''
//     if (100 >= number && number >= 80) {
//         result = "got A"
//     } else if (79 >= number && number >= 60) {
//         result = "got B"
//     } else if (59 >= number && number >= 50) {
//         result = "got C"
//     } else if (49 >= number && number >= 40) {
//         result = "got D"
//     } else if (39 >= number && number >= 0) {
//         result = "got F"
//     } else {
//         result = "Invalid number"
//     }
//     return result
// }
// console.log("I", grades(85))
// console.log("Tom", grades(66))
// console.log("Jane", grades(95))
// console.log("Peter", grades(56))
// console.log("john", grades(40))





/* ========== 17-9 (practice problem 2) ========== */
// var signal = 'yellow';
// if (signal == "red") {
//     console.log("Danger");
// } else if (signal == "yellow") {
//     console.log("Stop");
// } else if (signal == "green") {
//     console.log("Go");
// } else {
//     console.log("wrong input")
// }






/* ========== 17-9 (practice problem 3) ========== */
// var a = 13;
// var b = 79;
// var c = 45;

// if (a > b) {
//     if (a > c) {
//         console.log("Largest Number Is: " + a);
//     } else {
//         console.log("Largest Number Is: " + c);
//     }
// } else {
//     console.log("Largest Number Is: " + b);
// }




/* ========== 17-9 (practice problem 3) ========== */
// var a = 9;
// var b = 8;
// var c = 9;

// if (a == b || a == c || b == c) {
//     console.log("This is an Isosceles.")
// } else {
//     console.log("This is not an Isosceles.")
// }




/* ========== 17-9 (practice problem 4) ========== */
// function grades(number) {
//     let result = ''
//     if (100 >= number && number >= 90) {
//         result = "got A+"
//     } else if (90 > number && number >= 80) {
//         result = "got A"
//     } else if (80 > number && number > 70) {
//         result = "got B"
//     } else if (70 > number && number >= 60) {
//         result = "got C"
//     } else if (60 > number && number >= 50) {
//         result = "got D"
//     } else if (50 > number && number >= 0) {
//         result = "got F"
//     } else {
//         result = "Invalid number"
//     }
//     return result
// }
// console.log("আলিয়া", grades(95))		// আলিয়া got A+
// console.log("ডালিয়া", grades(66))		// ডালিয়া got C
// console.log("সালিয়া", grades(80))		// সালিয়া got A
// console.log("মালিয়া", grades(59))		// মালিয়া got D
// console.log("লিলিয়া", grades(47))		// লিলিয়া got F
// console.log("জ্বালাইয়া", grades(77))		// জ্বালাইয়া got B




/* ========== 17-9 (practice problem 5) ========== */
// function dailyWrok(works) {
//     for (let j = 1; j <= 10; j++) {
//         console.log("Section No.", j)
//         for (let i = 0; i < works.length; i++) {
//             let element = works[i]
//             console.log(i + 1 + '.', element)
//         }
//     }
// }
// let myDailyWorks = ['Unlock module at 8 PM', 'Complete watching video as fast as you can', 'Keep notes with watching video', 'Practice entire module after completing module', 'Join the support session when you can not understand something']
// dailyWrok(myDailyWorks)







/*========================================================
=================== Module 18 - JavaScript ===============
========================================================*/


/* ================ 18-2 (while loop) ================ */
// var num = 0;
// while (num < 7) {
//     console.log(num);
//     num++;
// }




/* ================ 18-3 (Even & Odd number 1 to 20) ================ */
// var num = 0;
// while (num <= 20) {
//     if (num % 2 == 0) {
//         console.log(num);
//     }
//     num++;
// }


/* ----- (even number 1 to 20) ----- */
// var num = 0;
// while (num <= 20) {
//     console.log(num);
//     num += 2;
// }



/* ----- (Odd number 1 to 20) ----- */
// var num = 1;
// while (num <= 20) {
//     console.log(num);
//     num += 2;
// }




/* ================ 18-4 (For loop) ================ */
// for (var i = 1; i < 7; i++) {
//     console.log(i);
// }




/* ----- (even number 1 to 20) ----- */
// for (var i = 0; i < 20; i += 2) {
//     console.log(i)
// }




/* ----- (even number 1 to 20) ----- */
// for (var i = 1; i < 20; i += 2) {
//     console.log(i)
// }





/* ================ 18-5 (Run a loop for each element of an array) ================ */
/* ----- (Output: Every element of this array) ----- */
// var numbers = [10, 20, 30, 40, 50];
// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }






/* ================ 18-6 (Break and Continue) ================ */
// for (var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i >= 10) {
//         break;
//     }
// }



/* ----- (loop will break when value is d) ----- */
// var items = ['a', 'b', 'c', 'd', 'e']
// for (var i = 0; i < items.length; i++) {
//     if (items[i] == "d") {
//         break;
//     }
//     console.log(items[i]);
// }


/* ----- (loop will skip when value is ">=50") ----- */
// var items = [10, 50, 70, 30, 20];
// for (var i = 0; i < items.length; i++) {
//     if (items[i] >= 50) {
//         continue;
//     }
//     console.log(items[i]);
// }




/* ================ 18-7 (While and For Loop: Reverse way) ================ */
// var num = 10;
// while (num > 0) {
//     console.log(num);
//     num--;
// }


// for (var i = 10; i > 0; i--) {
//     console.log(i);
// }





/* ================ Practice problem from Quiz ================ */

/* ----- Output: 5 ----- */
// var i = 0;
// for (i = 0; i < 5; i++) {};
// console.log(i);




/* ----- Output: 13 & 14 ----- */
// var marks = [13, 15, 14, 20, 18];
// for (var i = 0; i < marks.length; i++) {
//     if (marks[i] >= 15) {
//         continue;
//     }
//     console.log(marks[i]);
// };





/* ----- Output: Every string with serial number ----- */
// var strings = ["Abul", "Babul", "Cabul", "Dabul", "Ebul"];
// for (var i = 1; i <= strings.length; i++) {
//     var element = strings[i - 1];
//     console.log(i + " " + element);
// }





/* ----- Output: Names will print 5 times ----- */
// var names = ["Abul", "Babul", "Cabul"];
// for (var j = 0; j < 5; j++) {
//     console.log(j + 1);
//     for (var i = 0; i < names.length; i++) {
//         var myDayGoing = names[i];
//         if (myDayGoing === "Cabul") {
//             console.log("Cabul is not allowed")
//             continue;
//         }
//         console.log(myDayGoing);
//     }
// }

















/*========================================================
=================== Module 18.5 - JavaScript ===============
========================================================*/

/* ----- Undefined -----*/
// let x;
// console.log(x);



/* ----- তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। ----- */
// var devices = ["mac", "gaming pc", "lenovo yoga", "old pc", "mobile"]
// var money = 10000;
// if (money > 80000) {
//     console.log("I will buy " + devices[0]);
// } else if (money > 60000) {
//     console.log("I will buy " + devices[1]);
// } else if (money > 40000) {
//     console.log("I will buy " + devices[2]);
// } else if (money > 20000) {
//     console.log("I will buy " + devices[3]);
// } else {
//     console.log(devices[4] + " is Enough for me");
// }




/* ----- আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। ----- */
// for (var i = 0; i < 39; i++) {
//     console.log("আসকে আমার মন ভালো নেই");
// }



/* ----- একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও? ----- */
// for (var i = 58; i <= 98; i++) {
//     console.log(i);
// }



/* ----- একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  ----- */
// for (var i = 412; i <= 456; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }



/* ----- একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও ----- */
// for (var i = 581; i <= 623; i += 2) {
//     console.log(i);
// }


/* ----- তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লপু দিয়ে সেই array এর সব উপাদানকে আউটপুট হিসেবে দেখাও।  ----- */
// let whatILearn = ['HTML', "CSS", "Bootstrap", "Tailwind"]
// for (let i = 0; i < whatILearn.length; i++) {
//     console.log(whatILearn[i])
// }


/* ----- তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও  ----- */
// var array = ["Chaina", "Nokia", "Symphony", "Samsung"];
// var i = 0;
// while (i < array.length) {
//     console.log(array[i])
//     i++
// }



/* ----- একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও ----- */
// for (var i = 30; i <= 86; i++) {
//     if (i == 44) {
//         break;
//     }
//     console.log(i)
// }



/* ----- তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। ----- */
// var booksPrice = [100, 120, 180, 250, 160, 200, 150, 210, 140];
// for (var i = 0; i < booksPrice.length; i++) {
//     if (booksPrice[i] > 200) {
//         continue;
//     }
//     console.log(booksPrice[i]);
// }























/*========================================================
=================== Module 19 - JavaScript ===============
========================================================*/

/* -----  19.2 (Function: Declaration) ----- */
// function buySingara(money) {
//     console.log(money, "Tk prottek Singara")
// }
// var price = 5;
// buySingara(price);



/* -----  19.3 (Function: Parameter) ----- */
// function add(x, y) {
//     console.log("Sum is:", x + y)
// }
// add(7, 5);





/* -----  19.4 (Function: Return) ----- */
// function add(x, y) {
//     var sum = x + y;
//     return sum;
// }
// var total = add(7, 5);
// console.log("Total:", total);


// function bringSingara(money) {
//     var singaraPrice = 5;
//     var quantity = money / singaraPrice;
//     return quantity;
// }
// var price = 200;
// var singaras = bringSingara(price);
// console.log(singaras);






/* -----  19.5 (Function: Return) ----- */
// function assaignmentMark(ass1, ass2, ass3) {
//     const total = ass1 + ass2 + ass3;
//     const average = total / assaignmentMark.length;
//     return average;
// }
// var marks = [60, 58, 60];
// var averageMark = assaignmentMark(marks[0], marks[1], marks[2]);
// console.log(averageMark);


// function add(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
// }
// var result1 = add(7, 5);
// var result2 = add(8, 6);
// var total = add(result1, result2);
// console.log(total);





/* -----  19.6 (Object) ----- */
// var student = {
//     id: 15,
//     name: "Abul",
//     class: 8,
//     marks: 98
// };
// console.log(student);
// console.log(student.marks);

// student.marks = 100;
// console.log(student)




/* -----  19.7 (Object: multiple ways to get and set object property) ----- */

// var student = { id: 15, name: "Abul", class: 8, marks: 98 };
// var whichClass = student["class"];
// console.log(whichClass);                    // 8

// var properties = Object.keys(student);      // ['id', 'name', 'class', 'marks']
// console.log(properties);
// console.log(properties[1]);                 // name

// var values = Object.values(student);        // [15, 'Abul', 8, 98]
// console.log(values);
// console.log(values[1]);                     // "Abul"

// var propertyName = "name";
// var propertValue = student[propertyName];
// console.log(propertyName, propertValue);    // name Abul

// /* Set property value */
// student.name = "Babul";                     // "Babul"
// student["name"] = "Cabul";                  // "Cabul"

// var propertyName = "name";
// student[propertyName] = "Dabul";            // "Dabul"
// console.log(student);






/* -----  19.8 (Looping through an Object) ----- */
// var student = { id: 15, name: "Abul", class: 8, marks: 98 };
// var keys = Object.keys(student);
// var values = Object.values(student);


// for (var i = 0; i < values.length; i++) {
//     console.log(keys[i], values[i])
// }       // id 15 name Abul class 8 marks 98

// for (var propertyName in student) {
//     var values = student[propertyName]
//     console.log(propertyName, values);
// }       // id 15 name Abul class 8 marks 98





/* -----  19.8 (Switch) ----- */
// const color = 'black';
// switch (color) {
//     case 'green':
//         console.log("This is green color.")
//         break;
//     case 'blue':
//         console.log("This is blue color.")
//         break;
//     case 'red':
//         console.log("This is red color.")
//         break;
//     case 'yellow':
//         console.log("This is yellow color.")
//         break;
//     case 'black':
//         console.log("This is black color.")
//         break;
//     default:
//         console.log("This color in not here.")
// }






/* ---  19.9 Practise Task 1 --- */
/* Write a function called foo() which prints “foo” and a function called bar()
which prints “bar”. Call function bar() in the foo() function after printing. What
will be the output? Now call the foo() to see the output.
*/
// function foo() {
//     console.log("Foo");
//     bar();
// }
// function bar() {
//     console.log("Bar")
// }
// foo()



/* ---  19.9 Practise Task 2 --- */
/* Write a function called make_avg() which will take three integers and return the average of those values. */
// function make_avg(num1, num2, num3) {
//     var sum = num1 + num2 + num3;
//     var avg = sum / 3;
//     return avg;
// }
// var average = make_avg(15, 14, 16)
// console.log(average)



/* ---  19.9 Practise Task 3 ---*/
/* Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */
// function make_avg(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         var sum = numbers[i] + sum;
//     }
//     return sum / numbers.length;
// }
// const numbers = [10, 20, 30, 40, 50];
// console.log(make_avg(numbers));



/* ---  19.9 Practise Task 4 ---*/
// /* ---  Has return + Has parameter ---*/
// function odd_even(num) {
//     if (num % 2 == 0) {
//         return "This is an even number";
//     } else {
//         return "This is an odd number."
//     }
// }
// console.log(odd_even(92))


// /* ---  No return + Has parameter ---*/
// function odd_even(num) {
//     if (num % 2 == 0) {
//         console.log("This is an even number");
//     } else {
//         console.log("This is an odd number.");
//     }
// }
// odd_even(92)


// /* ---  No return + No parameter ---*/
// function odd_even() {
//     let number = 93
//     console.log(number, "is an odd number.");
// }
// odd_even()


// /* ---  Has return + no parameter ---*/
// function odd_even() {
//     let number = 93;
//     return "93 is an odd number.";
// }
// console.log(odd_even());



/* ---  19.9 Practise Task 5 ---*/
/* You are in a hurry to go to your school on time. But when you are crossing
the road, the traffic signal is red coloured. In this situation, if you try to cross the
road, you may be in danger.If you notice a yellow coloured traffic signal, you
should stop. If you notice a green coloured traffic signal, you should cross the
road. So write a JS code, where there is a variable called signal. Its value can
be green, yellow or red & we will get different activities as output depending on
the variable. So, hurry up.
*/
// var signal = "green";
// switch (signal) {
//     case "red":
//         console.log("Danger");
//         break;
//     case "yellow":
//         console.log("Stop");
//         break;
//     case "green":
//         console.log("Cross the road");
//         break;
//     default:
//         console.log("Wrong input");
// }



/* ---  19.9 (Extra প্রাকটিস চ্যালেঞ্জ 1 = 13 er namata) ---*/
// function namata(num) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(num, "*", i, "=", num * i);
//     }
// }
// namata(13);




// /* একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে। */
// function toLowerCase(string) {
//     return string.toLowerCase()
// }
// let text = 'O bondhu Lal Gulapi'
// console.log(toLowerCase(text))



/* fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দইু অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে । যে মন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। */
// function fullName(first, last) {
//     return first + last
// }
// let firstName = "Muhammod Shahidullah "
// let secondName = "Kaisar"
// console.log(fullName(firstName, secondName))









/*========================================================
=================== Module 20 - JavaScript ===============
========================================================*/

/* -----  20.5 (Leap Year Check) (Has return + Has parameter) ----- */
// function isLeapYear(year) {
//     if (year % 4 == 0) {
//         if (year % 100 == 0 && year % 400 != 0) {
//             return console.log("Not Leap Year");
//         } else {
//             return console.log("Leap Year");
//         }
//     } else {
//         return console.log("Not Leap Year");
//     }
// }
// isLeapYear(1700);




/* -----  20.6 (Check Odd Even) (No return + Has parameter)----- */
// function checkOddEven(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             console.log(numbers[i], "is odd")
//         } else {
//             console.log(numbers[i], "is even")
//         }
//     }
// }
// const myNumbers = [10, 7, 34, 23, 45, 3]
// checkOddEven(myNumbers)



/* -----  20.6 (Keep Odd numbers in array) ----- */
// function getOddNumbers(numbers) {
//     var oddNumbers = []
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             oddNumbers.push(numbers[i])
//         }
//     }
//     return oddNumbers
// }
// const myNumbers = [10, 7, 34, 23, 45, 4, 3]
// console.log(getOddNumbers(myNumbers))





/* -----  20.7 (Adding numbers 1 to 10) ----- */
// var sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum)




/* -----  20.7 (Adding numbers 1 to 100) ----- */
// function addingNumbers(a, b) {
//     var sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(addingNumbers(1, 100))



/* -----  20.7 (Factorial) ----- */
// function factorial(number) {
//     var result = 1;
//     for (let i = 1; i <= number; i++) {
//         result *= i
//     }
//     return result;
// }
// console.log(factorial(5))



/* -----  20 (Practice Problem 2 (Leap year check)) ----- */
// function findLeapYear(year) {
//     let newArray = []
//     for (let i = 0; i < year.length; i++) {
//         if (year[i] % 4 == 0) {
//             newArray.push(year[i])
//         }
//     }
//     return newArray
// }
// const years = [2023, 2024, 2025, 2028, 2030];
// console.log(findLeapYear(years))


// function findLeapYear(year) {
//     for (let i = 0; i < year.length; i++) {
//         if (year[i] % 4 == 0) {
//             if (year[i] % 100 == 0 && year[i] % 400 != 0) {
//                 console.log(year[i], "is not a Leap year.")
//             } else {
//                 console.log(year[i], "is a Leap year.")
//             }
//         } else {
//             console.log(year[i], "is not a Leap year.")
//         }
//     }
// }
// const years = [2023, 2024, 2025, 2028, 2030, 1700, 2000];
// findLeapYear(years)



// function isLeapYear(year) {
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         return "leap year"
//     } else {
//         return "not a leap year"
//     }
// }
// console.log(isLeapYear(1900))




/* -----  20 (Practice Problem 3 (Sum of the Odd numbers)) ----- */
// function findOddSum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             sum += numbers[i]
//         }
//     }
//     return sum;
// }
// const numArray = [5, 7, 8, 10, 45, 30]
// console.log(findOddSum(numArray))




/* একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-১০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো */
// function numSerial(num) {
//     let list = [1]
//     for (let j = 0; j < num.length; j++) {
//         for (let i = 0; i < num.length; i++) {
//             if (num[i] == list[j] + 1) {
//                 list.push(num[i])
//                 break;
//             }
//         }
//     }
//     console.log(list)
// }
// var numbers = [1, 6, 7, 8, 9, 3, 4, 11, 2, 5, 3, 5, 4, 10];
// numSerial(numbers)

/* Shortcut */
// var numbers = [1, 6, 7, 8, 9, 3, 4, 11, 2, 5, 3, 5, 4, 10];
// numbers.sort(function (a, b) { return a - b });
// console.log(numbers)




/*  ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো */
// function getNumber() {
//     for (let i = 1; i <= 50; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log(i)
//         }
//     }
// }
// getNumber()





/* এরে থেকে ৫ টা ফ্রেন্ড এর নাম এর মধ্যে বড়ো নাম কোন ফ্রেন্ড এর খুঁজে বের করা */
// function maxString(str) {
//     let strLen = str[0].length;
//     let largeStr = str[0];
//     for (let i = 1; i < str.length; i++) {
//         let newStr = str[i].length;
//         if (strLen < newStr) {
//             largeStr = str[i];
//             strLen = newStr;
//         }
//     }
//     console.log(largeStr)
// }
// var friendsArray = ["rahim", "karim", "abdul", "sadsd", "heroAlom", "sd", "sdf"];
// maxString(friendsArray);



/* এরে থেকে ডুপ্লিকেট নম্বর গুলা বাদ দিয়ে উনিক নম্বর গুলা বের করতে হবে */
// function uniqueNumbers(num) {
//     let uniqueList = []
//     for (let i = 0; i < num.length; i++) {
//         if (uniqueList.indexOf(num[i]) == -1) {
//             uniqueList.push(num[i])
//         }
//     }
//     console.log(uniqueList)
// }
// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// uniqueNumbers(numbers)




/* আরে থেকে সব থেকে বড়ো নম্বর কোনটা বের করো */
// function maxNum(numbers) {
//     console.log(Math.max(1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10))
// }
// maxNum()



/* সেলসিয়াস to ফারেনহাইট এ কনভার্ট */
// function celciusToFarenhite(input) {
//     var result = ((input * 9) / 5) + 32;
//     return result;
// }
// var value = celciusToFarenhite(5)
// console.log(value)



// /* সুদের হিসাব */
// function interest(percent, input) {
//     let result = (input * percent) / 100;
//     return result;
// }
// console.log('Interest is', interest(15, 500))



// /* Simple Interest: */
// function simpleInterest(p, r, t) {
//     let a = p * (1 + r * t)
//     return a;
// }
// console.log(simpleInterest(200, 0.2, 5))


// /* Compound Interest: */
// function compoundInterest(p, r, n, t) {
//     let ci = p * Math.pow((1 + (r / n)), n * t) - p;
//     return ci;
// }
// console.log(compoundInterest(1000, .08, 12, 1))





















/*========================================================
=================== Module 21 - JavaScript ===============
========================================================*/

/* -----  20.2 (includes, indexOf, startswith, endswith) ----- */
// let lyrics = 'O bondhu laL golapi, koy royla re, eso buke eso'
// let search = "Lal"
// console.log(lyrics.includes("golapi"))              // Search something include in lyric
// let lyricsLowerCase = lyrics.toLowerCase()          // Make LowerCase to lyric
// let searchLowerCase = search.toLowerCase()          // Make LowerCawe to search
// let doesExist = lyricsLowerCase.includes(searchLowerCase)
// console.log(doesExist)

// let isExist = lyrics.toLowerCase().includes(search.toLowerCase())   // Shortcut of include
// console.log(isExist)


// console.log(lyrics.indexOf("dhu"))              // 5
// console.log(lyrics.indexOf("Abuilla"))          // -1


// console.log(lyrics.startsWith("O"))             // true

// console.log(lyrics.endsWith("eso"))            // true
// console.log(lyrics.endsWith(".pdf"))




/* -----  20.3 (split, slice, substr, substring, concat, join) ----- */
// let lyrics = 'O bondhu laL golapi, koy royla re, eso buke eso'

// console.log(lyrics.split(' '))          // space gulak aladha korbo
// console.log(lyrics.split(','))          // comma gulak aladha korbo
// console.log(lyrics.split(''))           // letter gulak aladha korbo

// console.log(lyrics.slice(2, 8))         // bondhy = 3-8 er ag porjonto kete nibe
// console.log(lyrics.substring(2, 8))     // bondhy = 3-8 er ag porjonto kete nibe

// let lines = [
//     'O bondhu laL golapi',
//     'koy royla re',
//     'eso buke eso'
// ]s
// console.log(lines.join(". "))

// console.log(lyrics.concat(lines[0]))





/* -----  20.4 (Math, abs, pow, round, ceil, floor, random number) ----- */
// console.log(Math.pow(3, 4));        // power

// let num1 = 10;
// let num2 = 20;
// Math.abs(num1 - num2)               // 10 => gap = num1-num2 (Absolute difference)

// const num = 2.50
// console.log(Math.round(num))        // 3
// console.log(Math.ceil(num))         // 3 => convert to complete number
// console.log(Math.floor(num))        // 2 => convert to floor number

// console.log(Math.random() * 10)                 // Random number => 0 to 1
// console.log(Math.round(Math.random() * 6))      // Random number => 1 to 6

// console.log(Math.max(3, 5, 9, -2, 6, 1, 7))     // 9 => Maximun number
// console.log(Math.min(3, 5, 9, -2, 6, 1, 7))     // -2 => Minimum number

// console.log(Math.PI)     // 3.141592653589793 => Value of PI




/* -----  20.5 (Swap variable, swap without temp, destructing) ----- */
// let a = 10;
// let b = 20;

// /* Approach:1 (Temporary) */
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b)


// /* Approach:2 (Destructuring) */
// [a, b] = [b, a]
// console.log(a, b)


// // /* Approach:2 (Operation) */
// a = a + b
// b = a - b
// a = a - b
// console.log(a, b)




/* -----  20.6 (Check largest or smallest number) ----- */
// /* Largest Number */
// function maxNumber(num) {
//     if (num[0] > num[1]) {
//         if (num[0] > num[2]) {
//             console.log(num[0])
//         } else {
//             console.log(num[2])
//         }
//     } else {
//         console.log(num[1])
//     }
// }
// let numbersArray = [10, 30, 20];
// maxNumber(numbersArray)


// /* Largest Number (Shortcut) */
// console.log(Math.max(10, 30, 20))


// /* Smallest Number */
// function maxNumber(num) {
//     if (num[0] < num[1]) {
//         if (num[0] < num[2]) {
//             console.log(num[0])
//         } else {
//             console.log(num[2])
//         }
//     } else {
//         console.log(num[1])
//     }
// }
// let numbersArray = [20, -10, 30];
// maxNumber(numbersArray)

// /* Smallest Number (Shortcut) */
// console.log(Math.min(10, 30, 20))





/* -----  20.7 (Find max number in array) ----- */
// function maxInArray(numbers) {
//     let largestNumber = numbers[0]
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i]
//         if (element > largestNumber) {
//             largestNumber = element
//         }
//     }
//     return largestNumber;
// }
// let numbersArray = [20, 10, 50, 30, 40];
// console.log(maxInArray(numbersArray))






/* -----  20.8 (Reverse a string and Reverse word in a sentence) ----- */

// /* Reverse a String */
// function reverseString(text) {
//     let reversed = "";
//     for (let i = text.length - 1; i >= 0; i--) {
//         let element = text[i];
//         reversed += element;
//     }
//     return reversed;
// }
// let string = "I have a cat named Tommy.";
// console.log(reverseString(string))


// /* Reverse a Word */
// function reverseWord(text) {
//     let wordsArray = text.split(" ");
//     let reversed = [];
//     for (let i = wordsArray.length - 1; i >= 0; i--) {
//         let element = wordsArray[i];
//         reversed.push(element);
//     }
//     return reversed.join(" ");
// }
// let string = "I have a cat named Tommy";
// console.log(reverseWord(string))






/* -----  20.9 (Fibonacci) ----- */
// function fibonacci() {
//     let fiboSeries = [0, 1]
//     for (let i = 0; i < 10; i++) {
//         let element = fiboSeries[i] + fiboSeries[i + 1]
//         fiboSeries.push(element)
//     }
//     return fiboSeries;
// }
// console.log(fibonacci())


// let fibo = [0, 1];
// for (let i = 2; i < 12; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);





// /* -----  21 (Practice Problem 3 (Sum of array)) ----- */
// function average(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let element = nums[i]
//         sum += element;
//     }
//     return sum;
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(average(numbers))





// /* -----  21 (Practice Problem 4 (Second largest number)) ----- */
// function secLarNum(nums) {
//     let newArray = []
//     for (let i = 0; i < nums.length; i++) {
//         nums.sort(function (a, b) { return a - b });
//     }
//     let index = nums.length - 2
//     return nums[index]
// }
// let numbers = [1, 64, 55, 3, 4, 66, 71, 8, 63, 65]
// console.log(secLarNum(numbers))




























/*========================================================
=================== Module 22 - JavaScript ===============
========================================================*/


/* -----  22-2 (slice, splice) ----- */
// let arrayName = [1, 3, 85, 6, 8, 2, , 42, 36, 8, 7]
// console.log(arrayName.slice(2, 5))			// [85, 6, 8]


// let arrayName = [1, 3, 85, 6, 8, 2, 42, 36, 8, 7]
// console.log(arrayName.splice(2, 5))             // [85, 6, 8, 2, 42]
// console.log(arrayName)                          // [1, 3, 85, 2, 42, 36, 8, 7]
// console.log(arrayName.splice(2, 0, 333, 999))   // []
// console.log(arrayName)                          // [1, 3, 333, 999, 85, 2, 42, 36, 8, 7]





/* -----  22-3 (Remove Duplicate) ----- */
// function removeDuplicate(names) {
//     let newArray = []
//     for (let i = 0; i < names.length; i++) {
//         let element = names[i]
//         if (newArray.includes(element) == false) {
//             newArray.push(element)
//         }
//     }
//     return newArray;
// }
// let namesArray = ["Abul", "Babul", "Cabul", "Abul", "Dabul", "Cabul", "Ebul"]
// console.log(removeDuplicate(namesArray))






// /* -----  22-4 (Write foo, bar, foobar if dividable by 3 or 5 or both) ----- */
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("foobar")
//     } else if (i % 3 === 0) {
//         console.log("foo")
//     } else if (i % 5 === 0) {
//         console.log("bar")
//     } else {
//         console.log(i)
//     }
// }






// /* -----  22-5 (Make Chair, Table and Bed) ----- */
// function woodCalculator(chair, table, bed) {
//     let perChairCft = 3
//     let perTableCft = 10
//     let perBedCft = 50
//     let totalWood = chair * perChairCft + table * perTableCft + bed * perBedCft
//     return totalWood
// }
// console.log(woodCalculator(4, 2, 1))






// /* -----  22-6 (Find cheapest phone from objects) ----- */
// const phones = [
//     { name: 'Samsung', camera: 16, storage: '32gb', price: 44000, color: 'silver' },
//     { name: 'Walton', camera: 10, storage: '16gb', price: 20000, color: 'silver' },
//     { name: 'Nokia', camera: 36, storage: '32gb', price: 26000, color: 'silver' },
//     { name: 'Sony', camera: 24, storage: '8gb', price: 28000, color: 'silver' },
//     { name: 'Iphone', camera: 64, storage: '128gb', price: 96000, color: 'golden' },
//     { name: 'Symphony', camera: 10, storage: '8gb', price: 15000, color: 'black' },
//     { name: 'HTC', camera: 15, storage: '32gb', price: 22000, color: 'silver' }
// ]
// function cheapestPhone(phones) {
//     let cheap = phones[0].price;
//     for (let i = 0; i < phones.length; i++) {
//         let element = phones[i].price;
//         if (element < cheap) {
//             cheap = element;
//         }
//     }
//     return cheap;
// }
// let phonesFunction = cheapestPhone(phones)
// console.log(phonesFunction)







// /* -----  22-7 (Shopping cart with quantity from object) ----- */
// const shoppingCart = [
//     { name: 'shoe', price: 1200, quantity: 2 },
//     { name: 'shirt', price: 2200, quantity: 5 },
//     { name: 'pent', price: 3700, quantity: 4 },
//     { name: 'belt', price: 600, quantity: 3 },
// ]
// function totalCost(shopping) {
//     let sum = 0
//     for (let i = 0; i < shopping.length; i++) {
//         let product = shopping[i].price * shopping[i].quantity
//         sum += product
//     }
//     return sum
// }
// let expenses = totalCost(shoppingCart)
// console.log(expenses)








// /* -----  22-8 (Ticket price calculation) ----- */
/*
If ticket number <= 100, ticket price = 100/ticket
If ticket number >100 && <= 200, ticket price = 100/100 + 90/rest ticket
If ticket number >100 && <= 200, ticket price = 100/100 + 90/100 && 70/rest ticket
*/
// function ticketCost(tickets) {
//     let price = 0;
//     if (tickets <= 100) {
//         price = tickets * 100
//     } else if (tickets > 100 && tickets <= 200) {
//         price = 100 * 100 + (tickets - 100) * 90
//     } else {
//         price = 100 * 100 + 100 * 90 + (tickets - 200) * 70
//     }
//     return price
// }
// let ticketCount = ticketCost(300)
// console.log(ticketCount)







// /* -----  22-9 (Validation) ----- */
// function validation(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return "Please enter a valid number"
//     }
//     return num1 + num2;
// }
// let result = validation('10', 20)
// console.log(result)





// /* -----  22 (Practice Problem 1 (Area of triangle)) ----- */
// function triangleArea(a, b, c) {
//     let s = (a + b + c) / 2
//     let value = s * (s - a) * (s - b) * (s - c)
//     let area = Math.sqrt(value)
//     return area
// }
// let result = triangleArea(3, 4, 5)
// console.log(result)





// /* -----  22 (Practice Problem 2 (Check prime number)) ----- */
// function isPrime(number) {
//     let result
//     if (number <= 1) {
//         result = (number + " is not a prime number")
//     } else if (number == 2) {
//         result = (number + " is a prime number")
//     }
//     for (let i = 2; i < number; i++) {
//         let divideBy = i
//         if (number % divideBy == 0) {
//             result = (number + " is not a prime number")
//             break;
//         } else {
//             result = (number + " is a prime number")
//         }
//     }
//     return result
// }
// for (let j = -5; j < 50; j++) {
//     console.log(isPrime(j))
// }




// /* --- Odd sum and Even sum --- */
// function oddEvenSum(nums) {
//     let oddSum = 0
//     let evenSum = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 == 0) {
//             evenSum += nums[i]
//         } else {
//             oddSum += nums[i]
//         }
//     }
//     return "Even sum: " + evenSum + ", " + "Odd sum: " + oddSum
// }
// let numbers = [3, 5, 8, 4, 25, 12]
// console.log(oddEvenSum(numbers))
























// /* 1. Write a function that will take a number and will check the number is positive or negative. */
// function isPosNeg(number) {
//     let result
//     if (number < 0) {
//         result = number + ' is a negative number'
//     } else {
//         result = number + ' is a positive number'
//     }
//     return result
// }
// for (let j = -3; j < 5; j++) {
//     console.log(isPosNeg(j))
// }






// /* 2. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. */
// function isPrime(number) {
//     let result
//     if (number <= 1) {
//         result = number + ' is not a prime number'
//     }
//     if (number == 2) {
//         result = number + ' is a prime number'
//     }
//     for (let i = 2; i < number; i++) {
//         let element = i
//         if (number % element == 0) {
//             result = number + ' is not a prime number'
//             break
//         } else {
//             result = number + ' is a prime number'
//         }
//     }
//     return result
// }
// for (let j = -3; j < 50; j++) {
//     console.log(isPrime(j))
// }





// /* 3. Write a function named findArea() that will take base and height of a triangle and will return the area of triangle. */
// function findArea(base, height) {
//     return 0.5 * base * height
// }
// console.log(findArea(3, 4))




// /* 4. Write a function named findArea() that will take height and width of a rectangle and will return the area of rectangle. */
// function findArea(height, width) {
//     return height * width
// }
// console.log(findArea(5, 4))




// /* 5. Write a function which will take an integer and will return the square of a number. */
// function integerSquare(num) {
//     return num * num
// }
// let number = 12
// console.log(integerSquare(number))




/* 6. Write a function that will take an array and calculate the sum of odd numbers greater than 10 and less than 50. */
// function sumOfOddNumbers(nums) {
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         let element = nums[i]
//         if (element % 2 !== 0 && element < 50) {
//             sum += element
//         }
//     }
//     return sum
// }
// let numbers = [11, 22, 34, 41, 49, 51, 61, 71, 33, 25, 82, 91]
// console.log(sumOfOddNumbers(numbers))





/* Write a function that will take an hour as the input parameter and will convert it into minutes and will return the result in minutes. */
// function hourToMinute(hr) {
//     return hr * 60
// }
// console.log(hourToMinute(5))




// /* ========== 22.5 (practice problem 1) ========== */
// /* সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। */
// function feetToInch(feet) {
//     let result = feet * 12
//     return result
// }
// console.log(feetToInch(12))




// /* ========== 22.5 (practice problem 2) ========== */
// /* একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। */
// function centimeterToMeter(cm) {
//     let result = cm / 100
//     return result
// }
// console.log(centimeterToMeter(600))



// /* ========== 22.5 (practice problem 3) ========== */
/* ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।
এইবার ভালো করে খেয়াল করো।

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।
উত্তর হিসেবে সংখ্যা রিটার্ন করবে।
*/
// function paperRequirments(book1, book2, book3) {
//     let book1Page = 100
//     let book2Page = 200
//     let book3Page = 300
//     let totalPage = book1 * book1Page + book2 * book2Page + book3 * book3Page
//     return totalPage
// }
// let papers = paperRequirments(4, 3, 2)
// console.log(papers)





// /* ========== 22.5 (practice problem 4) ========== */
// /* একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। */
// function bestFriend(names) {
//     let largeName = names[0]
//     for (let i = 0; i < names.length; i++) {
//         if (names[i].length > largeName.length) {
//             largeName = names[i]
//         }
//     }
//     return largeName
// }
// let friendsName = ['Abul', 'Babul', 'Kabul', 'Khulfa E Rashedhin', 'Dabul', 'Ebul']
// console.log(bestFriend(friendsName))





// /* ========== 22.5 (practice problem 5) ========== */
/* এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। */
// function onlyPositive(nums) {
//     let newArray = []
//     for (let i = 0; i < nums.length; i++) {
//         let element = nums[i]
//         if (element >= 0) {
//             newArray.push(element)
//         } else {
//             break
//         }
//     }
//     return newArray
// }
// let numbers = [55, 25, 53, 65, 13, 54, -13, 15, 65]
// console.log(onlyPositive(numbers))






























/*========================================================
=================== Module 23 - Assignment 4 ===============
========================================================*/

// /* ----- Problem:1  radianToDegree ----- */
// function radianToDegree(radian) {                               // Main function
//     let result;
//     if (typeof (radian) != 'number') {                          // If input will not be a number it will return
//         result = "Please make sure that your input is valid";
//     } else {                                                    // If input will be a number it will return
//         result = (radian * 180) / Math.PI;                      // Convertson from Radian to Degree
//         result = result.toFixed(2);                             // It will fix 2 number after decimal
//     }
//     return result;                                              // It will return final result
// }
// console.log(radianToDegree(1))



// /* Problem:2  isJavaScriptFile */
// function isJavaScriptFile(fileName) {                           // Main function
//     if (typeof (fileName) != 'string') {                        // If input will not be a string it will return
//         return "Please make sure that your input is valid";
//     } else {                                                    // If input will be a string it will return
//         if (fileName.endsWith('.js') == true) {                 // It will return when file name ends with '.js'
//             return true;
//         } else {                                                // It will return when file name will not ends with '.js'
//             return false;
//         }
//     }
// }
// console.log(isJavaScriptFile("index.js"))



// /* Problem 3: oilPrice */
// function oilPrice(dieselQuan, petrolQuan, octaneQuan) {
//     let dieselPrice = 114;
//     let petrolPrice = 130;
//     let octanePrice = 135;
//     if (typeof (dieselQuan) != 'number' || typeof (petrolQuan) != 'number' || typeof (octaneQuan) != 'number') {    // If input will not be a number it will return
//         return "Please make sure that your input is valid";
//     } else {                                                                                                        // If input will be a number it will return
//         let totalPrice = dieselQuan * dieselPrice + petrolQuan * petrolPrice + octaneQuan * octanePrice;
//         return totalPrice;
//     }
// }
// console.log(oilPrice(1, 2, 3))



// /* Problem 4: publicBusFare */
// function publicBusFare(passenger) {
//     let totalPublicBusFair;
//     const busCapacity = 50;
//     const microBusCapacity = 11;
//     const busFare = 250;
//     if (typeof (passenger) != 'number') {                                       // If input will not be a number it will return
//         return "Please make sure that your input is valid";
//     } else {                                                                    // If input will not be a number it will return
//         if (passenger < microBusCapacity) {                                                         // It will return when "input < microBusCapacity"
//             totalPublicBusFair = passenger * busFare;
//         } else if (passenger < busCapacity && passenger >= microBusCapacity) {                      // It will return when "busCapacity> input >= microBusCapacity"
//             let passengerForPublicBus = passenger % microBusCapacity;
//             totalPublicBusFair = passengerForPublicBus * busFare;
//         } else {                                                                                    // It will return when input >= busCapacity
//             let passengerForPublicBus = (passenger % busCapacity) % microBusCapacity;
//             totalPublicBusFair = passengerForPublicBus * busFare;
//         }
//     }
//     return totalPublicBusFair;                                                  // It will return final result
// }
// console.log(publicBusFare(235))




// /* Problem 5: isBestFriend */
// function isBestFriend(first, second) {
//     let result;
//     if (typeof (first.name) != 'string' || typeof (first.friend) != 'string' || typeof (second.name) != 'string' || typeof (second.friend) != 'string') {   // If input will not be a string it will return
//         return "Please make sure that your input is valid";
//     } else {                                                                                                                                                // If input will be a string it will return
//         if (first.name == second.friend && second.name == first.friend) {       // It will return when they will be friend each other
//             result = true;
//         } else {                                                                // It will return when they will not be friend each other
//             result = false;
//         }
//     }
//     return result;                                                              // It will return final result
// }
// let fst = { name: 'sss', friend: 5 }
// let snd = { name: 'aa', friend: "sss" }
// console.log(isBestFriend(fst, snd))



/* ========================= */
// /* Count the vowel of a string */
// function countVowel(letters) {
//     let count = 0;
//     for (let i = 0; i < letters.length; i++) {
//         let element = letters[i]
//         if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowel("Hello World"))



// /* Calculate the average of all the numbers that is divisible by 3 from 1 - n */
// function average(n) {
//     let count = 0; sum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 == 0) {
//             sum += i
//             count += 1
//         }
//     }
//     const avg = sum / count
//     return avg
// }
// console.log(average(30))





























/*========================================================
=================== Module 23.5 - JavaScript ===============
========================================================*/
// /* -----  23.5-1 (Recursion = A function calls itself is known as recursive function and the approach is called recursion. Recursion makes the code clean, simpler and shorter.) ----- */
// function sum(i) {
//     if (i == 1) {
//         return 1
//     }
//     return i + sum(i - 1)
// }
// console.log(sum(10))



// /* -----  23.5-2 (Recursion = Factorial) ----- */
// function factorial(i) {
//     if (i == 1) {
//         return 1
//     }
//     return i * factorial(i - 1)
// }
// console.log(factorial(6))




// /* -----  23.5-3 (Objects And Array) ----- */
// let myObjects = {
//     name: 'Sakib',
//     id: 123,
//     friends: ['Abul', 'Babul', 'Cabul'],         // Array
//     address: function () {                       // Function
//         console.log("New York")
//     },
//     car: {                                       // Objects
//         brand: 'Tesla',
//         price: 5000000,
//         made: 2022,
//         manufacturer: {                         // Object in object
//             name: 'Tesla',
//             ceo: 'Elon Mask',
//             available: ['New York', 'London']   // Array in Object inside object
//         }
//     }
// }
// console.log(myObjects.car.manufacturer.available)   // ['New York', 'London']
// myObjects.address()


// const products = {
//     '0': 15,
//     '1': 10,
//     '2': 25
// }
// console.log(products[2])                        // Array (like array but not definitely) in objects


// function arguments(a, b) {
//     console.log(arguments[2])
//     console.log(arguments)                      // Array like objects
// }
// arguments(1, 2, 3, 4, 5)






// /* -----  23.5-4 (For of loop) ----- */
// const numbers = [1, 2, 3, 4, 5]
// for (const number of numbers) {
//     console.log(number)
// }


// const products = [
//     { id: 1, name: 'Samsung phone', price: 12000 },
//     { id: 2, name: 'Symphony phone', price: 12000 },
//     { id: 3, name: 'Sony Laptop', price: 12000 },
//     { id: 4, name: 'iPhone laptop', price: 12000 },
//     { id: 5, name: 'Walton phone', price: 12000 }
// ]
// // for (const product of products) {
// //     console.log(product)
// // }

// function matchedProducts(products, search) {
//     const matched = [];
//     for (const product of products) {
//         if (product.name.toLowerCase().includes(search.toLowerCase())) {
//             matched.push(product.name)
//         }
//     }
//     return matched
// }
// const result = matchedProducts(products, 'LaPtOp')
// console.log(result)



































/*========================================================
=================== Module 24 - JavaScript ===============
========================================================*/
















































































// ========================= 18 - Document Object Model (DOM) ========================
// =============== Browser er Console a html tag gula dekha jai =================
// console.log(document)
// console.log(document.body)


// =========== Id k directly call kora jai ===========
// document.getElementById('test').style.color = "red";


// =========== Class k directly call kora jai jai na ===========
// var lorem = document.getElementsByClassName('lorem');
// for(var i=0; i < lorem.length; i++){
//     var element = lorem[i];
//     element.style.color="blue";
//     // element.innerHTML="Change Element - "+i;
// }
// // lorem[1].style.color="blue";


// =========== QuerySelector sesect only first one ===========
// document.querySelector(".selector p").style.color="red";


// =========== QuerySelectorAll sesect All items as input ===========
// var selector = document.querySelectorAll(".selector p");
// for(var i=0; i < selector.length; i++){
//     var element = selector[i];
//     element.style.color="blue";
// }
// // selector[0].style.color="red";


// =========== Body Syle ===========
// document.body.style.backgroundColor="cyan";


// =========== setAttribute ===========
// document.querySelector(".selector p").setAttribute('title', 'hi');


// =========== Add new "p" in a "Id" ===========
// var selector = document.getElementById('selector');
// const newParagraph = document.createElement('p');
// newParagraph.innerHTML="Hello! This is new paragraph.";
// selector.appendChild(newParagraph);


// =========== Add new li in ul ===========
// var list = document.getElementById("list");
// var addList = document.createElement("li");
// addList.innerHTML="List - 4";
// list.appendChild(addList);


// =========== Child Nodes ===========
// var childNodes = document.getElementById("selector").childNodes;
// console.log(childNodes);


// =========== Parent Node ===========
// var parentNode = document.getElementById("test").parentNode;
// console.log(parentNode);















// ========================= 19 - Document Object Model (DOM) ========================
