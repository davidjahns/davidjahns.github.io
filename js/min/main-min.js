$(document).ready(function(){function d(){$(a).removeClass("opened-nav")}var e=document.getElementById("nav-button"),a=document.getElementById("nav-items"),n=!1;$(e).on("click",e,function(){n?(e.innerHTML="Hello,<br>I'm David Jahns.",d()):(e.innerHTML="<img class='img-responsive img-circle animated fadeIn' src='img/DavidJahnsCircle.png'>",$(a).addClass("opened-nav")),n=!n}),$('a[href^="#about"]').click(function(){$("#home").addClass("fadeOut hidden"),$("#work").addClass("fadeOut hidden"),$("#about").removeClass("fadeOut hidden"),$("#about").addClass("fadeIn")}),$('a[href^="#work"]').click(function(){$("#home").addClass("fadeOut hidden"),$("#about").addClass("fadeOut hidden"),$("#work").removeClass("fadeOut hidden"),$("#work").addClass("fadeIn")}),$('a[href^="#home"]').click(function(){$("#about").addClass("fadeOut hidden"),$("#work").addClass("fadeOut hidden"),$("#home").removeClass("fadeOut hidden"),$("#home").addClass("fadeIn")})});