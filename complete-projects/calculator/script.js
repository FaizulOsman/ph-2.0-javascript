let result = document.getElementById('result')

document.getElementById('clearAll').addEventListener('click', function () {
    result.value = ''
})

function plusMinus() {
    let newResult = Number(result.value)
    result.value = -newResult
}

function insertNumber(number) {
    let existNumber = result.value
    result.value = existNumber + number
}
function equal() {
    result.value = eval(result.value)
}
function delate() {
    result.value = result.value.slice(0, -1)
}