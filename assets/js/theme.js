 $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
         
    $(function(){
        $("#typed").typed({
			
            strings: ["Tuition", "Language","Yoga","Hobbies","IT Courses"],
            typeSpeed: 100,
            backDelay: 800,
            loop: true
        });
    });

    
    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

	
	$(document).ready(function () {

    $(".slidingDiv").hide();
    $(".show_hide").show();

    $('.show_hide').click(function () {
        $(".slidingDiv").toggle("slide");
    });

});


function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', 'assets/css/'+sheet);
		
$(".slidingDiv").toggle("slide");
document.styleSheets.reload()
 
}


var nlform = new NLForm( document.getElementById( 'nl-form' ) );


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
     autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
		
        400:{
            items:2
        },
		 700:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


  $.fn.stars = function() {
        return $(this).each(function() {

            var rating = $(this).data("rating");

            var numStars = $(this).data("numStars");

            var fullStar = new Array(Math.floor(rating + 1)).join('<i class="fa fa-star  fa-1x"></i>');

            var halfStar = ((rating%1) !== 0) ? '<i class="fa fa-star-half-empty fa-1x"></i>': '';

            var noStar = new Array(Math.floor(numStars + 1 - rating)).join('<i class="fa fa-star-o fa-1x"></i>');

            $(this).html(fullStar + halfStar + noStar);

        });
    }

    $('.stars').stars();
	
	 jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
		
		
		
		// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1500);
});
