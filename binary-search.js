const numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let tampungMid = 1;
function binarySearch (arr, target, mid, tampungMid){
    
    debugger;
    // var lihatArr = arr;
    if(!mid){
        var mid = Math.floor(arr.length / 2);
    }
    if(arr.length == 1 && arr[0] !== target){
        return -1;
    } else if(arr[mid] === target){

        console.log('found it!');
        if(!tampungMid){ //bila tampungMid undefined
            return mid;
        } else { //bila ada tampungMid 
            return mid + tampungMid;
        }

        // return mid;
    } else if(arr[mid] < target){
        
        if(!tampungMid){
           var tampungMid = mid;
        } else {
            tampungMid += mid;
        }
        arr.splice(0, mid);
        mid = Math.floor(arr.length / 2);
        return binarySearch(arr, target, mid, tampungMid);
    } else if(arr[mid] > target) {
        arr.splice(mid, arr.length-mid);
        mid = Math.floor(arr.length / 2);
        return binarySearch(arr, target, mid);       
    } else {
        console.log('nothing here!');
        return -1;
    }

}

// const numbers2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let test_array = [1, 2, 3, 4, 5];
console.log(binarySearch(test_array, 3) === 2);//true
test_array = [13, 19, 24, 29, 32, 37, 43]
console.log(binarySearch(test_array, 35) === -1);//true
test_array = [100, 120, 130, 135, 150, 170];
console.log(binarySearch(test_array, 135));
console.log(binarySearch(test_array, 135) === 3)//true
test_array = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(binarySearch(test_array, 14));//3
// console.log(binarySearch(numbers2))
