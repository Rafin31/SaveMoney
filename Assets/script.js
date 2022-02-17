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
let statsFieldWrapper = document.querySelector('.data')


function calculateButton() {
    let incomeFieldValue = getValueFromID('income-input');
    let foodFieldValue = getValueFromID('food-input');
    let rentFieldValue = getValueFromID('rent-input');
    let clothsFieldValue = getValueFromID('cloths-input');

    let totalExpenses = calculateValues(foodFieldValue, rentFieldValue, clothsFieldValue);
    if (incomeFieldValue < totalExpenses) {
        console.log("Income Is less than your Expenses")
    } else {
        let balance = incomeFieldValue - totalExpenses
        totalExpansesShowField.innerText = totalExpenses;
        blanceShowField.innerText = balance;
        statsFieldWrapper.style.display = 'block'
    }





}
function saveButton() {
    console.log(getValueFromID('discount-percent-input'))
}
