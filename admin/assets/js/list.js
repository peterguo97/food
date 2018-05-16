$(function () {
    $('#list-header a').on('click', function () {
        $(this).addClass('list-bottom ');
        $(this).siblings().removeClass('list-bottom');
    })
});