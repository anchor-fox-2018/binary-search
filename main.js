/**
 * DECLARE variable left as 0
 * DECLARE variable right as array length minus 1
 * WHILE left is less than or equal right
 *  DECLARE variable mid = floor (left + (right - left) / 2)
 *  IF array index mid equal target
 *      RETURN floor mid
 *  IF array index mid lesser than target
 *      left = mid + left
 *  ELSE
 *      right = mid - left
 * RETURN -1
 */
function binary_search(target, array) {
    let left = 0; let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        //check if target present on array
        if (array[mid] === target) {
            return Math.floor(mid);
        }
        // IF target is larger then ignore left half
        if (array[mid] < target) {
            left = mid + left;
        }
        // IF target is smaller then ignore right half
        else {
            right = mid - left;
        }
    }
    return -1;
}
// binary_search(3, [1, 2, 3, 4, 5])
// binary_search(15, [11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
console.log(binary_search(3, [1, 2, 3, 4, 5])) // 2
console.log(binary_search(35, [13, 19, 24, 29, 32, 37, 43])) //-1
console.log(binary_search(135, [100, 120, 130, 135, 150, 170])) //3

    // sort dulu datanya pake
    // habis di scrollTo, potong di tengah2
    // let arraySorted = array;
    // for (let i = 0; i < arraySorted.length; i++) {
    //     let minIndex = i;
    //     for (let j =  i + 1; j < arraySorted.length; j++) {
    //         if (arraySorted[j] < arraySorted[minIndex]) {
    //             minIndex = j;
    //         }
    //     }
    //     let temp = arraySorted[minIndex];
    //     array[minIndex] = arraySorted[i];
    //     arraySorted[i] = temp;
    // }