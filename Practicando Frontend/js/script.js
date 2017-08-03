$(function(){
	$(".info-user-inline").on("click",function(){
		$(this).toggleClass("info-user-inline--active","info-user-inline--active");
	})

	$(".navigation-spicker").on("click",function(){
		$(".container").toggleClass("container--aside-active","container--aside-active");
	});
});