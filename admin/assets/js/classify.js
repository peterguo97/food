$(function () {
    // 取消的时候删除
    function cancel(box1, box2) {
        $(box1).on('click', function () {
            $(box2).css("display", "none");
        });
    }
    cancel('#cancel', '#list_form');
    cancel('#change_cancel', '#list_change_form');  
    // $("#list_form").on('click', function(e) {
        
    //     if ($('#list_form')[0].style.display === 'block') {
    //         $('body').on('click', function () {
    //             $('#list_form').css({'display': 'none'});
    //         });
    //         if (e && e.stopPropagation)
    //             e.stopPropagation();
    //         else {
    //             window.event.cancelBubble = true;
    //         }

    //     }
    //     // console.log($('#list_form')[0].style.display);
       
           
    // });
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
    alert('.add-list', '#list_form', '#list_change_form');
    alert('.change_list', '#list_change_form', '#list_form');
});