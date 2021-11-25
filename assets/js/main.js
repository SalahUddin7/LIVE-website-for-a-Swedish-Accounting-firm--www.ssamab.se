$(document).ready(function () {

	// STICKY MENU //
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("nav").addClass('sticky-menu');
		} else {
			$("nav").removeClass('sticky-menu');
		}
	});

	
	// SHOW & HIDE MENU //
	$(".menu-show-icon").click(function () {
		$(".main-menu").toggleClass("main-menu-show");
		$(".bar1").toggleClass("bar-color");
		$(".bar2").toggleClass("bar-color");
		$(".bar3").toggleClass("bar-color");
	});

	
	// TOGGLE SEARCH BAR //
	$('.header-search-wrapper .search-main > i').click(function () {
		$(".header-search-wrapper .search-main > i").hide();
		$(".header-search-wrapper .search-main span").show();
		$('.search-form-main').addClass('active-search');
		$('.search-form-main .search-field').focus();
	});

	$('.header-search-wrapper .search-main span').click(function () {
		$(".header-search-wrapper .search-main > i").show();
		$(".header-search-wrapper .search-main span").hide();
		$('.search-form-main').removeClass('active-search');
		$('.search-form-main .search-field').focus();
	});
//================this code for slider=========================== 
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});



});


  




// ============================================
//            START Quote SECTION 
// ============================================

 
function sum(){
    typeA= document.getElementById('one').value;
    typeB= document.getElementById('two').value;
    typeC= document.getElementById('three').value;
    typeD= document.getElementById('four').value;
    
    var a= parseFloat(typeA)* 25;
    var b= parseFloat(typeB)* 25;
    var c= parseFloat(typeC)* 25;
    var d= parseFloat(typeD) *125;
    
    var xx= a+b+c+d; 
    var yy= 250;
    var zz= xx+yy;

    document.getElementById('result').innerHTML = 'Hello! Estimated total cost is ' + zz + ' SEK';
        }
    



function sum2(){
            typeA= document.getElementById('one').value;
            typeB= document.getElementById('two').value;
            typeC= document.getElementById('three').value;
            typeD= document.getElementById('four').value;
            
            var a= parseFloat(typeA)* 30;
            var b= parseFloat(typeB)* 30;
            var c= parseFloat(typeC)* 20;
            var d= parseFloat(typeD) *125;
            
            var xx= a+b+c+d; 
            var yy= 250;
            var zz= xx+yy;
        
            document.getElementById('result').innerHTML = 'Hello! Estimated total cost is ' + zz + ' SEK';
                }
            
    



function sum4(){
                    typeA= document.getElementById('one').value;
                    typeB= document.getElementById('two').value;
                    typeC= document.getElementById('three').value;
                    typeD= document.getElementById('four').value;
                    
                    var a= parseFloat(typeA)* 25;
                    var b= parseFloat(typeB)* 25;
                    var c= parseFloat(typeC)* 15;
                    var d= parseFloat(typeD) *125;
                    
                    var xx= a+b+c+d; 
                    var yy= 250;
                    var zz= xx+yy;
                
                    document.getElementById('result').innerHTML = 'Hello! Estimated total cost is ' + zz + ' SEK';

                }
                  