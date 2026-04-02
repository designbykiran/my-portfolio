
const menuBtn = document.getElementById("Openmenu-bar");
const navUI = document.querySelector('nav ul');
menuBtn.addEventListener("click",(e) =>{
  navUI.classList.toggle('active');
//hidden button if click on menu
if(navUI.classList.contains('active')){
menuBtn.style.display = "none";}
e.stopPropagation();
})
// Close menu on clicking anywhere outside
document.addEventListener("click",(e)=>{
  if(!navUI.contains(e.target)&&  e.target !==menuBtn){
    navUI.classList.remove('active'); 
    menuBtn.style.display = "block";
  }
})

 const video = document.getElementById("introVideo");
  const portfolio = document.getElementById("portfolio");

  video.onended = function() {
    video.style.display = "none";
    portfolio.style.display = "block";
  };