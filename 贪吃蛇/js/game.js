;
(function() {
    var that; //记录游戏对象   
    function Game(map, counters) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        this.counters = counters;
        that = this;
    }
    Game.prototype.start = function() {
        // 渲染食物对象和蛇对象
        this.food.render(this.map);
        this.snake.render(this.map);
        // 让蛇移动
        runSnake();
        //通过键盘改变蛇的移动方向
        bindkey();
    }

    // 游戏逻辑开始
    // 让蛇移动起来 私有成员
    function runSnake() {
        var timeId = setInterval(function() {
            // that指向的是Game
            that.snake.move(that.food, that.map, that.counters);
            that.snake.render(that.map);

            // 当蛇遇到边界游戏结束
            // 获取蛇头的位置
            var headx = that.snake.body[0].x;
            var heady = that.snake.body[0].y;
            var maxX = that.map.offsetWidth / that.snake.width;
            var maxY = that.map.offsetHeight / that.snake.height;
            if (headx < 0 || headx >= maxX) {
                alert('you are dead');
                clearInterval(timeId);
            }
            if (heady < 0 || heady >= maxY) {
                alert('you are dead');
                clearInterval(timeId);
            }

            // 吃到自己时死亡
            for (var i = 4; i < that.snake.body.length; i++) {
                if (that.snake.body[0].x == that.snake.body[i].x && that.snake.body[0].y == that.snake.body[i].y) {
                    alert('you are dead');
                    clearInterval(timeId);
                }
            }
        }, 200);
    }

    // 改变蛇的移动方向
    function bindkey() {
        document.addEventListener('keydown', function(e) {
            // 上 38 下40 左 37 右 39
            switch (e.keyCode) {
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 38:
                    that.snake.direction = 'top';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 40:
                    that.snake.direction = 'bottom';
                    break;
            }
        }, false);
    }
    window.Game = Game;
})()