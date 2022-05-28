document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        setTimeout(fade, 1500);
        $('.loading-box').addClass('gone');

        function fade() {
            $('.loading-box').fadeOut();
        }

    }
};