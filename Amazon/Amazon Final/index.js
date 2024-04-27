$.global = new Object();

$.global.item = 1;
$.global.total = 0;

$(document).ready(function() 
	{
	
	var WindowWidth = $(window).width();
	var SlideCount = $('#slides li').length;
	var SlidesWidth = SlideCount * WindowWidth;
	
   $.global.item = 0;
    $.global.total = SlideCount; 
    
	$('.slide').css('width',WindowWidth+'px');
	$('#slides').css('width',SlidesWidth+'px');

   $("#slides li:nth-child(1)").addClass('alive');
    
  $('#left').click(function() { Slide('back'); }); 
  $('#right').click(function() { Slide('forward'); }); 
        
  });

function Slide(direction)
	{
   
    if (direction == 'back') { var $target = $.global.item - 1; }
    if (direction == 'forward') { var $target = $.global.item + 1; }  
    
    if ($target == -1) { DoIt($.global.total-1); } 
    else if ($target == $.global.total) { DoIt(0); }  
    else { DoIt($target); }
    
    
	}

function DoIt(target)
  {
   
    var $windowwidth = $(window).width();
	var $margin = $windowwidth * target; 
    var $actualtarget = target+1;
    
    $("#slides li:nth-child("+$actualtarget+")").addClass('alive');
    
    $('#slides').css('transform','translate3d(-'+$margin+'px,0px,0px)');	
    
    $.global.item = target; 
    
  $('#count').html($.global.item+1);
    
  }
  $(document).ready(function(){
    $("#slide-window").hover(function(){
        $(".nav").css("display", "block");
    }, function(){
    $(".nav").css("display", "none");
  });
    });
//-------------------- Java Script --------------------//
// main.js


// main.js

// Select the product containers and buttons for each section
let productContainer1 = document.querySelector("#scroll1 .products");
let prev1 = document.querySelector("#scroll1 .prev");
let next1 = document.querySelector("#scroll1 .next");

let productContainer2 = document.querySelector("#scroll2 .products");
let prev2 = document.querySelector("#scroll2 .prev");
let next2 = document.querySelector("#scroll2 .next");

let scrollStep = 800;
let scrollSpeed = 300;

// Add click event listeners for the first set of buttons
prev1.addEventListener("click", () => {
    productContainer1.scrollBy({
        left: -scrollStep,
        behavior: "smooth"
    });
});

next1.addEventListener("click", () => {
    productContainer1.scrollBy({
        left: scrollStep,
        behavior: "smooth"
    });
});

// Add click event listeners for the second set of buttons
prev2.addEventListener("click", () => {
    productContainer2.scrollBy({
        left: -scrollStep,
        behavior: "smooth"
    });
});

next2.addEventListener("click", () => {
    productContainer2.scrollBy({
        left: scrollStep,
        behavior: "smooth"
    });
});


let allseal = document.querySelector(".allseal")
let prevv = document.querySelector(".prevv")
let nextt = document.querySelector(".nextt")

let scrollStepp= 800;
let scrollSpeedd = 300;

prevv.addEventListener("click", ()=>{
    allseal.scrollBy({
        left: -scrollStepp,
        behavior: "smooth"
    })
})
nextt.addEventListener("click", ()=>{
    allseal.scrollBy({
        left: scrollStepp,
        behavior: "smooth"
    })
})
