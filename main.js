$(function(){
  $(window).resize(function(){
   var currentWindow = $(this);
       windowWidth = currentWindow.width(),
       windowHeight = currentWindow.height(),
       browserRatio = windowWidth / windowHeight,
       imageRatio = 864/486;
   if(imageRatio > browserRatio){
     container.css({
       height:'100%',
       width:windowHeight * windowRatio,
       left: (windowHeight * imageRatio - windowWidth)/2,
       top:0,
     })
   }
  });

});//document ready
