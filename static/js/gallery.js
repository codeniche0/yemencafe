$(function() {

    if ($('#gallery').length == 0) return;

    var $blanket = $('<div class="blanket">').appendTo('body');
    var $zoom = $('<div class="zoom">').appendTo('body');
    var $inner = $('<div class="inner">').appendTo($zoom);

    var cache = {};  // Image cache

    $('#gallery .pictures').on('click', 'img', function() {
        var src = $(this).attr('src').replace('previews', 'full')
        $inner.empty();
        var $img;
        if (src in cache)
            $img = cache[src];
        else {
            $img = $('<img src="' + src + '" />');
            cache[src] = $img;
        }
        $img.appendTo($inner);
        $zoom.click(function(e) {
            $zoom.hide();
            $blanket.hide();
            e.preventDefault();
        });
        $blanket.fadeIn(0);
        $zoom.fadeIn(400);
    });

    // Detect escape key.
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $zoom.hide();
            $blanket.hide();
        }
    });

});