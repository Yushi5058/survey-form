
const inputs = form.elements;
const form = document.getElementById('form');

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('invalid', function () {
    form.className = 'submitted';
  });
};

function checkPassword() {
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('password-confirm').value;
  const passwordInput = document.getElementById('password');
  const passwordConfirmInput = document.getElementById('password-confirm');
  
  if (password == passwordConfirm) {
    passwordInput.style.borderColor = 'green';
    passwordConfirmInput.style.borderColor = 'green';
  } else if (password =! '' && passwordConfirm == ''){
    return;
  } else {
    passwordInput.style.borderColor = 'red';
    passwordConfirmInput.style.borderColor = 'red';
  }
}





