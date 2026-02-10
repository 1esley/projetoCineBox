const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

if (loggedUser) {
  window.location.href = '../pages/home.html';
}

document.getElementById('login').addEventListener('click', function () {

  const email = document.getElementById('email').value.trim();
  const pass = document.getElementById('password').value.trim();

  const emailError = document.getElementById('emailError');
  const passError = document.getElementById('passError');

  emailError.textContent = '';
  passError.textContent = '';

  if (email === '') {
    emailError.textContent = 'Informe o e-mail';
    return;
  }

  if (pass === '') {
    passError.textContent = 'Informe a senha';
    return;
  }
//simples, pega os dados e procura no locastorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const userFound = users.find(
    user => user.email === email && user.pass === pass
  );

  if (!userFound) {
    passError.textContent = 'E-mail ou senha inválidos';
    return;
  }

// gera o user logado
  localStorage.setItem('loggedUser', JSON.stringify({
    name: userFound.name,
    email: userFound.email
  }));

  window.location.href = '../pages/home.html';
});
