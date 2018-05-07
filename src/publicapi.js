export function hasItem(arr,item,attr) {
    let has = false;
    arr.forEach(element => {
       if(element[attr] === item[attr]){
           has = true;
       } 
    });
    return has;
}