async function convertCurrency() {
  const amount = document.getElementById('amountInput').value;
  const selectedCurrency = document.getElementById('currencySelect').value;
  try {
      const response = await fetch('https://mindicador.cl/api/');
      const data = await response.json();
      const exchangeRate = data[selectedCurrency].valor;
      const convertedAmount = (amount / exchangeRate).toFixed(2);
      document.getElementById('result').innerText = `El monto en ${selectedCurrency} es: ${convertedAmount}`;
  } catch (error) {
      document.getElementById('result').innerText = `Error: ${error.message}`;
  }
}
