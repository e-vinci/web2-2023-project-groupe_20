import { clearPage } from '../../utils/render';

const LoginPage = () => {
  clearPage();
  renderLoginForm();
};

function renderLoginForm() {
  const main = document.querySelector('main');

  const form = document.createElement('form');
  form.className = 'p-5';

  const formDiv = document.createElement('div');
  formDiv.id = 'formDiv';

  const title = document.createElement('h1');
  title.className = 'text-center';
  title.innerHTML = 'Login';
  title.id = 'titleForm';

  const username = document.createElement('input');
  username.type = 'text';
  username.id = 'username';
  username.placeholder = 'Username';
  username.required = true;
  username.className = 'form-control mb-3';

  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'password';
  password.required = true;
  password.placeholder = 'Password';
  password.className = 'form-control mb-3';

  const notYetHasDiv = document.createElement('div');
  const notYetAnAccount = document.createElement('p');
  notYetHasDiv.innerHTML = 'Not yet an account ? <a href="/register">sign out.</a>';

  const submit = document.createElement('input');
  submit.value = 'Sign up';
  submit.type = 'submit';
  submit.className = 'btn btn-primary';

  form.appendChild(formDiv);
  form.appendChild(title);
  form.appendChild(username);
  form.appendChild(password);
  form.appendChild(notYetHasDiv);
  notYetHasDiv.appendChild(notYetAnAccount);
  form.appendChild(submit);
  main.appendChild(form);
}

export default LoginPage;
