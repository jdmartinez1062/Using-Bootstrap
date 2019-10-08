
var myID =  document.getElementById('scroll-nav');


var myScrollFunc = function()
{
    var y = window.scrollY;
    if (y >= 95) 
        {
            myID.className = 'scroll-nav show col d-flex'
        } 
    else 
        {
            myID.className = 'scroll-nav hide col d-flex'
        }
};

window.addEventListener("scroll", myScrollFunc);