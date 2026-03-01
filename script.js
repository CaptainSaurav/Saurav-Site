const avatar = document.getElementById("avatar");
const heroHeight = window.innerHeight * 0.8;

window.addEventListener("scroll", () => {
    if(window.scrollY > heroHeight) {
        avatar.style.display = "block";
    }
    else{
        avatar.style.display = "none";
    }
});