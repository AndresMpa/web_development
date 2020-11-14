// News img animations
(function(){
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("news_img").style.width = "30px";
        } else {
            document.getElementById("news_img").style.width = "90px";
        }
    }
    
    window.onscroll = function() {
        scrollFunction()
    };
}())