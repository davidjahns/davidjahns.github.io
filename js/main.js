$(document).ready(

  function(){

	var button = document.getElementById('nav-button'),
    navItems = document.getElementById('nav-items');

  //open and close menu when the button is clicked
	var open = false;

	function closeNav(){
		$(navItems).removeClass('opened-nav');
	}

  $(button).on('click', button, function () {
     if(!open){
      button.innerHTML = "<img class='img-responsive img-circle animated fadeIn' src='img/davidJahnsPhoto2.jpg'>";
      $(navItems).addClass('opened-nav');
    }
    else{
      button.innerHTML = "Hello,<br>I'm David Jahns.";
      closeNav();
    }
    open = !open;
   });

  $('a[href^="#about"]').click(function() {
    $('#home').addClass('fadeOut hidden');
    $('#work').addClass('fadeOut hidden');
    $('#about').removeClass('fadeOut hidden');
    $('#about').addClass('fadeIn');
  });

  $('a[href^="#work"]').click(function() {
    $('#home').addClass('fadeOut hidden');
    $('#about').addClass('fadeOut hidden');
    $('#work').removeClass('fadeOut hidden');
    $('#work').addClass('fadeIn');
  });

  $('a[href^="#home"]').click(function() {
    $('#about').addClass('fadeOut hidden');
    $('#work').addClass('fadeOut hidden');
    $('#home').removeClass('fadeOut hidden');
    $('#home').addClass('fadeIn');
  });
});

