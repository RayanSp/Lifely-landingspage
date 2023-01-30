function expandstep(element) {
    var contentstep = document.getElementById(element);
    if (contentstep.style.display === "none") {
        contentstep.style.display = "block";
        window.setTimeout(function(){
            contentstep.style.opacity = 1;
            contentstep.style.transform = 'scale(1)';
        },0);
} else {
    contentstep.style.transform = "scale(0)";
    contentstep.style.opacity = 0;
    window.setTimeout(function(){
        contentstep.style.display = "none";
    },350);
    }
}


