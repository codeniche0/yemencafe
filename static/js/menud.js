$(function() {

    if ($('#menud').length == 0) return;

    var $groups = $('#menu-groups li');

    $('#menu-items ul').hide();

    $groups.on('click', function(e) {
        $('#menu-items ul').hide();
        $('#' + $(this).attr('for')).show();
        $groups.removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $($groups).hover(function(e) {
        $(this).addClass('hover');
    },function(e) {
        $(this).removeClass('hover');
    });

    $('#menu-groups [for="menu-appetizers"]').click();

});