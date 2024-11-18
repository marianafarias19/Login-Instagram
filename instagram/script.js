document.querySelector('.login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username && password) {
      alert('Login bem-sucedido!');
  } else {
      alert('Por favor, preencha todos os campos!');
  }
});
