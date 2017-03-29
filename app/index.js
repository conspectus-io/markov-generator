$('.twitterDiv .tweet').twittie({
    username: 'neiltyson',
    dateFormat: '%b. %d, %Y',
    template: '<strong class="date">{{date}}</strong> - {{screen_name}} {{tweet}}',
    count: 6
}, function () {
    setInterval(function () {
        var item = $('.example2 .tweet ul').find('li:first');

        item.animate({ marginLeft: '-220px', 'opacity': '0' }, 500, function () {
            $(this).detach().appendTo('.example2 .tweet ul').removeAttr('style');
        });
    }, 2000);
});