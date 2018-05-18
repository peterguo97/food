function checkImg(data) {
    if(typeof FileReader !== 'undefined'){  
        var file = data.files[0];
        if((file.type).indexOf("image/") === -1){
            alert("提示请上传图片!warning");
            data.value = "";
        }  
    }
    else{ 
        var fileName= data.value;
        console.log(fileName);
        var suffixIndex=fileName.lastIndexOf(".");  
        var suffix=fileName.substring(suffixIndex+1).toUpperCase();
        if(suffix!=="BMP"&&suffix!=="JPG"&&suffix!=="JPEG"&&suffix!=="PNG"&&suffix!=="GIF"){  
            alert("提示请上传图片（格式BMP、JPG、JPEG、PNG、GIF等");  
        }  
    }  
}

function postForm(e){
    e.preventDefault;
    let name = document.getElementById("goods_name").value;
    let image = document.getElementById("goods_image").files[0];
    let selectNode = document.getElementById("doc-select-1");
    let selectIndex = selectNode.selectedIndex;
    let label =  selectNode.options[selectIndex].text;
    let price = document.getElementById("goods_price").value;
    let des = document.getElementById("goods_des").value;
    let save = document.getElementById("goods_save").value;
    let arr = [{name: name}, {image: image}, {label: label}, {price: price}, {des: des}, {save: save}];
    let formdata = new FormData();
    arr.forEach((obj)=>{
        for(let attr in obj){
            if(obj.hasOwnProperty(attr)){
                if(! obj[attr] ){
                    throw new Error( attr + "不能为空");
                }
                else{
                    formdata.append(attr,obj[attr]);
                }
            }
        }
    })
    $.ajax({
        url: "/hello",
        data: formdata,
        type: "post",
        dataType: "json",
        cache: false,//上传文件无需缓存
        processData: false,//用于对data参数进行序列化处理 这里必须false
        contentType: false, //必须
        success: function (result) {
            alert("上传完成!");
        },
    })
}

function checkType(value, attr,message){
    if( typeof value !== attr){
        throw new Error(message);
        return false;
    }
    else{
        return true;
    }
}