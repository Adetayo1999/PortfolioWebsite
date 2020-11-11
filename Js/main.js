
window.sr = ScrollReveal();

sr.reveal('.navbar' , {
    duration:2000,
    origin:'bottom'
});
sr.reveal('.showcase-right' , {
    duration:1500,
    delay:500,
    distance:"200px",
    origin:'top'
});
sr.reveal('.showcase-left .my-name' , {
    duration:1500,
    delay:700,
    origin:'bottom',
    distance:"500px"
});
sr.reveal('.showcase-left .todo' , {
    duration:1500,
    delay:900,
    origin:'bottom',
    distance:"500px"
});
sr.reveal('.showcase-left .success-rate' , {
    duration:1500,
    delay:1100,
    origin:'bottom',
    distance:"500px"
});
sr.reveal('.showcase-left .years-exp' , {
    duration:1500,
    delay:1300,
    origin:'bottom',
    distance:"500px"
});
sr.reveal('.showcase-left .projects' , {
    duration:1500,
    delay:1500,
    origin:'bottom',
    distance:"500px"
});
sr.reveal('.showcase-left .diablo' , {
    duration:1500,
    delay:2000,
    origin:'bottom'
   
});
sr.reveal('.service1' , {
    duration:1500,
    viewFactor:0.2,
    origin:'right',
    distance:"300px"
})
sr.reveal('.service2' , {
    duration:1500,
    // delay:100,
    viewFactor:0.2,
    // viewFactor:-0.5,
    origin:'left',
    distance:"300px"
})
sr.reveal('.service3' , {
    duration:1500,
    // delay:100,
    viewFactor:0.2,

    // viewFactor:-0.5,
    origin:'right',
    distance:"300px"
})
sr.reveal('.service4' , {
    duration:1500,
    viewFactor:0.2,
    // viewFactor:-0.5,
    origin:'left',
    // delay:100,
  
    distance:"300px"
})
sr.reveal('.service5' , {
    duration:1500,
    viewFactor:0.2,
    // viewFactor:-0.5,
    origin:'right',
    delay:100,
   
    distance:"300px"
})
sr.reveal('.service6' , {
    duration:1500,
    viewFactor:0.2,
    // viewFactor:-0.5,
    origin:'left',
    // delay:100,
   
    distance:"300px"
})
sr.reveal('.contact-left' , {
    duration:3000,
    viewFactor:0.2,
    origin:'left',
    distance:"300px"
});
sr.reveal('.contact-right' , {
    duration:3000,
    viewFactor:0.2,
    origin:'right',
    distance:"300px"
})

const Data = document.querySelector('#facts')
const Counter = Data.querySelectorAll("h5")
let speed = 150;
Data.addEventListener("mouseover" , function(){
Counter.forEach(count => {
const  Counter = () => {
  const Target = +count.getAttribute('data-target');
  const initCount = +count.innerText;
  const inc = Target / speed ;
//   console.log(Target)
//   console.log(initCount)

   if(initCount < Target){
       count.innerText = Math.ceil(initCount + inc)
       setTimeout(Counter , 1)
   }else{
       count.innerText = Target;
   }
}
Counter()
   
})
})


const Progress = document.querySelectorAll('#skills')
// console.log(Progress)

Progress.forEach(progress => 
    progress.addEventListener('mouseover' , function(){
   const Bar = document.querySelectorAll(".progress-bar");
   Bar.forEach(bar => {
       const Attr = bar.getAttribute("aria-valuenow") ;
       console.log(Attr);
       bar.style.transition = "all .5s ease-in";
       bar.style.width = Attr+"%";
   })
}))


const Body = document.getElementsByTagName('body')[0];
 const Datr = new Date()
 const hours = Datr.getHours()
 console.log(hours)

if(hours >= 5 && hours <=18){
    Body.style.backgroundColor = "#fff";
    Body.style.color = "black";
}else{
    Body.style.backgroundColor = "#333";
    Body.style.color = "#fff";
}