
$(document).ready(function(){
  // alert("welcome to my website");
  // alert
  $('button').click(function(){

  	alert("Hello SSB");
  });
 
   // hide
   $('#hide').click(function(){
     $('h2').hide("slow");

   });
      // show
   $('#show').click(function(){
     $('h2').show(2000);

   });
    // toggle
   $('#toggle').click(function(){
     $('h2').toggle(2000);

   });
   // fadeout
   $('#fadeout').click(function(){
     $('h2').fadeOut();

   });
    // fadein
   $('#fadein').click(function(){
     $('h2').fadeIn();

   });
       // fadetoggle
   $('#fadetoggle').click(function(){
     $('h2').fadeToggle();

   });
   // accordian
   $('.panel').click(function(){
   	$('.content').slideToggle(1000);
   })
   // animation
     $("button").click(function(){
    var div = $(".animation");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});