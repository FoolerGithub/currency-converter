document.getElementById('convert').addEventListener('click', async () => {
    const amount = document.querySelector('label input#USD-amount').value;
    const finalValue = document.querySelector('.displayed-result span .ending-value');
    const to = document.querySelector('.RUB-currency select#to').value
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/ab5139ecb22dac9fe45d71c2/latest/USD`)
        const data = await response.json();

        if (data.result === 'success') {
            const rate = data.conversion_rates[to];
            const result = (amount * rate).toFixed(2);
            document.querySelector('.ending-value').innerText = `${amount} US = ${result}`;
        } else {
            document.querySelector('.ending-value').innerText = 'There is an error';
        }
    } catch (error) {
        console.error('Error:', error);
        document.querySelector('.ending-value').innerText = 'Connection Error';
    }
});
