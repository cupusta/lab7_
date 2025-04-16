// Добавление стран
const countries = [
    "Россия", "Казахстан", "Беларусь", "Украина", "Грузия",
    "Армения", "Азербайджан", "Узбекистан", "Киргизия", "Таджикистан"
  ];
  
  const countrySelect = document.getElementById('country');
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
  
  // Валидация полей
  const inputs = document.querySelectorAll('#personal-form input, #personal-form select');
  const nextBtn = document.getElementById('next-btn');
  
  function validateForm() {
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) valid = false;
    });
  
    const pwd = document.getElementById('password').value;
    const confirmPwd = document.getElementById('confirm-password').value;
    if (pwd !== confirmPwd || pwd.length === 0) valid = false;
  
    nextBtn.disabled = !valid;
  }
  
  inputs.forEach(input => input.addEventListener('input', validateForm));
  
  // Обработка кнопок
  document.getElementById('cancel-btn').addEventListener('click', () => {
    document.getElementById('frame_1').style.display = 'none';
    document.querySelector('main').innerHTML = `
      <h1>Добро пожаловать в сервис!</h1>
      <p>Основной контент страницы</p>
    `;
  });
  
  document.getElementById('next-btn').addEventListener('click', () => {
    alert('Переход ко второму шагу'); 
  });

  // Переход с шага 1 на шаг 2
document.getElementById('next-btn').addEventListener('click', () => {
  document.getElementById('frame_1').classList.add('invisible');
  document.getElementById('frame_2').classList.remove('invisible');
});

// Кнопка "Назад"
document.getElementById('back-btn').addEventListener('click', () => {
  document.getElementById('frame_2').classList.add('invisible');
  document.getElementById('frame_1').classList.remove('invisible');
});

// Кнопка "Отправить"
document.getElementById('send-code-btn').addEventListener('click', () => {
  const phone = document.getElementById('phone').value.trim();
  const phoneValid = /^\+?\d{10,15}$/.test(phone.replace(/[^\d+]/g, '')); // грубая проверка
  if (phoneValid) {
    document.getElementById('code-section').classList.remove('invisible');
  } else {
    alert('Введите корректный номер телефона.');
  }
});

// Проверка кода
document.getElementById('verify-code-btn').addEventListener('click', () => {
  const code = document.getElementById('code-input').value.trim();
  if (/^\d{4}$/.test(code)) {
    document.getElementById('next-btn-2').disabled = false;
  } else {
    alert('Введите 4-значный код');
  }
});

// Переход к третьему шагу
document.getElementById('next-btn-2').addEventListener('click', () => {
  alert('Переход к шагу 3: подключение оплаты');
});
