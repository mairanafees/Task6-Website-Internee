/* ==========================================
            LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

/* ==========================================
        SCROLL PROGRESS BAR
========================================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* ==========================================
        MOBILE MENU
========================================== */

const menuBtn =
    document.getElementById("menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* Close menu after clicking */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* ==========================================
        BACK TO TOP
========================================== */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display = "flex";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
        SCROLL REVEAL
========================================== */

const revealItems =
document.querySelectorAll(

".timeline-card, .world-card, .tech-card, .photo, .note, .dream-card, .explore-card, .letter-box, .contact-info, #contactForm"

);

revealItems.forEach(item=>{

    item.classList.add("fade-up");

});

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

revealItems.forEach(item=>{

    observer.observe(item);

});

/* ==========================================
        CONTACT FORM VALIDATION
========================================== */

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit",function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const message =
    document.getElementById("message").value.trim();

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name===""){

        alert("Please enter your name.");

        return;

    }

    if(!emailPattern.test(email)){

        alert("Please enter a valid email.");

        return;

    }

    if(message.length<10){

        alert("Message should contain at least 10 characters.");

        return;

    }

    alert("✨ Thank you! Your message has been received.");

    contactForm.reset();

});

/* ==========================================
        ACTIVE NAVIGATION
========================================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop-180;

        if(window.scrollY>=sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href")==="#"+current

        ){

            link.classList.add("active");

        }

    });

});

/* ==========================================
        SMOOTH BUTTON HOVER
========================================== */

const buttons =
document.querySelectorAll("button,a");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transition=".35s";

    });

});

/* ==========================================
        RANDOM CARD ROTATION
========================================== */

const cards = document.querySelectorAll(

".world-card,.photo,.note,.dream-card"

);

cards.forEach(card=>{

    const rotate =

    (Math.random()*6)-3;

    card.style.transform =

    `rotate(${rotate}deg)`;

});

/* ==========================================
        HERO FLOAT
========================================== */

const heroCircle =

document.querySelector(".hero-circle");

window.addEventListener("mousemove",(e)=>{

    const x =

    (window.innerWidth/2-e.clientX)/40;

    const y =

    (window.innerHeight/2-e.clientY)/40;

    heroCircle.style.transform =

    `translate(${x}px,${y}px)`;

});

/* ==========================================
        CUSTOM CURSOR GLOW
========================================== */

const cursor = document.createElement("div");

cursor.classList.add("cursor-glow");

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/* ==========================================
        RANDOM FLOATING SPARKLES
========================================== */

function createSparkle() {

    const sparkle = document.createElement("span");

    sparkle.innerHTML = "✨";

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * window.innerWidth + "px";

    sparkle.style.top = "-30px";

    sparkle.style.fontSize =
        Math.random() * 15 + 15 + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 6000);

}

setInterval(createSparkle, 1800);

/* ==========================================
        TYPEWRITER EFFECT
========================================== */

const welcomeText =
document.querySelector(".welcome");

if (welcomeText) {

    const text = welcomeText.textContent;

    welcomeText.textContent = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            welcomeText.textContent += text.charAt(i);

            i++;

            setTimeout(typing, 60);

        }

    }

    typing();

}

/* ==========================================
        PARALLAX BLOBS
========================================== */

window.addEventListener("mousemove", (e) => {

    const blobs =
    document.querySelectorAll(".blob");

    blobs.forEach((blob, index) => {

        const speed = (index + 1) * 8;

        const x =
        (window.innerWidth / 2 - e.clientX) / speed;

        const y =
        (window.innerHeight / 2 - e.clientY) / speed;

        blob.style.transform =
        `translate(${x}px, ${y}px)`;

    });

});

/* ==========================================
        SECTION HOVER GLOW
========================================== */

const allSections =
document.querySelectorAll("section");

allSections.forEach(section => {

    section.addEventListener("mouseenter", () => {

        section.style.transition = ".4s";

        section.style.filter =
        "drop-shadow(0 15px 25px rgba(216,180,255,.20))";

    });

    section.addEventListener("mouseleave", () => {

        section.style.filter = "none";

    });

});

/* ==========================================
        FOOTER YEAR
========================================== */

const copyright =
document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML = `
        © ${new Date().getFullYear()} Maira Nafees
        <br>
        Designed with 💜 using HTML, CSS & JavaScript
    `;

}

/* ==========================================
        EASTER EGG
========================================== */

let clickCount = 0;

document.querySelector(".logo")
.addEventListener("click", () => {

    clickCount++;

    if (clickCount === 5) {

        alert("🌸 Welcome to Maira's Little Universe! Thanks for exploring 💜");

        clickCount = 0;

    }

});

/* ==========================================
        PREVENT IMAGE DRAG
========================================== */

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

/* ==========================================
        END OF SCRIPT
========================================== */

console.log("%c🌸 Welcome to Maira's Little Universe!",
"color:#b47cff;font-size:18px;font-weight:bold;");