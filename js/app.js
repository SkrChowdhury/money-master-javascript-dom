function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  // inputField.value = '';

  if (inputFieldValue < 0) {
    alert('Amount cannot be a negative value');
  } else {
    return inputFieldValue;
  }
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
  const totalIncome = getInputFieldValueById('income-field');

  const foodExpense = getInputFieldValueById('food-expense-field');

  const rentExpense = getInputFieldValueById('rent-expense-field');

  const clothesExpense = getInputFieldValueById('clothes-expense-field');

  const totalExpense = foodExpense + rentExpense + clothesExpense;

  const BalanceLeftAfterExpenses = totalIncome - totalExpense;

  setTextElementValueById('total-expenses', totalExpense);
  setTextElementValueById('total-balance', BalanceLeftAfterExpenses);
});

document.getElementById('btn-save').addEventListener('click', function () {
  const totalIncome = getInputFieldValueById('income-field');
  const balanceLeft = getTextElementValueById('total-balance');

  const savePercentage = getInputFieldValueById('save-field');

  const savingAmount = (totalIncome / 100) * savePercentage;
  const remainingBalanceAfterSavings = balanceLeft - savingAmount;

  setTextElementValueById('saving-amount', savingAmount);
  setTextElementValueById('remaining-amount', remainingBalanceAfterSavings);
});
