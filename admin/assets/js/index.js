$(function() {
    // 首页查看订单数量
     function texts(id, num) {
       $(id).html(num);
     };
    $.get("", function(data=[1, 2, 3, 40]){
        $("#waitlist", data[0]);
        $("#giveuplist", data[1]);
        $("#endlist", data[2]);
        $("#alllist", data[3]);
    });
});