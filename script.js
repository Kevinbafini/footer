window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnVoltarAoTopo").style.display = "block";
    } else {
        document.getElementById("btnVoltarAoTopo").style.display = "none";
    }
}

document.getElementById("btnVoltarAoTopo").addEventListener("click", function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
