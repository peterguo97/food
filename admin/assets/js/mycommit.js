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