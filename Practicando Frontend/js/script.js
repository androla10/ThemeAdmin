
var activeContenUser = function(){
	var formContentUser = document.getElementsByClassName("content-user")[0];
	var formContentUser__name = document.getElementsByClassName("content-user__name")[0];
	var formContentUser__imageprofile = document.getElementsByClassName("content-user__imagen-profile")[0]
	verificarClassExist(formContentUser.classList,"content-user--active");
	verificarClassExist(formContentUser__name.classList,"content-user__name--active");
	verificarClassExist(formContentUser__imageprofile.classList,"content-user__imagen-profile--active");
}

var verificarClassExist = function(classList, className){
	var elementoExist = false;
	classList.forEach(function(value,index){
			if(value === className)
				elementoExist = true;
	})

	if(elementoExist)
		classList.remove(className);
	else
		classList.add(className);
}