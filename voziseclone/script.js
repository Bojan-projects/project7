const icon = document.querySelector('.fa-bars');
const aside = document.querySelector('.aside');
const iconX = document.querySelector('.fa-x');




icon.addEventListener('click', ()=>{
 aside.classList.toggle('active');

 
});
iconX.addEventListener('click', ()=>{
 aside.classList.remove('active');
})


   
  


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
     e.preventDefault();

     document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
     });
 });
});
window.onscroll = () =>{
    icon.classList.remove('fa-x');
    aside.classList.remove('active')
   }
aside.onclick = () =>{
    icon.classList.remove('fa-x');
    aside.classList.remove('active')
   }


   
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
     if(entry.isIntersecting){
      entry.target.classList.add('show-items')
     }
     else{
      entry.target.classList.remove('show-items');
     }
    })
   })
   const scrollScale = document.querySelectorAll('.scroll-scale')
scrollScale.forEach((el)=>observer.observe(el));
