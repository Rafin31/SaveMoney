// Getting values from the input field
function getValueFromID(id_name) {
    let value = document.getElementById(id_name).value;
    if (value != "") {
        if (!isNaN(value)) {
            return parseFloat(value);
        } else {
            console.log("ERROR")
        }
    } else {
        console.log("Invalid Input")
    }

}

// Calculating inputs
function calculateValues(value1, value2, value3) {
    result = value1 + value2 + value3
    return result;
}

let totalExpansesShowField = document.getElementById('total-expenses-place')
let blanceShowField = document.getElementById('balance-place')


let saving_amount_place = document.getElementById('saving-amount-place')
let remaining_amount_place = document.getElementById('remaining-amount-place')


let statsFieldWrapper = document.querySelector('.data')
let saving_money_data = document.querySelector('.saving-money-data')


function calculateButton() {
    let balance = 0
    let values = []
    let incomeFieldValue = getValueFromID('income-input');
    let foodFieldValue = getValueFromID('food-input');
    let rentFieldValue = getValueFromID('rent-input');
    let clothsFieldValue = getValueFromID('cloths-input');

    let totalExpenses = calculateValues(foodFieldValue, rentFieldValue, clothsFieldValue);
    if (incomeFieldValue < totalExpenses) {
        console.log("Income Is less than your Expenses")
    } else {
        balance = incomeFieldValue - totalExpenses
        totalExpansesShowField.innerText = totalExpenses;
        blanceShowField.innerText = balance;
        statsFieldWrapper.style.display = 'block'
    }
    values = [totalExpenses, balance, incomeFieldValue]


    return values;

}
// calculatePercentage
function calculatePercentage(percent) {
    let values = calculateButton();
    let saving_amount = values[2] * (percent / 100);
    let remaining_amount = values[1] - saving_amount
    // console.log(saving_amount)

    saving_amount_place.innerText = saving_amount;
    remaining_amount_place.innerText = remaining_amount;

    saving_money_data.style.display = 'block'
}

function saveButton() {
    let savingPercentageValue = getValueFromID('discount-percent-input');
    calculatePercentage(savingPercentageValue)

}
