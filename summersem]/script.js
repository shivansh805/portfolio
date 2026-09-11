var typed = new Typed("#typing-text", {
    strings: [
        "Computer Engineering Student",
        "AI/ML Engineer",
        "Python Developer",
        "Computer Vision Enthusiast",
        "web developer"
    ],

    typeSpeed: 20,      // Faster typing
    backSpeed: 40,      // Faster deleting
    backDelay: 900,     // Wait before deleting
    startDelay: 100,
    loop: true,
    smartBackspace: true
});
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#8b5cf6"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#8b5cf6",
      opacity: 0.2,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.5
        }
      }
    }
  }
});
AOS.init({
    duration: 900,
    once: true,
    offset: 120
});
window.addEventListener("scroll", function(){

const navbar=document.querySelector("nav");

if(window.scrollY>80){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});