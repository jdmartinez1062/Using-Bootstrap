document.querySelector('#menu-bar-a').onclick = function() {
  
  document.getElementById("body").classList.toggle('translate-nav-mob');
}

window.onclick = function(event) { 
  if (!event.target.matches('.menu-items')) 
  {
    if (document.getElementById("body").classList.contains('translate-nav-mob')) {
      document.getElementById("body").classList.remove('translate-nav-mob');
    }
  }
}
