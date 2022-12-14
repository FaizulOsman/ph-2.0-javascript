/* =========================================================================
=============================== Basic Way ================================
==========================================================================*/

// /* ==================== Deposit ==================== */

// // Step-1: Add event listener to deposit button
// document.getElementById('deposit-button').addEventListener('click', function () {
//     // Step-2: Get the deposit amount
//     const depositInput = document.getElementById('deposit-input')
//     const depositInputValue = depositInput.value

//     // Warning
//     if (depositInputValue == '') {
//         alert('Please provide a valid number')
//     }

//     // Step-3: Get the current deposit total
//     const depositValue = document.getElementById('deposit-value')
//     const depositValueText = depositValue.innerHTML
//     const depositValueUpdate = Number(depositValueText) + Number(depositInputValue)
//     depositValue.innerHTML = depositValueUpdate
//     depositInput.value = ''

//     // Step-4: Get Update Balance
//     const balanceValue = document.getElementById('balance-value')
//     const balanceValueText = balanceValue.innerText
//     const balanceValueUpdate = Number(balanceValueText) + Number(depositInputValue)
//     balanceValue.innerText = balanceValueUpdate
// })




// /* ==================== Withdraw ==================== */

// // Add event listener to withdraw button
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     // Get the withdraw amount
//     const withdrawInput = document.getElementById('withdraw-input')
//     const withdrawInputValue = withdrawInput.value

//     // Warning
//     if (withdrawInputValue == '') {
//         alert('Please provide a valid number')
//     }

//     // Get the current withdraw value
//     const withdrawValue = document.getElementById('withdraw-value')
//     const withdrawValueText = withdrawValue.innerText

//     // Get Balance value
//     const balanceValue = document.getElementById('balance-value')
//     const balanceValueText = balanceValue.innerText

//     // It will return whte withdraw amount is more then balance
//     if (parseFloat(withdrawInputValue) > parseFloat(balanceValueText)) {
//         alert('Baper bank a taka kom.')
//         return;
//     }

//     // Update withdraw value
//     const withdrawValueUpdate = Number(withdrawValueText) + Number(withdrawInputValue)
//     withdrawValue.innerText = withdrawValueUpdate
//     withdrawInput.value = ''


//     // Get Balance Update
//     const balanceValueUpdate = Number(balanceValueText) - Number(withdrawInputValue)
//     balanceValue.innerText = balanceValueUpdate
// })






















/* =========================================================================
=============================== Professional Way ================================
==========================================================================*/


// function getInputValueById(inputId) {
//     const inputField = document.getElementById(inputId)
//     const inputFieldValue = parseFloat(inputField.value)
//     inputField.value = ''
//     return inputFieldValue
// }

// function getTextById(textId) {
//     const textField = document.getElementById(textId)
//     const textFieldValue = parseFloat(textField.innerText)
//     return textFieldValue
// }

// function getTextOfTotalValue(textId, newValue) {
//     const textOfId = document.getElementById(textId)
//     textOfId.innerText = newValue
// }


// document.getElementById('deposit-button').addEventListener('click', function () {
//     const inputValue = getInputValueById('deposit-input')
//     const depositValue = getTextById('deposit-value')
//     const balanceValue = getTextById('balance-value')

//     const totalDepositValue = inputValue + depositValue
//     const totalBalanceValue = inputValue + balanceValue


//     getTextOfTotalValue('deposit-value', totalDepositValue)
//     getTextOfTotalValue('balance-value', totalBalanceValue)
// })


// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const inputValue = getInputValueById('withdraw-input')
//     const withdrawValue = getTextById('withdraw-value')
//     const balanceValue = getTextById('balance-value')

//     const totalwithdrawValue = withdrawValue + inputValue
//     const totalBalanceValue = balanceValue - inputValue

//     getTextOfTotalValue('withdraw-value', totalwithdrawValue)
//     getTextOfTotalValue('balance-value', totalBalanceValue)
// })















/* ================================================== Recap ========================================================*/
function inputValue(inputId) {
    const depositInput = document.getElementById(inputId)
    const depositInputValue = Number(depositInput.value)
    depositInput.value = ''
    return depositInputValue
}
function outputValue(inputId) {
    const depositValue = document.getElementById(inputId)
    const depositInputTotal = Number(depositValue.innerText)
    return depositInputTotal
}
function totalValue(input, resultPrv, idName) {
    const total = input + resultPrv
    document.getElementById(idName).innerText = total
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const inputDeposit = inputValue('deposit-input')
    const outputDeposit = outputValue('deposit-value')
    const outputBalance = outputValue('balance-value')

    totalValue(inputDeposit, outputDeposit, 'deposit-value')
    totalValue(inputDeposit, outputBalance, 'balance-value')
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputWithdraw = inputValue('withdraw-input')
    const outputWithdraw = outputValue('withdraw-value')
    const outputBalance = outputValue('balance-value')

    totalValue(inputWithdraw, outputWithdraw, 'withdraw-value')
    totalValue(-inputWithdraw, outputBalance, 'balance-value')
})