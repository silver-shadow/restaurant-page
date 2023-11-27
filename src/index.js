import loadInitialPage from './modules/initial-page-load';
import loadHome from './modules/load-home';
import loadMenu from './modules/load-menu';
import loadContact from './modules/load-contact';

loadInitialPage();
loadHome();
const homeBtn = document.getElementById('Home');
const menuBtn = document.getElementById('Menu');
const contactBtn = document.getElementById('Contact');

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
contactBtn.addEventListener('click', loadContact);

// console.log("Test");