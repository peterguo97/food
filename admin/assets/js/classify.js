
$(function () {
    // 取消的时候删除
    function cancel(box1, box2, obj) {
        $(box1).on('click', function () {
            $(obj).val('');
            $(box2).css("display", "none");
        });
    }

    // 点击添加分类和修改名称的时候加
    function alert(name, box, box2) {
        $(name).on('click', function(e) {
           
            if (e && e.stopPropagation)
                e.stopPropagation();
            else {
                window.event.cancelBubble = true;
            }
            $(box2).css('display', 'none');
            if(name === '.add-list') {
                $(box).css({ 'display': 'block', 'right': 200, 'top': 222 });
                onClick('#submit', '#text');
                
            } else if(name === '.change_list'){
                var w = e.clientX;
                var y = e.clientY;
                $(box).css({ 'display': 'block', 'left': w - 400, 'top': y - 50});
            }
            $('body').on('click', function (e) {
                $(box).css('display', 'none');
            });
            $(box).on('click', function (e) {
                if (e && e.stopPropagation)
                    e.stopPropagation();
                else {
                    window.event.cancelBubble = true;
                }
            });
        });     
    };

    // 确认的时候向后台发送数据 id点击对象 obj获取内容
    function onClick(id, obj) {
        $(id)[0].onclick = function() {
            let message = $(obj).val();  
            if(message) {
                // TODO 发一个ajax
                console.log(message);
                
            } else {
              //  $(obj).parent().append("<p style='color: red'>请填写内容</p>");       
              if (!$(obj).next().length) {
                $(obj).parent().append("<p style='color: red'>请填写内容</p>");
              }
            }

        }
    };
    cancel('#cancel', '#list_form', '#text');
    cancel('#change_cancel', '#list_change_form', '#change');


    alert('.add-list', '#list_form', '#list_change_form');
    alert('.change_list', '#list_change_form', '#list_form');

});
