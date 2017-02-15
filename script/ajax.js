function buildContent() {
    console.log(this.response);
    var linkConverter = new showdown.Converter();
    var contentHtml = linkConverter.makeHtml(this.response);
    content = document.getElementById("content");
    content.innerHTML = contentHtml;
}

function linkClick(link) {
    console.log(link.href);
    var linkRequest = new XMLHttpRequest();
    linkRequest.addEventListener("load", buildContent);
    linkRequest.responseType = "text";
    linkRequest.open("GET", link.href);
    linkRequest.send();
}

function buildMenu() {
    var menuConverter = new showdown.Converter();
    var menuHtml = menuConverter.makeHtml(this.response);
    menu = document.getElementById("menu");
    menu.innerHTML = menuHtml;
    links = document.getElementById("menu").getElementsByTagName("a");
    console.log(links.length);
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function(){linkClick(this); return false;};
    }
    linkClick(links[0]);
}

function mainAjax() {
    var menuRequest = new XMLHttpRequest();
    menuRequest.addEventListener("load", buildMenu);
    menuRequest.responseType = "text";
    menuRequest.open("GET", "content/main_menu.md");
    menuRequest.send();
    
}
