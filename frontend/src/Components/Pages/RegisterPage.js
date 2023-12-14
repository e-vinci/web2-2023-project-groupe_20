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

  const alReadyAnAccount = document.createElement('p');
  alReadyAnAccount.innerHTML = 'Already have an account ? <a href="/login">sign in.</a>';

  const submit = document.createElement('input');
  submit.value = 'Sign up';
  submit.type = 'submit';
  submit.className = 'btn btn-primary';

  const errorMessage = document.createElement('p');
  errorMessage.id = 'errorMessage';
  errorMessage.innerHTML = '';

  const privacyPolicyDiv = document.createElement('div');
  privacyPolicyDiv.className = 'privacyPolicy';

  // eslint-disable-next-line spaced-comment
  /***************************************************************************************
   *   Author: QuocAnDg
   *   Availability: https://github.com/e-vinci/web2-2022-project-group-13/blob/main/frontend/src/Components/Pages/RegisterPage.js
   *
   ************************************************************************************** */
  // Le rgpd a été repris à partir de ce code et nous avons ensuite modifier certaine chose.

  privacyPolicyDiv.innerHTML = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">privacy
  policy</button>
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      <p>
      ARTICLE 1: PREAMBLE<br>
      Information to minors: We keep the information you declare to us (a nickname) 
      in order to be able to communicate with you about your account, 
      solve security problems that could affect your account. When you create your account, 
      we ask you to enter an account name and a password: this account name and password will 
      allow you to access the game. Please note: this account name and password must remain secret. 
      You do not have the right to access and rectify your data. To exercise this right and obtain communication 
      or deletion of your information, write to us, with the help of your parents, by email, shadowfortress@gmail.com.
      <p>
      ARTICLE 2: DATA RETENTION<br>
      We keep your personal data for as long as necessary for the fulfilment of the purposes set out herein, 
      in compliance with the legislation in force. To know your rights to erasure, please consult the article 'Your rights'.
      <p>
      ARTICLE 3: SECURITY<br>
      The Company implements the appropriate technical and organizational measures, with regard to the nature of the data and 
      the risks presented by the processing, to guarantee a high level of data security and, in particular, to prevent them from 
      being distorted, damaged or accessed by unauthorized third parties. To this end, Bcrypt technology is used for the encryption 
      of certain data, physical and logical data backup procedures are implemented and a protocol is used to secure access through data 
      encryption (HTTPS). The Company reserves the right to take legal action against any person who attempts to access personal information 
      that does not belong to the Company.
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
    </div>
  </div>`;

  form.appendChild(username);
  form.appendChild(password);
  form.appendChild(confirmPassword);
  form.appendChild(alReadyAnAccount);
  form.appendChild(privacyPolicyDiv);
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
