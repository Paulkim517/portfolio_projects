window.onload=function() {
	var infoForm = document.getElementById("whatever");

	infoForm.addEventListener("click", function() {
	  event.preventDefault();
	  alert("Thank's,I'll reach out to you soon!");
	});
};
