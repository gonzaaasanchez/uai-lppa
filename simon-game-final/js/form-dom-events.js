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