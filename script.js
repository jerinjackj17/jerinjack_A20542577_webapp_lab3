function updateTipPercentage() {
    const tipPercentage = document.getElementById('tipPercentage').value;
    document.getElementById('tipDisplay').innerText = `${tipPercentage}%`;
}

function calculateTip() {
    const billTotalInput = document.getElementById('billTotal').value.trim();
    const billTotal = parseFloat(billTotalInput);

    // Validation for non-numeric or negative values
    if (isNaN(billTotal) || billTotal <= 0) {
        alert("Please enter a valid, positive number for the Bill Total.");
        return;
    }

    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    // Calculate tip amount and total
    const tipAmount = billTotal * (tipPercentage / 100);
    const totalWithTip = billTotal + tipAmount;

    // Display values
    document.getElementById('tipAmount').value = tipAmount.toFixed(2);
    document.getElementById('totalWithTip').value = totalWithTip.toFixed(2);

    // Convert to selected currency
    convertCurrency();
}

function convertCurrency() {
    const currencySelect = document.getElementById('currency');
    const rate = parseFloat(currencySelect.selectedOptions[0].dataset.rate);

    const tipAmountUSD = parseFloat(document.getElementById('tipAmount').value);
    const totalWithTipUSD = parseFloat(document.getElementById('totalWithTip').value);

    if (!isNaN(tipAmountUSD) && !isNaN(totalWithTipUSD)) {
        // Convert amounts
        document.getElementById('tipAmount').value = (tipAmountUSD * rate).toFixed(2);
        document.getElementById('totalWithTip').value = (totalWithTipUSD * rate).toFixed(2);
    }
}
