// all variables
let flag = 0;
let totalExpansesShowField = document.getElementById('total-expenses-place')
let blanceShowField = document.getElementById('balance-place')


let saving_amount_place = document.getElementById('saving-amount-place')
let remaining_amount_place = document.getElementById('remaining-amount-place')


let statsFieldWrapper = document.querySelector('.data')
let saving_money_data = document.querySelector('.saving-money-data')



// Getting values from the input field
function setError(idfield, message) {
    const parent = document.getElementById(idfield).parentElement;
    const message_span = parent.querySelector('span');
    message_span.innerText = message;
}
function resetError() {
    let errors = document.querySelectorAll('.Error')
    for (error of errors) {
        error.innerText = " "
    }
}
// resetError();


// getting values from inputs
function getValueFromID(id_name) {
    let value = document.getElementById(id_name).value;
    if (value != "") {
        if (!isNaN(value)) {
            if (value > 0) {
                setError(id_name, " ")
                flag++
                return parseFloat(value);
            } else {
                flag = 0;
                saving_money_data.style.display = 'none'
                statsFieldWrapper.style.display = 'none'
                setError(id_name, "*Negetive value is not allowed")
            }
        } else {
            flag = 0;
            saving_money_data.style.display = 'none'
            statsFieldWrapper.style.display = 'none'
            setError(id_name, "*Only Numbers Allowed")
        }
    } else {
        flag = 0;
        saving_money_data.style.display = 'none'
        statsFieldWrapper.style.display = 'none'
        setError(id_name, "*Cant be Blank")
    }

}

// Calculating inputs
function calculateValues(value1, value2, value3) {
    result = value1 + value2 + value3
    return result;
}



// after clicnking the calculate button
function calculateButton() {
    let balance = 0
    let values = []
    let incomeFieldValue = getValueFromID('income-input', statsFieldWrapper);
    let foodFieldValue = getValueFromID('food-input', statsFieldWrapper);
    let rentFieldValue = getValueFromID('rent-input', statsFieldWrapper);
    let clothsFieldValue = getValueFromID('cloths-input', statsFieldWrapper);

    let totalExpenses = calculateValues(foodFieldValue, rentFieldValue, clothsFieldValue);
    if (incomeFieldValue < totalExpenses) {
        saving_money_data.style.display = 'none'
        statsFieldWrapper.style.display = 'none'
        setError("calculate-button", "*Income Is less than your Expenses")
    } else {

        balance = incomeFieldValue - totalExpenses
        totalExpansesShowField.innerText = totalExpenses;
        blanceShowField.innerText = balance;
        if (flag != 0) {
            resetError()
            statsFieldWrapper.style.display = 'block'
        }
    }
    values = [totalExpenses, balance, incomeFieldValue]

    return values;

}
// calculatePercentage
function calculatePercentage(percent) {
    saving_money_data.style.display = 'none'
    let values = calculateButton();
    let saving_amount = values[2] * (percent / 100);
    let remaining_amount = values[1] - saving_amount
    // console.log(saving_amount)

    if (saving_amount > values[1]) {
        saving_money_data.style.display = 'none'
        statsFieldWrapper.style.display = 'none'
        setError("discount-percent-input", "Saving Amount is greater than your Balance")
    } else {
        saving_amount_place.innerText = saving_amount.toFixed(2);
        remaining_amount_place.innerText = remaining_amount.toFixed(2);

        saving_money_data.style.display = 'block'
    }

}
// saving button
function saveButton() {

    let savingPercentageValue = getValueFromID('discount-percent-input');
    if (flag != 0) {
        calculatePercentage(savingPercentageValue)
    }


}
