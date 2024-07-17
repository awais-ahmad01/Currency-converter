var timeline = gsap.timeline();

timeline.from(".container", {
    scale:0,
    duration:0.8,
})

timeline.from("h2", {
    y:-10,
    opacity:0,
    duration:0.2,

})

timeline.from(".amount", {
    y:-10,
    opacity:0,
    duration:0.2

})


timeline.from(".dropdown", {
    y:-10,
    opacity:0,
    duration:0.2
})

timeline.from(".msg", {
    y:-10,
    opacity:0,
    duration:0.2
})

timeline.from(".btn", {
    y:-10,
    opacity:0,
    duration:0.2
})







