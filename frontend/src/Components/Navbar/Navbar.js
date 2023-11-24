// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import IndexPage from '../Pages/Index';
import LoginPage from '../Pages/Login';
import RegisterPage from '../Pages/Register';

const Navbar = () => {
  renderNavbar();
  onNavBarClick();
}

function renderNavbar() {
  const navbar = document.querySelector('#navbarWrapper');
  navbar.innerHTML = `
  <nav class="navbar navbar-expand-lg me-auto">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./img/logo2.png" style="height:50px; width:50px;" alt="Home"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="navbutton nav-link active" aria-current="page" href="#">Leaderboard</a>
          </li>
        </ul>
        <ul class="navbar-nav navbar-right">
         <li class="nav-item">
           <a class="navbutton nav-link active" href="#">Login</a>
         </li>
         <li class="nav-item">
           <a class="navbutton nav-link active" href="#">Register</a>
         </li>
       </ul>
      </div>
    </div>
  </nav>
  `;
};

function onNavBarClick() {
  const navItems = document.querySelectorAll('.nav-link');

  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log(`click on ${e.target.innerHTML} navbar item`);
      if (e.target.innerHTML === '') {
        IndexPage();
      } else if (e.target.innerHTML === 'Leaderboard') {
        LeaderboardPage();
      } else if (e.target.innerHTML === 'Login') {
        LoginPage();
      } else if (e.target.innerHTML === 'Register') {
        RegisterPage();
      }
    });
  });
}

export default Navbar;
