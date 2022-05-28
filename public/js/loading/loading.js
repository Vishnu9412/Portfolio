document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        $('.loading-box').addClass('gone');
        setTimeout(fade, 900);

        function fade() {
            $('.loading-box').fadeOut();
        }

    }
};