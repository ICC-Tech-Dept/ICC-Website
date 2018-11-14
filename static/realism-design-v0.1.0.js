var init_tile = function(){
  $('.tile').mousedown(
    function(event) {
	  var obj = $(this);
	  obj.css('box-shadow', '1px 1px 3px rgba(80,80,80,0.5)');
	  obj.css('position', 'absolute');
	  var isMove = true;
	  var abs_x = event.pageX - obj.offset().left;
	  var abs_y = event.pageY - obj.offset().top;
	  $(document).mousemove(function(event) {
		if(isMove) {
		  obj.css({left: event.pageX - abs_x, top: event.pageY - abs_y});
		}
	  }).mouseup(
		function() {
		  isMove = false;
		  obj.css('box-shadow', '0px 0px 0px #000');
		});
  });
};

var init_input = function(){
  $('input').focus(function(e){
    $(this).siblings('label').attr('class', 'active');
  });
  $('input').blur(function(e){
    if($(this).val()=='') {
      $(this).siblings('label').attr('class', '');
    }
  });
};

var init_dropdown = function(){
   $('.dropdown-trigger').click(function(){
     $('#'+$(this).attr('data-target')).slideToggle(200);
   });
}

$(document).ready(function() {
  init_tile();
  init_dropdown();
  init_input();
});