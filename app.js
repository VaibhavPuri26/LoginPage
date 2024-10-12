const main = document.getElementsByTagName('main')[0];
const logo = document.querySelector('.logo');
const loginSectionsContainer = document.querySelector('.loginSectionsContainer');
const footer = document.getElementsByTagName('footer')[0];
const bg = document.querySelector('.bg');
const loginFromContainer = document.querySelector('.loginFormContainer');
const loginForm = document.querySelector('.loginForm');
const btn = document.querySelector('.loginBtn');
const fadeables = document.querySelectorAll('.fadeable');
const inputs = document.querySelectorAll('.inpts');
const loading = document.querySelector('.loading');
const loginP = document.querySelector('.loginP');
const passwordInput = document.getElementById('password');
const showPasswordBtn = document.getElementById('showPassword');

window.onload = () => {
    main.style.animation = 'open var(--time-slow) both';
    setTimeout(() => {
        logo.style.display = 'block';
        logo.style.animation = 'logoAnimations var(--time-fast) both';
    }, 700);
    setTimeout(() => {
        loginSectionsContainer.style.animation = 'appearRight var(--time-fast) both';
        loginSectionsContainer.style.display = 'flex';
    }, 1000);
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginP.classList.toggle('loginPAnime');
    loading.classList.toggle('loadingAnime');
    setInterval(() => {
        bg.style.animation = 'close var(--time-slow) both'
        
        fadeables.forEach((fadeable) => {
            fadeable.style.animation = '';
            fadeable.style.animation = 'fadeLeft var(--time-fast) both';
            loginFromContainer.style.animation = 'fadeDown var(--time-fast) both';
            footer.style.animation = 'fadeDown var(--time-fast) both';
        })
    }, 500)
    setInterval(() => {
        logo.style.animation = 'logoAnimationsEnd var(--time-slow) both'
    }, 1500);
})

function updateLoginButtonState() {
    const allInputsFilled = Array.from(inputs).every(input => input.value.trim() !== '');
    btn.classList.toggle('active', allInputsFilled);
}

inputs.forEach((input) => {
    input.addEventListener('input', updateLoginButtonState);
})

passwordInput.addEventListener('input', () => {
    showPasswordBtn.style.display = passwordInput.value ? 'block' : 'none';
    updateLoginButtonState();
});

showPasswordBtn.addEventListener('click', () => {
    const isPasswordVisible = passwordInput.type === 'text';
    passwordInput.type = isPasswordVisible ? 'password' : 'text';
    showPasswordBtn.textContent = isPasswordVisible ? 'Show' : 'Hide';
});