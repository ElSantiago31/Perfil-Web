$(document).ready(function () {
    $("#sidebarCollapse2").click(function () {
        $("#mySidenav").toggleClass("show");
        $(".main").toggleClass("shifted");
    });
});
document.addEventListener("click", function (e) {
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-model'));
        myModal.show();
    }
});
ScrollReveal().reveal('.barra', {
    origin: 'left',
    duration: 1800,
    distance: '50%',
    easing: 'ease',
});
ScrollReveal().reveal('.imgPersonal', {
    origin: 'left',
    duration: 1500,
    distance: '50%',
    linear: 'linear',
});
ScrollReveal().reveal('.reveal', {
    origin: 'top',
    duration: 1500,
    distance: '33%',
    linear: 'linear',
});
