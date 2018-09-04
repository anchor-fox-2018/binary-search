
function binnary_search(angka,test_array,mid){
    var arrayBaru = [];
    var sama = 0;
    for(var i = 0;i < test_array.length;i++){
        if(angka === test_array[i]){
            sama++
        }
        var isi = [];
        isi.push(i);
        isi.push(test_array[i]);
        arrayBaru.push(isi);
    }
    test_array = arrayBaru
    //console.log(test_array)
    if(!mid){
        mid = Math.floor(test_array.length/2);
    }
    if(angka > test_array[test_array.length-1][1]||angka < test_array[0][1]||sama === 0){
        return -1
    }
    if(test_array[mid][1] === angka){
        return test_array[mid][0]
    }else{
        test_array.splice(0,mid);
        //console.log(test_array)
        mid = Math.floor(test_array.length/2);
        return binnary_search(angka,test_array,mid)
    }
}
// let test_array = [1,2,3,4,5];
// console.log(binnary_search(3, test_array)=== 2)//true
let test_array = [13,19,24,29,32,37,43];
console.log(binnary_search(35, test_array)=== -1)//true
// let test_array = [100,120,130,135,150,170];
// console.log(binnary_search(135,test_array)=== 3)//true
