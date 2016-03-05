// fade in
document.getElementById("rh").className = "main effect";
document.querySelector(".js-hide").className = "";
setTimeout(function() {
  document.getElementById("rh").className = "main";
}, 750);

// fittext
jQuery("#rh").fitText(1.8, { maxFontSize: '33px' });

// OTHER
document.addEventListener("touchstart", function(){}, true); // helps remove colored tap on mobile
