;
(function() {
    var map = document.querySelector('.map');
    var counters = document.querySelector('.counters');
    var game = new Game(map, counters);
    game.start();
})()