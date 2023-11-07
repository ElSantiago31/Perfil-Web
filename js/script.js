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
})
