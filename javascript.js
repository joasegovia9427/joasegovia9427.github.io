// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    //Get the button:
    mybutton = document.getElementById("myBtn");
    myNav = document.getElementById("navbar");
    var sticky = myNav.offsetTop;

    topDiv = document.getElementById("top");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  if (window.pageYOffset >= sticky) {
    myNav.classList.add("sticky")
    topDiv.style.display = "none";
  } else {
    myNav.classList.remove("sticky");
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


const style = 'background: #002c37; color: white;font-family: "Courier New", Courier, monospace;font-size: 20px;letter-spacing: 3px;word-spacing: 6px;font-weight: 700;text-decoration: none;font-style: italic;font-variant: normal;text-transform: none;';
console.log('%c If you get here thanks in advance!!', style);
console.log("%cThis is my LinkedIn resume... https://www.linkedin.com/in/joaquinsegovia/", style);
console.log("%cThis is my GitHub profile... https://github.com/joasegovia9427", style);
console.log('%c v.1.0.3 - 2022/06/27', style);