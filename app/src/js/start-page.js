
// displayWork();
bio.display(bio);
portfolio.displayShort(portfolio);
bio.displayCommits(bio);
modalIntro.build(modalIntro);


$(document).ready( function(){ 

/*
  $(".start-page-portfolio-short-collapse").is(':visible') ? (
   $(".start-page-portfolio-short-minus").css('display','none'),
   $(".start-page-portfolio-short-plus").css('display','inline')
  ) : (
   $(".start-page-portfolio-short-minus").css('display','inline'),
   $(".start-page-portfolio-short-plus").css('display','none')
  );
*/  
  $(".start-page-portfolio-short-minus").css('display','inline');
  $(".start-page-portfolio-short-plus").css('display','none');
  $(".start-page-commitsBio-minus").css('display','none');
  $(".start-page-commitsBio-plus").css('display','inline');
  $('[data-toggle="tooltip"]').tooltip();
  /* setTimeout(function(){
      $('.user-welcome-tooltip').tooltip("show");
    },1700);
  setTimeout(function(){
      $('.user-welcome-tooltip').tooltip("hide");
    },6000); */
  setTimeout(function(){
      $('.user-modal-intro').modal('show');
    },2000);
   
  setTimeout(function(){
      $('.start-page-id-name-small span').each(function(){
        ($(this).text() == " ")&&
          ($(this).after("<br /br>"),console.log('hello',$(this)));
      });
  },300);

  
  // $('span[class*="user-span-flies"').removeClass('user-span-flies-left-start');
  
}); 
//  $('.user-hide-show').hover(console.log('in'),console.log('out'));//'user-span-flies-left-start');
// $('.user-hide-show').click(console.log('in'));//'user-span-flies-left-start');
// short portfolio collapsable 

$('.start-page-id-name-small span').css('display','inline-block');
$('.user-modal-intro-button1').click(function(){
  $('.start-page-id-name-small span').css('display','none');
  setTimeout(function(){
    $('.start-page-id-name-small span').css('display','inline-block');
  },200);
    $('.start-page-id-name-big span').css('display','none');
  setTimeout(function(){
    $('.start-page-id-name-big span').css('display','inline-block');
  },200);
    $('.start-page-id-intro b:first-of-type span').css('display','none');
  setTimeout(function(){
    $('.start-page-id-intro b:first-of-type span').css('display','inline-block');
  },200);
});

$('.start-page-id-name-small span').hover(function(){
   $(this).css('display','none');
  setTimeout(function(){
    $('.start-page-id-name-small span').css('display','inline-block');
  },30);
});

$('.start-page-id-name-big span').hover(function(){
   $(this).css('display','none');
  setTimeout(function(){
    $('.start-page-id-name-big span').css('display','inline-block');
  },30);
});

$('.start-page-id-intro b:first-of-type span').hover(function(){
   $(this).css('display','none');
  setTimeout(function(){
    $('.start-page-id-intro b:first-of-type span').css('display','inline-block');
  },30);
});

$(".start-page-portfolio-short").click( function(){ 

  $(".start-page-portfolio-short-collapse").is(':visible') ? (
  console.log('portfolio click'),
   $(".start-page-portfolio-short-minus").css('display','none'),
   $(".start-page-portfolio-short-plus").css('display','inline')
  ) : (
   $(".start-page-portfolio-short-minus").css('display','inline'),
   $(".start-page-portfolio-short-plus").css('display','none')
  ); 
});
// bio commits collapsable
$(".start-page-commitsBioShort").click( function(){ 
  $(".start-page-commitsBioShort-collapse").is(':visible') ? (
   $(".start-page-commitsBio-minus").css('display','none'),
   $(".start-page-commitsBio-plus").css('display','inline')
  ) : (
   $(".start-page-commitsBio-minus").css('display','inline'),
   $(".start-page-commitsBio-plus").css('display','none')
  ); 
});