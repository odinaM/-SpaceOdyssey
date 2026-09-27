// Создаем звезды
const starsContainer = document.getElementById('stars');
if (starsContainer) {
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Данные для модального окна
const aiData = {
    level1: `
                <p style="margin-bottom: 20px;"><span class="highlight">Анализ ситуации завершён...</span></p>
                <p style="margin-bottom: 20px;">
                    Для сравнения <span class="highlight">совершенно разных товаров</span> необходим единый универсальный измеритель.
                </p>
                <p style="margin-bottom: 20px;">
                    <span class="money-icon"></span>Решение: нужен <span class="highlight">единый измеритель стоимости — деньги</span>
                </p>
                <p>
                    <span class="money-icon"></span>Деньги позволяют выражать стоимость разных товаров в единой форме — <span class="highlight">цене</span>
                </p>
            `,
    level2: `
                <p style="margin-bottom: 20px;"><span class="highlight">Обработка бартерной цепочки...</span></p>
                <p style="margin-bottom: 20px;">
                    Прямой обмен создаёт <span class="highlight">слишком много сложностей</span> — требуется двойное совпадение интересов.
                </p>
                <p style="margin-bottom: 20px;">
                    <span class="money-icon"></span>Решение: деньги становятся <span class="highlight">посредником в обмене</span>
                </p>
                <p>
                    <span class="money-icon"></span>Формула обмена: <span class="highlight">Товар → ДЕНЬГИ → Товар</span>
                </p>
            `,
    level3: `
                <p style="margin-bottom: 20px;"><span class="highlight">Анализ проблемы сохранения...</span></p>
                <p style="margin-bottom: 20px;">
                    Товары <span class="highlight">портятся, теряют свойства</span> и не могут хранить ценность длительное время.
                </p>
                <p style="margin-bottom: 20px;">
                    <span class="money-icon"></span>Решение: нужно превратить товар в <span class="highlight">деньги</span> и сохранить их
                </p>
                <p>
                    <span class="money-icon"></span>Деньги позволяют <span class="highlight">сохранять покупательную способность</span> и переносить её в будущее
                </p>
            `,
    level4: `
                <p style="margin-bottom: 20px;"><span class="highlight">Анализ временного разрыва...</span></p>
                <p style="margin-bottom: 20px;">
                    Когда товар/услуга и оплата <span class="highlight">разделены во времени</span>, требуется особая функция денег.
                </p>
                <p style="margin-bottom: 20px;">
                    <span class="money-icon"></span>Решение: деньги работают как <span class="highlight">средство платежа</span>
                </p>
                <p>
                    <span class="money-icon"></span>Сегодня — услуга → Через 3 месяца — <span class="highlight">оплата</span>
                </p>
            `,
    level5: `
                <p style="margin-bottom: 20px;"><span class="highlight">Анализ межгалактической торговли...</span></p>
                <p style="margin-bottom: 20px;">
                    Разные планеты используют <span class="highlight">разные валюты</span>, которые не принимаются за пределами своей экономики.
                </p>
                <p style="margin-bottom: 20px;">
                    <span class="money-icon"></span>Решение: нужны <span class="highlight">общепризнанные средства международных расчётов</span>
                </p>
                <p>
                     Международная торговля → Доллар | Евро | Юань
                </p>
            `
};

// Модальное окно
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function showAI(level) {
    modalBody.innerHTML = aiData[level];
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});