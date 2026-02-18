async function loadComponent(placeholderId, componentPath) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;
  const response = await fetch(componentPath);
  const html = await response.text();
  placeholder.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('menu-component', 'src/components/menu.html');
  loadComponent('hero-component', 'src/components/hero.html');
  loadComponent('navbar-component', 'src/components/navbar.html');
  loadComponent('experience-component', 'src/components/experience.html');
  loadComponent('portfolio-component', 'src/components/portfolio.html');
  loadComponent('skills-component', 'src/components/skills.html');
  loadComponent('other-skills-component', 'src/components/other-skills.html');
  loadComponent('soft-skills-component', 'src/components/soft-skills.html');
  loadComponent('language-component', 'src/components/language.html');
  loadComponent('next-skills-component', 'src/components/next-skills.html');
  loadComponent('contact-component', 'src/components/contact.html');
  loadComponent('footer-component', 'src/components/footer.html');
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  //Get the button:
  var menu = document.getElementById('menu-full-screen');
  mybutton = document.getElementById('myBtn');
  myNav = document.getElementById('navbar');
  var sticky = myNav.offsetTop;

  topDiv = document.getElementById('top');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
    if (menu.style.display == 'block') {
      mybutton.style.display = 'none';
    }
  } else {
    mybutton.style.display = 'none';
  }

  if (window.pageYOffset >= sticky) {
    myNav.classList.add('sticky');
    topDiv.style.display = 'none';
  } else {
    myNav.classList.remove('sticky');
  }
  /* if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    myNav.style.display = "block";
  } else {
    myNav.style.display = "none";
  } */
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menuFunction() {
  var menu = document.getElementById('menu-full-screen');
  var mybutton = document.getElementById('myBtn');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    mybutton.style.display = 'block';
  } else {
    menu.style.display = 'block';
    mybutton.style.display = 'none';
  }
}

const style =
  'background: #002c37; color: white;font-family: "Courier New", Courier, monospace;font-size: 20px;letter-spacing: 3px;word-spacing: 6px;font-weight: 700;text-decoration: none;font-style: italic;font-variant: normal;text-transform: none;';
console.log('%c If you get here thanks in advance!!', style);
console.log('%cThis is my LinkedIn resume... https://www.linkedin.com/in/joaquinsegovia/', style);
console.log('%cThis is my GitHub profile... https://github.com/joasegovia9427', style);
console.log('%c v.3.0.0 - 2026/02/17', style);
