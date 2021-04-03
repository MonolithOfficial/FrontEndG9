const el = document.getElementById('ft');
const el2 = document.getElementById('footerLogo');

var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

function checkPosition() {
    // console.log(limit - window.innerHeight);
    // console.log(window.scrollY);
    if (window.scrollY >= limit - window.innerHeight - 150) {
        el.classList.add("darkFT");
        el2.classList.remove("invisible");
    }
    else {
        el.classList.remove("darkFT");
        el2.classList.add("invisible");
    }
    requestAnimationFrame(checkPosition);
    
    // Check your position here
  
  }
  // Initial Call:
  checkPosition();