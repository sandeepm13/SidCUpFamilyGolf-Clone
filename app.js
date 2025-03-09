let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
    cursorBlur.style.left=dets.x - 200 +"px";
    cursorBlur.style.top=dets.y - 200+"px";
});



gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10px",
        // markers:true,
        end:"top -11%",
        scrub:true
    }
});

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scoller:"body",
        start:"top -40%",
        end:"top -70%",
        scrub:true,
        // markers:true
    }
})