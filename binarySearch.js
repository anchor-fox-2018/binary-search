/*
CREATE FUNCTION binary_search with param num, arr, beggining index (a), end index(b)
  STORE mid with middle index of arr rounded down
  STORE midValue with the value of arr in index mid

  IF beggining greater than end
    RETURN -1
  ELSE IF midValue bigger than num
    DO recursive with param num, arr , beggining, and mid - 1
  ELSE IF midValue less than num
   DO recursive with param num, arr, end, and mid + 1
  ELSE 
    RETURN mid
  ENDIF
ENDFUNCTION
*/

function binary_search(num, arr, a = 0, b = arr.length - 1) {
  let mid = Math.floor((a + b) / 2);
  let midValue = arr[mid];

  if (a > b) {
    return -1;
  } else if (midValue > num) {
    return binary_search(num, arr, a, mid - 1);
  } else if (midValue < num) {
    return binary_search(num, arr, mid + 1, b);
  } else {
    return mid;
  }
}

let test_array1 = [1,2,3,4,5,6,7,8,9];
let test_array2 = [13,19,24,29,32,37,43];
let test_array3 = [100,120,130,135,150,170];

// console.log(binary_search(3, test_array1));
// console.log(binary_search(35, test_array2));

console.log(binary_search(3, test_array1) === 2); // true
console.log(binary_search(35, test_array2) === -1); // true
console.log(binary_search(135, test_array3) === 3); // true
