'use strict';

var nameInput = document.getElementById('name');
nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('foc', clearError('name'));
nameInput.addEventListener('focus', function (event) {
  clearError('name');
});

var emailInput = document.getElementById('email');
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', function (event) {
  clearError('email');
});

var messageInput = document.getElementById('message');
messageInput.addEventListener('blur', validateMessage);
messageInput.addEventListener('focus', function (event) {
  clearError('message');
});

var submitButton = document.getElementById('form-button');
submitButton.addEventListener('click', function () {
  submit();
});

function validateName() {
  var nameValue = nameInput.value;
  var nameError = document.getElementById('nameError');
  var error = '';
  var regex = /^[a-zA-Z0-9]+$/;
  if (nameValue.length == 0) {
    error = 'El nombre no puede quedar en blaco';
  } else if (regex.test(nameValue)) {
    error = 'El nombre debe ser alfanumérico';
  }
  nameError.innerText = error;
  return error;
}

function validateEmail() {
  var emailValue = emailInput.value;
  var emailError = document.getElementById('emailError');

  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var error = '';
  if (!regex.test(emailValue)) {
    error = 'Formato de email no válido';
  }
  emailError.innerText = error;
  return error;
}

function validateMessage() {
  var messageValue = emailInput.value;
  var messageError = document.getElementById('messageError');
  var error = '';
  if (messageValue.length <= 5) {
    error = 'El mensaje debe tener más de 5 caracteres';
  }
  messageError.innerText = error;
  return error;
}

function clearError(id) {
  document.getElementById(id + 'Error').innerText = '';
}

function submit() {
  var nameOk = validateName().length == 0;
  var emailOk = validateEmail().length == 0;
  var messageOk = validateMessage().length == 0;
  if (nameOk && emailOk && messageOk) {
    var recipient = emailInput.value;
    var subject = 'Contacto desde Juego Simón - Final';
    var body = messageInput.value + '\n' + nameInput.value;
    var mailtoUrl =
      'mailto:' +
      encodeURIComponent(recipient) +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);
    window.location.href = mailtoUrl;
  }
}
