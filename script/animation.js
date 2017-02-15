function mainAnimation() {
    headerSize = document.getElementById("header-image");
    headerWrap = document.getElementById("header");
    bodyWrap = document.getElementById("body-wrap");
    //pageInfo = document.getElementById("pginfo");
    function scrollHeader() {
        headerHeight = headerSize.height;
        headerScroll = -headerHeight-window.scrollY;
        console.log("Raw: " + headerScroll);
        headerCap = headerHeight*-1.7;
        console.log("Cap: " + headerCap);
        headerMargin = Math.max(headerScroll, headerCap);
        console.log("Adjusted: " + headerMargin);
        headerWrap.style.marginTop = headerMargin.toString() + "px";
        bodyWrap.style.marginTop = headerHeight.toString() + "px";
        /*pageInfo.innerHTML = "Page width: " + window.innerWidth + "</br>Page height: " + window.innerHeight;*/
    }
    scrollHeader();
    window.onscroll = function(){scrollHeader();};
    window.onresize = function(){scrollHeader();};
    /*bodyWrap.style.marginTop = headerImg.toString() + "px";
    console.log(headerImg);
    header = document.getElementById("header");
    header.style.marginTop = -headerImg.toString() + "px";*/
    /*window.onscroll = function(){
        header.style.marginTop = (-headerImg-Math.min(0.7*headerImg, window.scrollY)).toString() + "px"
    };*/
}
