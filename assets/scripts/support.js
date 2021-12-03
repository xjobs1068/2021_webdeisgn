function onPanelClick(e) {
    var listItem = this.querySelector(".list-body");
    if (listItem.style.maxHeight) {
        listItem.style.maxHeight = null;
    } else {
        listItem.style.maxHeight = listItem.scrollHeight + 32 + "px";
    }
    this.classList.toggle("active");
}

var list = document.querySelector(".accordian-list");
for (var i = 0; i < list.children.length; i++) {
    var eLi = list.children[i];
    eLi.addEventListener("click", onPanelClick);
}
