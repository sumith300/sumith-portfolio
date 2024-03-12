var showContentBtn=document.querySelector(".profile-info-btn")
var profileInfoContainer=document.querySelector(".profile-info-container")
showContentBtn.addEventListener('click',()=>{
    showContentBtn.classList.toggle("active")
    profileInfoContainer.classList.toggle("active")
})

var navLinks=document.querySelectorAll(".nav-link");
var articles=document.querySelectorAll(".article");

navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
      // Remove active class from all nav links
      navLinks.forEach(function(link) {
        link.classList.remove("active");
      });
      articles.forEach(function(article){
        article.classList.remove("active");
      })

      // Add active class to the clicked nav link
      this.classList.add("active");
      for(var i=0;i<navLinks.length;i++){
        if(navLinks[i].classList.contains("active")){
          articles[i].classList.add("active")
        }
      }
    });
  });



var formBtn=document.querySelector(".form-btn");
var fullName=document.querySelector("#fullname");
var email=document.querySelector("#email");
var message=document.querySelector("#message");
formBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  fullName.value=""
  email.value=""
  message.value=""
})  