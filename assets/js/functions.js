// 1. Select all links with # in them.
// 2. When the link is clicked the deafult is to take it there
//    but the preventDefault makes it not go there.
// 3. We check if someone clicked some link and do the animate method instead


$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
e.preventDefault();


//Return the anchor part of a URL
var target = this.hash;
// Make target a Jquery $(target)
var $target = $(target);

//Stop the currently-running animation on the matched elements.
$('body').stop().animate({
    //Get the current coordinates of the first element in the set of matched elements, relative to the document.
    'scrollTop': $target.offset().top
}, 900, 'swing', function () {
    window.location.hash = target;

    });
  });
});
