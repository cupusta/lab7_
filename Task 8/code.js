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
  