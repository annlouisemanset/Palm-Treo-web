// ===============================
// Palm Treo 650 Website Script
// ===============================

// Smooth fade-in animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card").forEach(card=>{
    observer.observe(card);
});

// Floating phone animation
const phone = document.querySelector(".hero-right img");

if(phone){

let rotate = 0;

let float = 0;

setInterval(()=>{

    rotate += 0.5;

    float += 0.05;

    phone.style.transform = `
        translateY(${Math.sin(float)*12}px)
        rotateY(${Math.sin(float)*18}deg)
        rotateX(${Math.cos(float)*3}deg)
        scale(1.02)
    `;

},20);

}

// Button ripple effect
document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Current year in footer (optional)
const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =
"Created by BTVTED Computer Programming Students © " +
new Date().getFullYear();

}

console.log("Palm Treo 650 Website Loaded Successfully");