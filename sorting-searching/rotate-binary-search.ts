const arr: number[] =  [4,5,6,7,8,9,1,2,3];
const len: number = arr.length;

function findPivot2(start: number, end: number)  {
    
    const mid = Math.floor((start + end) / 2);
    
    console.log(start, end, mid)
    if (start >= end) {
        return start;
    }
    if(arr[mid] > arr[mid + 1]) {
        return mid;
    } else if(arr[mid] < arr[mid - 1]) {
        return mid - 1;
    } else if ( arr[start] >= arr [mid]) {
        // return findPivot(start, mid - 1);
    } else {
        // return findPivot(mid + 1, end);
    }
}


function searchWithoutPivot(low: number, high:number, toFind: number): number {

    const mid = Math.floor((low + high) / 2);

    if(low > high) {
        return  -1;
    }

    if(arr[mid] == toFind) {
        return mid;
    }

    if(arr[low] <= arr[mid]) {
        if(arr[low] <= toFind && toFind <= arr[mid]) {
            return searchWithoutPivot(low, mid - 1, toFind);
        }
        return searchWithoutPivot(mid + 1, high, toFind);
    }

    if(arr[mid] <= toFind && toFind <= arr[high]) {
        return searchWithoutPivot(mid + 1, high, toFind);
    }
    return searchWithoutPivot(low, mid - 1, toFind);
    
}

console.log(searchWithoutPivot(0, len - 1, 10 ))
