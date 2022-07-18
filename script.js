$(document).ready(function () {
    var check = false;
    $('.clicks').on('click', function () {
        if (!check) {
            $('#box').addClass('show');
            document.getElementsByClassName('clicks')[0].innerText = "Close Form";
            check = true;
        } else {
            $('#box').removeClass('show');
            document.getElementsByClassName('clicks')[0].innerText = "Show Form";
            check = false;
        }
    })
    $('.submission').on('click', function () {
        $('#box').removeClass('show');
        document.getElementsByClassName('clicks')[0].innerText = "Show Form";
        check = false;
    })
})