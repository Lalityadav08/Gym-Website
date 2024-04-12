let crsr = document.querySelector("#cursor")
let crsrBlr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrBlr.style.left = dets.x - 200 + "px";
  crsrBlr.style.top = dets.y - 200 + "px";
})


gsap.to("#nav", {
  backgroundColor: "#000",
  height: "90px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }


})

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -20%",
    end: "top -70%",
    scrub: 2
  }
})

gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 58%",
    scrub: 1
  }
})
gsap.from("#cards-container", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: "#cards-container",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2
  }
})
gsap.from(".team-card", {
  y: 50,
  opacity: 0,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: ".team-cards",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1
  }
})

const modulesCount = document.getElementById("modules-count");
const minutesCount = document.getElementById("minutes-count");
const classesCount = document.getElementById("classes-count");
const unitedCount = document.getElementById("united-count");

let modules = 0;
let minutes = 0;
let classes = 0;
let united = 0;

let isCounting = false;
let scrollStarted = false;

const startCountingDiv = document.getElementById("scroll-container");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    if (!scrollStarted) {
      scrollStarted = true;
    }

    if (scrollStarted && !isCounting) {
      isCounting = true;
      countNumbers();
    }
  }
});

observer.observe(startCountingDiv);

function countNumbers() {
  const targetModules = 45;
  const targetMinutes = 60;
  const targetClasses = 20;
  const targetUnited = 1;

  const interval = 10; // Adjust the speed of counting here
  const increment = targetModules / (1000 / interval);

  const countInterval = setInterval(() => {
    if (modules < targetModules) {
      modules += increment;
      modulesCount.textContent = Math.round(modules);
    } else {
      clearInterval(countInterval);
      isCounting = false;
    }
  }, interval);

  const minutesIncrement = targetMinutes / (1000 / interval);
  const minutesInterval = setInterval(() => {
    if (minutes < targetMinutes) {
      minutes += minutesIncrement;
      minutesCount.textContent = Math.round(minutes);
    }
  }, interval);

  const classesIncrement = targetClasses / (1000 / interval);
  const classesInterval = setInterval(() => {
    if (classes < targetClasses) {
      classes += classesIncrement;
      classesCount.textContent = Math.round(classes);
    }
  }, interval);

  const unitedIncrement = targetClasses / (1000 / interval);
  const unitedInterval = setInterval(() => {
    if (united < targetUnited) {
      united += unitedIncrement;
      unitedCount.textContent = Math.round(united);
    }
  }, interval);
}

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
})
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
})

gsap.from("#page5 h1",{
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page5 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3
  }
})

let arrowIcon = document.querySelector("#page1 #arrow i");
let footer = document.querySelector("#footer");

arrowIcon.addEventListener("click",function(){
  footer.scrollIntoView({behavior:"smooth"});
})

