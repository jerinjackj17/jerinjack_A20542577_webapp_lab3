function updateTipPercentage() {
    const tipPercentage = document.getElementById('tipPercentage').value;
    document.getElementById('tipDisplay').innerText = `${tipPercentage}%`;
}

function calculateTip() {
    const billTotalInput = document.getElementById('billTotal').value.trim();
    const billTotal = parseFloat(billTotalInput);

    if (isNaN(billTotal) || billTotal <= 0) {
        document.getElementById('tipAmount').value = '';
        document.getElementById('totalWithTip').value = '';
        return;
    }

    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const tipAmount = billTotal * (tipPercentage / 100);
    const totalWithTip = billTotal + tipAmount;

    document.getElementById('tipAmount').value = tipAmount.toFixed(2);
    document.getElementById('totalWithTip').value = totalWithTip.toFixed(2);
    convertCurrency();
}

function convertCurrency() {
    const currencySelect = document.getElementById('currency');
    const rate = parseFloat(currencySelect.selectedOptions[0].dataset.rate);

    const tipAmountUSD = parseFloat(document.getElementById('tipAmount').value);
    const totalWithTipUSD = parseFloat(document.getElementById('totalWithTip').value);

    if (!isNaN(tipAmountUSD) && !isNaN(totalWithTipUSD)) {
        document.getElementById('tipAmount').value = (tipAmountUSD * rate).toFixed(2);
        document.getElementById('totalWithTip').value = (totalWithTipUSD * rate).toFixed(2);
    }
}
