// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    //Get the button:
    mybutton = document.getElementById("myBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

console.log("If you get here, thanksk")
console.log("This is my resume...")
console.log("Contact with me")

console.log('%c If you get here thanks in advance!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
console.log("%cThis is my linkedIn resume...","color: green; font-family:sans-serif; font-size: 20px");

/* var index = ()=>{
    var myBtn = document.getElementById("myBtn");
    return {
        scrollFunction: function() {
            //Get the button:
            mybutton = document.getElementById("myBtn");
        
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
            
          } else {
            mybutton.style.display = "none";
          }
        },
        topFunction: function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    }
}; */