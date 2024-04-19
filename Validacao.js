const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        errorMessage.textContent = 'Preencha todos os campos!';
    } else {
        
        console.log('Email:', email);
        console.log('Senha:', password);

        
        errorMessage.textContent = '';
        window.location.href = 'index.html'; 
    }
});
