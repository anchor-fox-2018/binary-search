/*
PSEUDOCODE
0. buat function binarySearch dengan menerima 4 parameter : arr, target, mid, tampungMid.
1. buat kondisi jika mid undefined, deklarasi mid sebagai nilai bulat floor panjang arr dibagi dua
2.0 lakukan rekursif dengan basecase ketika panjang array 1 dan isi array bukan target yang diinginkan kembalikan nilai -1
2.1. (else) jika kondisi arr pada indeks ke mid sama dengan target, munculkan bahwa target ditemukan.
    2.1.0 jika tampungMid undefined, kembalikan nilai mid sebagai posisi target.
    2.1.1 (else) kembalikan nilai mid ditambah dengan tampungMid
2.2 (else) jika arr pada indeks ke mid lebih kecil dari target
    2.2.0 jika tampungMid undefined, deklarasi tampungMid sama dengan nilai mid
    2.2.1 (else) tambahkan tampungMid yang sudah ada dengan nilai mid
    2.2.2 potong arr menggunakan splice dari indeks 0 sampai mid.
    2.2.3 deklarasi ulang mid untuk arr baru
    2.2.4 kembalikan fungsi binarySearch dengan beberapa parameter baru yang sudah disiapkan(arr, target, mid, tampungMid)
2.3 (else) jika arr pada indeks ke mid lebih besar dari target
    2.3.0 potong arr menggunakan splice dari indeks ke mid sampai ke ujung (arr.lengt-1)
    2.3.1 deklarasi ulang mid untuk arr baru
    2.3.2 kembalikan fungsi binarySearch dengan beberapa parameter baru yang sudah disiapkan(arr, target, mid, tampungMid)
*/  


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
