document.addEventListener('DOMContentLoaded', () => {
    // Лоадер
    const loaderFill = document.getElementById('loader-fill');
    let width = 0;
    const interval = setInterval(() => {
      width += 1;
      loaderFill.style.width = width + '%';
      if (width >= 100) {
        clearInterval(interval);
        document.getElementById('loader').style.display = 'none';
        document.getElementById('main').classList.remove('invisible');
      }
    }, 20);
  
    const startBtn = document.getElementById('start-registration');
    const sections = {
      start: document.getElementById('start'),
      step1: document.getElementById('step1'),
      step2: document.getElementById('step2'),
      step3: document.getElementById('step3'),
      step4: document.getElementById('step4')
    };
  
    function showStep(stepId) {
      Object.values(sections).forEach(sec => sec.classList.add('hidden'));
      sections[stepId].classList.remove('hidden');
    }
  
    // Старт
    startBtn.addEventListener('click', () => {
      showStep('step1');
    });
  
    // Шаг 1: Персональные данные
    const inputsStep1 = ['first-name', 'last-name', 'email', 'address', 'password', 'repeat-password'];
    const next1 = document.getElementById('next-step1');
    const cancel1 = document.getElementById('cancel-step1');
  
    function validateStep1() {
      const allFilled = inputsStep1.every(id => document.getElementById(id).value.trim() !== '');
      const passwordsMatch = document.getElementById('password').value === document.getElementById('repeat-password').value;
      next1.disabled = !(allFilled && passwordsMatch);
    }
  
    inputsStep1.forEach(id => {
      document.getElementById(id).addEventListener('input', validateStep1);
    });
  
    cancel1.addEventListener('click', () => showStep('start'));
    next1.addEventListener('click', () => showStep('step2'));
  
    // Страны
    const countries = ["Россия", "Казахстан", "Беларусь", "Украина", "Грузия", "Армения", "Германия", "Франция", "США", "Япония"];
    const countrySelect = document.getElementById('country');
    countries.forEach(country => {
      const opt = document.createElement('option');
      opt.value = country;
      opt.textContent = country;
      countrySelect.appendChild(opt);
    });
  
    // Шаг 2: Телефон
    const sendCode = document.getElementById('send-code');
    const codeSection = document.getElementById('code-section');
    const verifyCode = document.getElementById('verify-code');
    const next2 = document.getElementById('next-step2');
    const back2 = document.getElementById('back-step2');
  
    sendCode.addEventListener('click', () => {
      const phone = document.getElementById('phone').value.trim();
      if (phone.length > 5) {
        codeSection.classList.remove('hidden');
      }
    });
  
    verifyCode.addEventListener('click', () => {
      const code = document.getElementById('code').value.trim();
      if (/^\d{4}$/.test(code)) {
        next2.disabled = false;
      }
    });
  
    next2.addEventListener('click', () => showStep('step3'));
    back2.addEventListener('click', () => showStep('step1'));
  
    // Шаг 3: Оплата
    const cardInputs = ['card1', 'card2', 'card3', 'card4'].map(id => document.getElementById(id));
    cardInputs.forEach((input, idx) => {
      input.addEventListener('input', () => {
        if (input.value.length === 4 && idx < 3) {
          cardInputs[idx + 1].focus();
        }
      });
    });
  
    const agree = document.getElementById('agree');
    const finish = document.getElementById('finish');
    const back3 = document.getElementById('back-step3');
  
    function validateStep3() {
      const filled = cardInputs.every(input => input.value.length === 4);
      const expiry = document.getElementById('expiry').value.trim();
      const cvv = document.getElementById('cvv').value.trim();
      finish.disabled = !(filled && expiry && /^\d{3}$/.test(cvv) && agree.checked);
    }
  
    [...cardInputs, document.getElementById('expiry'), document.getElementById('cvv'), agree]
      .forEach(el => el.addEventListener('input', validateStep3));
  
    finish.addEventListener('click', () => showStep('step4'));
    back3.addEventListener('click', () => showStep('step2'));
  });
  