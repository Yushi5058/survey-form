
const inputs = document.getElementById('form').elements;

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('invalid', function () {
    document.getElementById('form').className = 'submitted';
  });
};

function matchPassword() {
  const pw1 = document.getElementById('password');
  const pw2 = document.getElementById('password-confirm');
  if (pw1 !== pw2) {
    pw1.style.border = '2px solid red';
    pw2.style.border = '2px solid red';
  } else {
    pw1.style.border = '2px solid green';
    pw2.style.border = '2px solid green';
  }
}



