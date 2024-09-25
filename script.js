document.getElementById('roll').addEventListener('click', function() {
    const taiButton = document.getElementById('tai');
    const xiuButton = document.getElementById('xiu');

    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const total = die1 + die2;

    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = `Kết quả: ${die1} + ${die2} = ${total}`;

    if (total > 6) {
        resultDiv.innerHTML += '<br>Bạn chọn: Tài. Kết quả: THẮNG!';
    } else {
        resultDiv.innerHTML += '<br>Bạn chọn: Xỉu. Kết quả: THẮNG!';
    }

    taiButton.disabled = true;
    xiuButton.disabled = true;
});

document.getElementById('tai').addEventListener('click', function() {
    this.disabled = true;
    document.getElementById('xiu').disabled = true;
});

document.getElementById('xiu').addEventListener('click', function() {
    this.disabled = true;
    document.getElementById('tai').disabled = true;
});
