var signIn = document.getElementById('form-signin-heading');
signIn.innerHTML = "Por favor inicia sesión";

var email = document.getElementById('inputEmail');
email.placeholder = "Correo Electrónico";

var password = document.getElementById('inputPassword');
password.placeholder = "Contraseña";

var remember = document.getElementsByTagName("span")[0];
remember.innerHTML = "Recordar datos";

var sign = document.getElementsByClassName('btn')[0];
sign.innerHTML = "Iniciar Sesión";