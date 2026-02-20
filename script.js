let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function checkPassword() {
    if (document.getElementById('password-input').value === "1234") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
        updateValues();
    } else { alert("غلط پاسورډ!"); }
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const t = { id: Date.now(), text: document.getElementById('text').value, amount: +document.getElementById('amount').value, date: document.getElementById('date').value };
    transactions.push(t);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    updateValues();
    document.getElementById('form').reset();
});

function updateValues() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    let total = 0;
    transactions.forEach(t => {
        total += t.amount;
        const li = document.createElement('li');
        li.innerHTML = `<span>${t.text} (${t.date})</span> <span>${t.amount.toFixed(2)} $</span>`;
        list.appendChild(li);
    });
    document.getElementById('balance').innerText = `${total.toFixed(2)} $`;
}

document.getElementById('print-btn').addEventListener('click', () => window.print());
