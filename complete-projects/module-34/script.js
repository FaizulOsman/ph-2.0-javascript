// (v-1) 
const loadData = async (search, searchLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    const res = await fetch(url)
    const data = await res.json()
    displayData(data.data, searchLimit)
}

// (v-1) display data
const displayData = (data, searchLimit) => {
    const itemContainer = document.getElementById('item-container')
    itemContainer.innerHTML = ''

    // (v-5) Display Show all button
    const showAllBtn = document.getElementById('show-all-btn')
    if (searchLimit && data.length > 10) {
        // (v-3) Display 10 items only
        data = data.slice(0, 10)

        showAllBtn.classList.remove('d-none')
    } else {
        showAllBtn.classList.add('d-none')
    }


    // (v-3) No items Alert
    const noItemsAlert = document.getElementById('no-items-alert')
    if (data.length === 0) {
        noItemsAlert.classList.remove('d-none')
    } else {
        noItemsAlert.classList.add('d-none')
    }

    // (v-1/2) display items
    data.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('col-3')
        div.innerHTML = `
            <div class="card-group mt-4">
                <div class="card">
                    <img class="card-img-top" src="${item.image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${item.phone_name}</h5>
                        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus?</p>
                        <button onclick="showDetailsBtn('${item.slug}')" class='btn btn-primary' data-bs-toggle="modal" data-bs-target="#itemDetailsModal">Show Details</button>
                    </div>
                </div>
            </div>
        `
        itemContainer.appendChild(div)
    })
    // (v-4) Stop Spinner
    spinnerDisplay(false)
}

// (v-6) Load items data by clicking Show Details button
const showDetailsBtn = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url)
    const data = await res.json()
    displayModal(data.data)
}

// (v-6) Modal section
const displayModal = data => {
    const modalArea = document.getElementById('modal-area')
    modalArea.innerHTML = ''
    const modalContentDiv = document.createElement('div')
    modalContentDiv.classList.add('modal-content')
    modalContentDiv.innerHTML = `
        <div class="modal-header">
            <h5 class="modal-title" id="itemDetailsModalLabel">${data.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mx-auto text-center">
                <img src="${data.image ? data.image : 'image not found'}">
            </div>
            <h5 class="mt-5">Brand: ${data.brand}</h5>
            <p class="mt-3">DisplaySize: ${data.mainFeatures.displaySize}</p>
            <p class="mt-3">Memory: ${data.mainFeatures.memory}</p>
            <p class="mt-3">Storage: ${data.mainFeatures.storage}</p>
        </div>
    `
    modalArea.appendChild(modalContentDiv)
}

// (v-5) Search limit function
const processSearch = (searchLimit) => {
    const searchField = document.getElementById('input-field')
    loadData(searchField.value, searchLimit)
}

// Search Button Click Action
const searchButton = () => {
    // (v-4) Start Spinner
    spinnerDisplay(true)

    processSearch(10)
}


// (v-6) Search by Enter Keypress
document.getElementById('input-field').addEventListener('keypress', function (button) {
    if (button.key == 'Enter') {
        processSearch(10)
        spinnerDisplay(true)
    }
})

// (v-4) Spinner Control
const spinnerDisplay = isLoading => {
    const spinner = document.getElementById('spinner')
    if (isLoading == true) {
        spinner.classList.remove('d-none')
    } else {
        spinner.classList.add('d-none')
    }
}

// (v-5) Show all button click event
document.getElementById('show-all-btn').addEventListener('click', function () {
    processSearch()
})
