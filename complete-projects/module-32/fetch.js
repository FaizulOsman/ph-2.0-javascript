// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))

// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => displayData(data))
// }

// function displayData(data) {
//     const usersContainer = document.getElementById('users-container')
//     for (let user of data) {
//         const li = document.createElement('li')
//         // li.append(user.name)
//         li.innerText = user.name
//         usersContainer.append(li)
//     }
// }




function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayData(data))
}

function displayData(posts) {
    let postContainer = document.getElementById('post-container')
    for (let post of posts) {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>User Id = ${post.id}</h3>
            <h4>Title - ${post.title}</h4>
            <p>Description - ${post.body}</p>
        `
        // div.style.textAlign = 'center'
        // div.style.border = '2px solid blue'
        // div.style.marginTop = '5px'
        postContainer.appendChild(div)
    }
}




function updateData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}




