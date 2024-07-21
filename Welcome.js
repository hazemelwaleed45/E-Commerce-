document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();

    tl.fromTo(".animated-header", 
        { x: -200, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 2, ease: "power2.out" }
    )
    .fromTo(".WelcomeHere", 
        { x: -200, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 2, ease: "power2.out" },
        "+=0.2" // Delay before starting the next animation
    )
    .fromTo(".Btns", 
        { x: -200, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 2, ease: "power2.out" },
        "+=0.2" // Delay before starting the next animation
    );
});


function OpenSignUp(){

    open("http://127.0.0.1:5500/SignUp/SignUp.html" , "_blank");
}

function OpenLogin(){

   open("http://127.0.0.1:5500/Login/login.html" , "_blank");
}