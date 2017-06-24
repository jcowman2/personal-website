$(document).ready(function(){
  $("#splash h1").hide();
  $("#splash p").hide();
  window.setTimeout(splashFadeIn, 800);
})

function splashFadeIn() {
  $("#splash p:first").css({marginTop: "50px"});
  $("#splash h1").fadeIn({queue: false, duration: 2000});
  $("#splash h1").animate({letterSpacing: "5px"}, 2000);
  $("#splash p:first").animate({marginTop: "0px"}, {queue: false, duration: 2000});
  $("#splash p").fadeIn({queue: false, duration: 4000});
}
