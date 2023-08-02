import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';

// create elements and show default (homepage)
const contentContainer = document.getElementById('content');

const navBar = document.createElement('ul');
navBar.id = "nav-bar";
contentContainer.appendChild(navBar);

const backdrop = document.createElement('div');
backdrop.id = "backdrop-content";
contentContainer.appendChild(backdrop);

const relatedContent = document.createElement('div');
relatedContent.id = "rel-content";
backdrop.appendChild(relatedContent)
showRelatedContent(homePage())

// add home link
const homeLink = document.createElement('li');
homeLink.onclick = () => showRelatedContent(homePage());
homeLink.textContent = 'Home';
navBar.appendChild(homeLink);

// add menu link
const menuLink = document.createElement('li');
menuLink.textContent = 'Menu';
menuLink.onclick = () => showRelatedContent(menuPage());
navBar.appendChild(menuLink);

// add contact link
const contactLink = document.createElement('li');
contactLink.textContent = 'Contact';
contactLink.onclick = () => showRelatedContent(contactPage());
navBar.appendChild(contactLink);

const footer = document.createElement('div');
footer.textContent = "Twitter | Facebook | About us"
footer.id = 'footer';

contentContainer.appendChild(footer)

// change what's shown in the content field
function showRelatedContent(page){
  relatedContent.innerHTML = '';
  relatedContent.appendChild(page);
}




