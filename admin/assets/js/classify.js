// function pushHtml(data) {
//     let classifyBody;
//     for (let i = 0; i < data.length; i++) {
//       classifyBody +=
//         `
//             <div class="am-u-sm-4">${data[i].name}</div>
//             <div class="am-u-sm-1">
//                 <i class="am-icon-long-arrow-down"></i>
//                  <i class="am-icon-long-arrow-up"></i>
//             </div>
//             <div class="am-u-sm-2">
//                 ${data[i].time}
//             </div>
//             <div class="am-u-sm-2">
//                 ${data[i].number}
//             </div>
//             <div class="am-u-sm-3" id=${data[i].id}>
//                 <a href="#" class="delete_list">删除分类</a>
//                 <a href="#" class="change_list">修改名称</a>
//             </div>
//         `;
//     }
//     $('#classify-body').html(classifyBody);
// }
// // 一开始就发一个ajax
// $.get('', function(data) {
//     pushHtml(data);
// });

$(function () {
    // 取消的时候删除
    function cancel(box1, box2, obj) {
        $(box1).on('click', function () {
            $(obj).val('');
            // 如何有红色警告就删除
            if ($(obj).next().length) {
                $(obj).next().remove();
            }

            $(box2).css("display", "none");
        });
    };

    // input里有内容的时候把下面警告文字删除
    function deleteFont(obj) {      
        $(obj)[0].onkeyup = function(e) {
            const val = $(this).val();
            const len = $(this).next().length;         
            if(val && len) {
                $(this).next().remove();
            }
        }
    }
    // 点击添加分类和修改名称的时候加
    function alert(name, box, box2, input, btn) {

        $(name).on('click', function(e) {
           
            if (e && e.stopPropagation)
                e.stopPropagation();
            else {
                window.event.cancelBubble = true;
            }

            deleteFont(input);

            $(box2).css('display', 'none');
            if(name === '.add-list') {
                $(box).css({ 'display': 'block', 'right': 200, 'top': 222 });
                onClick(btn, input, 'categories/store');
            } else if(name === '.change_list'){
                var w = e.clientX;
                var y = e.clientY;
                $(box).css({ 'display': 'block', 'left': w - 400, 'top': y - 50});
                const id = $(this).attr("attr-id");              
                onClick(btn, input, 'categories/edit', id);

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
    function onClick(id, obj, url, listId) {
        $(id)[0].onclick = function() {
            const message = $(obj).val();   
            if(message) {
                // TODO 发一个ajax
                const data = {
                    message: message,
                    id: listId
                }
                sendMes(url, data)
                
            } else {
              //  $(obj).parent().append("<p style='color: red'>请填写内容</p>");       
              if (!$(obj).next().length) {
                $(obj).parent().append("<p style='color: red'>请填写内容</p>");
              }
            }

        }
    };
    // 删除分类时发送id
    function deleteList(obj, url) {
        $(obj).on('click',function() {
            const id = $(this).attr('attr-id');
            console.log(id);
            
            const data = {
                id: id
            };
            sendMes(url, data);
        })
    };

    // 发一个ajax
    function sendMes(url, data) {
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: data,
            success: function(datas) {
                // pushHtml(datas);
                location.reload();
            },
            error: function(status) {
                alert('发生错误' + status);
            }
        })
    }
    cancel('#cancel', '#list_form', '#text');
    cancel('#change_cancel', '#list_change_form', '#change');

    // 添加分类按钮 一个弹出框id 另外一个弹出框id(为了两个弹出框不同时呈现) 要提交input 提交按钮
    alert('.add-list', '#list_form', '#list_change_form', '#text', '#submit');
    alert('.change_list', '#list_change_form', '#list_form', '#change', '#change_submit');

    // 刪除
    deleteList('.delete_list', 'categories/destroy');
});
