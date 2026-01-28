document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    const nameError = document.getElementById('nomeError');
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError');
    const confirmPassError = document.getElementById('confirmPassError');
    const feedback = document.getElementById('feedback');
  

    nameError.textContent = '';
    emailError.textContent = '';
    passError.textContent = '';
    confirmPassError.textContent = '';
    feedback.textContent = '';

    // RegEx é basicamente o que verifica se o email tem @ e . nas posições corretas

    const nomeRegEx = /\d/;
    if (nomeRegEx.test(name)) {
        nameError.textContent = 'O nome não pode conter números';
        return;
    }

    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegEx.test(email)) {
        emailError.textContent = 'Formato de e-mail inválido';
        return;
    }

    // aqui tá validando senha (mínimo de 8 caracteres, com pelo menos 1 letra e 1 número)
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegEx.test(pass)) {
        passError.textContent = 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números.';
        return;
    }

    if (confirmPass != pass) {
        confirmPassError.textContent = 'As senhas diferem.';
        return;
    }

    //Local Storage (aqui basicamente armazena e verifica as coisas no armazenamento do navegador)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        emailError.textContent = 'Este e-mail já está cadastrado.';
        feedback.style.color = '#B8260E';
        return;
    } else{
        const newUser = { name, email, pass };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        feedback.textContent = 'Cadastro realizado com sucesso!';
        feedback.style.color = '#057a05';
        feedback.style.textAlign = 'center';
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1500);
    }
});