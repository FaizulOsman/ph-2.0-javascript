// /* Video 1 */

// const loadData = () => {
//     fetch('https://api.kanye.rest/')
//         .then(response => response.json())
//         .then(data => displayData(data))
// }

// const displayData = (data) => {
//     const container = document.getElementById('container')
//     container.innerText = data.quote
//     // console.log(data.quote)
// }





/* Video 2 */

// const loadData = () => {
//     fetch('https://randomuser.me/api/?results=10')
//         .then(response => response.json())
//         .then(data => displayData(data.results))
// }
// const displayData = data => {
//     for (let i of data) {
//         const container = document.getElementById('container')
//         const div = document.createElement('div')
//         const myName = `${i.name.title} ${i.name.first} ${i.name.last}`
//         div.innerHTML = `
//             <h4> Name: ${myName}</h4>
//             <h5> Email: ${i.email}</h5>
//             <p> Location: ${i.location.city}, ${i.location.country}</p>
//         `
//         div.classList.add('container')
//         container.appendChild(div)
//     }
// }





// /* Video 3 */
// const loadData = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(response => response.json())
//         .then(data => displayData(data))
// }
// const displayData = data => {
//     const container = document.getElementById('container')
//     for (let country of data) {
//         const div = document.createElement('div')
//         div.innerHTML = `
//             <h4>Country Name: ${country.name.common}</h4>
//             <h4>Capital: ${country.capital != undefined ? country.capital[0] : 'No Capital'}</h4>
//         `
//         container.appendChild(div)
//         div.classList.add('container')
//     }
// }





// /* Video 4 */

// const loadData = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(response => response.json())
//         .then(data => displayData(data))
// }
// const displayData = data => {
//     const container = document.getElementById('container')
//     for (let country of data) {
//         const div = document.createElement('div')
//         div.innerHTML = `
//             <h4>Country Name: ${country.name.common}</h4>
//             <h4>Capital: ${country.capital != undefined ? country.capital[0] : 'No Capital'}</h4>
//             <button onclick="details('${country.cca2}')">See Flag</button>
//         `
//         container.appendChild(div)
//         div.classList.add('container')
//     }
// }

// const details = (data) => {
//     const url = `https://restcountries.com/v3.1/alpha/${data}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => flags(data))
// }

// const flags = (data) => {
//     for (let flag of data) {
//         const imageArea = document.getElementById('image-area')
//         imageArea.innerHTML = `
//             <h3>${flag.name.common}</h3>
//             <img src="${flag.flags.png}" width='100'>
//         `
//     }
// }

// loadData()







// /* Video 5 */
// const loadData = (search) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayData(data.meals))
// }

// const displayData = meals => {
//     const containerId = document.getElementById('container')
//     containerId.innerHTML = ''
//     for (let data of meals) {
//         const div = document.createElement('div')
//         div.innerHTML = `
//             <img class='h-56 mx-auto w-full' src='${data.strMealThumb}'>
//             <h4 class='text-xl font-semibold'>${data.strMeal}</h4>
//             <p class='text-sm'>${data.strInstructions.slice(0, 100)}</p>
//         `
//         containerId.appendChild(div)
//         console.log(data.strMealThumb)
//     }
// }

// document.getElementById('search-button').addEventListener('click', function () {
//     const inputSearch = document.getElementById('input-search')
//     loadData(`${inputSearch.value}`)
//     inputSearch.value = ''
// })





// // /* Video 6/7 */
// // Get Meals details by searching food
// const loadData = (search) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayData(data.meals))
// }

// // Dynamic card set for food
// const displayData = meals => {
//     const containerId = document.getElementById('container')
//     containerId.innerHTML = ''
//     for (let data of meals) {
//         const div = document.createElement('div')
//         div.innerHTML = `
//             <div onclick="mealDetails('${data.idMeal}')">
//                 <img class='h-56 mx-auto w-full' src='${data.strMealThumb}'>
//                 <h4 class='text-xl font-semibold'>${data.strMeal}</h4>
//                 <p class='text-sm'>${data.strInstructions.slice(0, 100)}</p>
//             </div>
//         `
//         containerId.appendChild(div)
//     }
// }

// // Get meals card by clicking search button
// document.getElementById('search-button').addEventListener('click', function () {
//     const inputSearch = document.getElementById('input-search')
//     loadData(`${inputSearch.value}`)
//     inputSearch.value = ''
// })

// // Get food details with food id
// const mealDetails = (idMeal) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => selectedCard(data.meals[0]))
// }

// // Selectid food card Show on top
// const selectedCard = (data) => {
//     const selectedCardSection = document.getElementById('selected-card')
//     selectedCardSection.innerHTML = `
//         <div class='w-64 mx-auto border border-blue-600 p-2'>
//             <img class='h-56 mx-auto w-64' src='${data.strMealThumb}'>
//             <h4 class='text-xl font-semibold'>${data.strMeal}</h4>
//             <p class='text-sm'>${data.strInstructions.slice(0, 100)}</p>
//         </div>
//     `
//     console.log(data)
// }






// /* Video 8 */
// const loadData = () => {                // button click function
//     const url = 'https://randomuser.me/api/?gender=female'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayData(data.results[0]))
//         .catch(error => console.log(error))
// }

// const loadAsync = async () => {         // button click function
//     const url = 'https://randomuser.me/api/?gender=female'
//     try {
//         const res = await fetch(url)
//         const data = await res.json()
//         displayData(data.results[0])
//     } catch (error) {
//         console.log(error)
//     }
// }

// const displayData = (data) => {
//     console.log(data)
// }








/* =============================================================
========================= Modult 33.5 ==========================
============================================================= */
// /* Check List 1 to 5 */
// const loadData = () => {
//     const url = 'https://jsonplaceholder.typicode.com/comments'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayData(data))
// }
// const displayData = data => {
//     const containerId = document.getElementById('container')
//     data.forEach(item => {
//         const div = document.createElement('div')
//         div.innerHTML = `
//             <div onclick="commentOnclick(${item.id})">
//                 <h4>Id: ${item.id}</h4>
//                 <p>Email: ${item.email}</p>
//             </div>
//         `
//         containerId.append(div)
//     })
// }

// const commentOnclick = (itemId) => {
//     const apiUrl = `https://jsonplaceholder.typicode.com/comments/${itemId}`
//     fetch(apiUrl)
//         .then(res => res.json())
//         .then(data => cardData(data))
// }
// const cardData = data => {
//     const selectedCard = document.getElementById('selected-card')
//     selectedCard.innerHTML = `
//         <h4>Id: ${data.id}</h4>
//         <p>Email: ${data.email}</p>
//     `
// }
// loadData()




// /* Check List 6 */
// const loadData = () => {
//     const url = 'https://randomuser.me/api/?results=50'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayData(data.results))
// }
// const displayData = data => {
//     const containerId = document.getElementById('container')
//     data.forEach(item => {
//         const div = document.createElement('div')
//         div.innerHTML = `
//             <img src='${item.picture.medium}'>
//             <p>Street: ${item.location.street.name}</p>
//             <p>City: ${item.location.city}</p>
//             <p>Latitude: ${item.location.coordinates.latitude}, Longitude: ${item.location.coordinates.longitude}</p>
//             <p>Timezone: ${item.location.timezone.offset}</p>
//         `
//         containerId.appendChild(div)
//     })
// }
// loadData()






/* Check List 7 */
// const loaddata = () => {
//     const url = 'https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England&s=Soccer'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayData(data.countries))
// }
// const displayData = data => {
//     const containerId = document.getElementById('container')
//     data.forEach(item => {
//         const div = document.createElement('div')
//         div.innerHTML = `
//             <img src='${item.strBadge}'>
//         `
//         containerId.appendChild(div)
//         console.log(item)
//     })
// }
// loaddata()