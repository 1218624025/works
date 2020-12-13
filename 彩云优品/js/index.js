$(function() {
    // 小屏二维码部分
    var li = $(".small>li");
    // console.log(li);
    $(li).eq(0).css("background", "#96c6e0");
    li.hover(function() {
        $(this).siblings().css("background", "#fff");
        $(this).css("background", "#96c6e0");
        // console.log($(this).index());
    }, function() {
        $(this).removeClass("bg");
    })

    // 小屏顶部导航栏部分
    var div = $(".ck");
    var ul = $(".ns-item");
    $(ul).hide();
    $(div).click(function() {
        $(this).children().css("background", "#434c5f");
        $(this).parent().css({ background: "#fff", height: "1.3rem" });
        $(ul).slideToggle();
        if ($(this).parents(".head").prevAll().css("display") == "none") {
            $(this).parents(".head").prevAll().css("display", "block");
        } else {
            $(this).parents(".head").prevAll().css("display", "none");
        }

    })
})