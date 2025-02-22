function parallax() {
    const par= document.querySelectorAll(".par")
    let x=0,y=0;
    window.addEventListener("mousemove", (dets) => {
        x=dets.clientX - window.innerWidth / 2;
        y=dets.clientY - window.innerHeight / 2;
        par.forEach((el) => {
            let speedx= el.dataset.speedx
            let speedy= el.dataset.speedy
            el.style.transform = `
            translateX(calc(-50% + ${x*speedx}px)) 
            translateY(calc(-50% + ${y*speedy}px))`;
        })
    })
}
function animation() {
    gsap.from(".bg",{
        duration:2,
        y:1000
    })
    gsap.from(".mt8, .mt9, .mt10, .mt7, .fg7, .fg6, .fg5",{
        duration:3,
        opacity:0,
        y:2000,
        top:`${document.querySelector(".mt8, .mt9, .mt10, .mt7, .fg7, .fg6, .fg5").offsetheight/2}px`
    })
    gsap.from("nav",{
        duration:1.5,
        delay:1.5,
        opacity:0,
        y:-200,
        stagger:0.5
    })
    gsap.from(".text h2",{
        opacity:0,
        y:-100,
        delay:1.8,
        duration:1.5
    })
    gsap.from(".text h1",{
        opacity:0,
        y:500,
        delay:1.8,
        duration:1.5
    })
    gsap.from(".mt6, .mt5, .mt4, .mt3, .fg4, .fg3, .fg2",{
        duration:3.2,
        opacity:0,
        y:2500,
        top:`${document.querySelector(".mt8, .mt9, .mt10, .mt7, .fg7, .fg6, .fg5").offsetheight/2}px`
    })
    gsap.from(".mt1, .mt2,.fg1",{
        duration:3.6,
        opacity:0,
        y:3000,
        top:`${document.querySelector(".mt8, .mt9, .mt10, .mt7, .fg7, .fg6, .fg5").offsetheight/2}px`
    })
}
parallax()
animation()

