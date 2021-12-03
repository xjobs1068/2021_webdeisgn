document.addEventListener("scroll", () => {
    const eGNB = document.getElementById("gnb");
    if (window.scrollY > 0) {
        eGNB.classList.add("stuck");
    } else {
        eGNB.classList.remove("stuck");
    }
});
