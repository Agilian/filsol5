console.clear();

var el = {};

$('.placeholder').on('click', function (ev) {
  $('.placeholder').css('opacity', '0');
  $('.list__ul').toggle();
  alert("Oi1");
  $('.list__ul2').toggle();
  alert("Oi2");
});

 $('.list__ul a').on('click', function (ev) {
   ev.preventDefault();
   var index = $(this).parent().index();
   
   $('.placeholder').text( $(this).text() ).css('opacity', '1');
   
   console.log($('.list__ul').find('li').eq(index).html());
   
   $('.list__ul').find('li').eq(index).prependTo('.list__ul');
   $('.list__ul').toggle();   
   alert("Oi3");
   
 });

 
  $('.list__ul2 a').on('click', function (ev) {
	  alert("aqui4");
   ev.preventDefault();
   var index = $(this).parent().index();
   
   $('.placeholder').text( $(this).text() ).css('opacity', '1');
   
   console.log($('.list__ul2').find('li').eq(index).html());
   
   $('.list__ul2').find('li').eq(index).prependTo('.list__ul2');
   $('.list__ul2').toggle();   
   alert("Oi4");
 });
 

$('select').on('change', function (e) {
     alert("Oi");
  // Set text on placeholder hidden element
  $('.placeholder').text(this.value);
  
  // Animate select width as placeholder
  $(this).animate({width: $('.placeholder').width() + 'px' });
  
});