// Берём элементы
let title = document.getElementById('title');
let text = document.getElementById('text');
let block = document.getElementById('block');

// 1. Меняем заголовок
document.getElementById('btn1').onclick = function() {
    title.innerText = 'Мы пикми';
};

// 2. Меняем цвет текста
document.getElementById('btn2').onclick = function() {
    text.style.color = 'deeppink';
};

// 3. Скрыть
document.getElementById('btn3').onclick = function() {
    block.classList.add('hidden');
};

// 4. Показать
document.getElementById('btn4').onclick = function() {
    block.classList.remove('hidden');
};

// 5. Добавить класс
document.getElementById('btn5').onclick = function() {
    block.classList.add('highlight');
};

// 6. Тема
let themeBtn = document.getElementById('btn6');
themeBtn.onclick = function() {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        themeBtn.innerText = 'Светлая';
    } else {
        themeBtn.innerText = 'Тёмная';
    }
};