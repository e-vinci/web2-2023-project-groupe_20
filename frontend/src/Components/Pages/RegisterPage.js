import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const RegisterPage = () => {
  clearPage();
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');

  const form = document.createElement('form');
  form.className = 'p-5';

  const title = document.createElement('h1');
  title.innerHTML = 'Register';
  title.id = 'titleForm';
  title.className = 'text-center';

  const username = document.createElement('input');
  username.type = 'text';
  username.id = 'username';
  username.placeholder = 'Username';
  username.className = 'form-control mb-3';

  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'password';
  password.placeholder = 'Password';
  password.className = 'form-control mb-3';

  const confirmPassword = document.createElement('input');
  confirmPassword.type = 'password';
  confirmPassword.id = 'confirmPassword';
  confirmPassword.placeholder = 'Confirm your password';
  confirmPassword.className = 'form-control mb-3';

  const alreadyHasDiv = document.createElement('div');
  const alReadyAnAccount = document.createElement('p');
  alreadyHasDiv.innerHTML = 'Already have an account ? <a href="/login">sign in.</a>';

  const submit = document.createElement('input');
  submit.value = 'Sign up';
  submit.type = 'submit';
  submit.className = 'btn btn-primary';

  const errorMessage = document.createElement('p');
  errorMessage.id = 'errorMessage';
  errorMessage.innerHTML = '';

  
  form.appendChild(username);
  form.appendChild(password);
  form.appendChild(confirmPassword);
  form.appendChild(alreadyHasDiv);
  alreadyHasDiv.appendChild(alReadyAnAccount);
  form.appendChild(submit);
  form.appendChild(errorMessage);
  form.addEventListener('submit', onRegister);
  
  main.appendChild(title);
  main.appendChild(form);
}

async function onRegister(e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirmPassword').value;
  const errorM = document.querySelector('#errorMessage');

  if (password !== confirmPassword) {
    errorM.innerHTML = 'Your passwords are not the same';
    throw new Error('Wrong confirmation password');
  }

  const options = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/api/auths/register', options);

  if (response.status === 400) {
    errorM.innerHTML = 'There is a field missing';
  } else if (response.status === 409) {
    errorM.innerHTML = 'This username already exists';
  }
  if (!response.ok) {
    throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  }
  const authenticatedUser = await response.json();
  Navigate('/login');
}

export default RegisterPage;