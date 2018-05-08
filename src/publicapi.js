export function hasItem(arr,item,attr) {
    let has = false;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element[attr] === item[attr]){
            has = true;
            break;
        }
    }
    return has;
}