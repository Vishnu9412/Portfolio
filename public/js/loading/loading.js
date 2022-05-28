document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        setTimeout(fade, 1500);
        $('.loading-box').addClass('gone');
        $('.loading-box span').fadeOut(1500);


        function fade() {
            $('.loading-box').fadeOut();
        }

    }
};