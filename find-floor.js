function findFloor(arr, num, low = 0, high = arr.length - 1){ 
    // if floor doesnt exsist return -1
if (low > high) return -1;
// this will return the highest num in the array if the floor num exceds the array length
if (num >= arr[high]) return arr[high];
// sets the mid point half the total length of the array
let mid = Math.floor((low + high) /2)
// if the mid point is the floor num retrun mid point num
if (arr[mid] === num) return arr[mid];

if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]){
    return arr[mid - 1];
}

if (num < arr[mid]){
    return findFloor(arr, num, low, mid - 1);
}

return findFloor(arr, num, mid + 1, high)

  
}

module.exports = findFloor