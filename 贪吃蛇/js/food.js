;
(function() {
    // 用来接收产生的食物 为删除食物做准备
    var element = [];

    function Food() {
        this.width = 20;
        this.height = 20;
        this.x = 0;
        this.y = 0;
        this.color = 'green';
    }
    // 渲染食物
    Food.prototype.render = function(map) {
        //删除之前的食物
        remove();
        // 随机设置x y的值
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;

        // 动态创建div 页面上显示的食物
        var div = document.createElement('div');
        // 将创建的div添加到地图上
        map.appendChild(div);
        // 将生成的食物添加到到数组中
        element.push(div);
        // 设置div的样式
        div.style.position = 'absolute';
        div.style.top = this.y + 'px';
        div.style.left = this.x + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
    }

    // 删除食物
    function remove() {
        for (i = element.length - 1; i >= 0; i--) {
            // 删除div
            element[i].parentNode.removeChild(element[i]);
            // 删除数组中的元素
            // 第一个参数从那个开始删
            // 第二个参数删除几个
            element.splice(i, 1);
        }
    }
    // 给window添加Food函数 让外面可以调用
    window.Food = Food;
})()