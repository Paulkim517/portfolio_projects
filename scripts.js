window.onload=function() {
	
	var infoForm = document.getElementById("whatever");

var aboutBtn = document.getElementById("about-btn");

 var projectsBtn = document.getElementById("projects-btn");

 var contactBtn = document.getElementById("contact-btn");
 




  aboutBtn.addEventListener("click", function(event) {
    document.getElementById("about").style.display = "block";
      document.getElementById("projects").style.display = "none";
      document.getElementById("contacts").style.display = "none";
     
    
  });


  projectsBtn.addEventListener("click", function(event) {
     console.log("suck it")
      document.getElementById("projects").style.display = "block";
     document.getElementById("about").style.display = "none";
      document.getElementById("contacts").style.display = "none";
     
   
  });

  contactBtn.addEventListener("click", function(event){
	
      	document.getElementById("contacts").style.display = "block";
      	document.getElementById("about").style.display = "none";
      document.getElementById("projects").style.display = "none";
      	
  });


	infoForm.addEventListener("click", function() {
	  event.preventDefault();
	  alert("Thank's,I'll reach out to you soon!");
	});
}

 


