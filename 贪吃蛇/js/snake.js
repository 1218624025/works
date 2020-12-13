;
(function() {
    // 用来接收产生的蛇节 为删除食物做准备
    var element = [];

    function Snake() {
        this.width = 20;
        this.height = 20;
        this.direction = 'right';
        // 蛇节 蛇身体
        this.body = [
            // 第一个是蛇头
            { x: 3, y: 2, color: 'red' },
            { x: 2, y: 2, color: 'blue' },
            { x: 1, y: 2, color: 'blue' }
        ];
    }
    // 渲染蛇
    Snake.prototype.render = function(map) {
            // 删除之前创建的蛇
            remove();
            for (i = 0; i < this.body.length; i++) {
                // 蛇节
                var obj = this.body[i];
                // 动态创建div 页面上显示的蛇
                var div = document.createElement('div');
                // 将创建的div添加到地图上
                map.appendChild(div);
                // 记录蛇节 将每节蛇节添加进数组中
                element.push(div);
                // 设置div的属性
                div.style.position = 'absolute';
                div.style.width = this.width + 'px';
                div.style.height = this.height + 'px';
                div.style.top = obj.y * this.width + 'px';
                div.style.left = obj.x * this.height + 'px';
                div.style.backgroundColor = obj.color;

            }
        }
        // 删除蛇 私有成员 外部访问不了
    function remove() {
        for (i = element.length - 1; i >= 0; i--) {
            // 删除div
            element[i].parentNode.removeChild(element[i]);
            // 删除数组中的元素
            element.splice(i, 1);
        }
    }
    //控制蛇的移动
    Snake.prototype.move = function(food, map, counters) {
        // 控制蛇的身体移动 让当前蛇节移动到上一个蛇节的位置
        for (i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        // 控制蛇头移动
        // 判断蛇移动的方向
        var head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }

        // 蛇吃食物
        // 判断蛇头的位置
        var headX = head.x * this.width;
        var headY = head.y * this.height;
        if (headX === food.x && headY === food.y) {
            // 让蛇增加一节
            var last = this.body[this.body.length - 1];
            this.body.push({
                    x: last.x,
                    y: last.y,
                    color: last.color
                })
                // 随机生成食物
            food.render(map);

            //计分器
            // 每吃一个食物加一分
            var s = counters.innerText;
            var fraction = parseInt(s.substr(3, 2));
            fraction++;
            counters.innerText = '分数:' + fraction;
        }
    }
    window.Snake = Snake;
})()