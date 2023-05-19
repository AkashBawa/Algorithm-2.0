const arr: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const len = arr.length;
function binarySearch(toFind: number, start: number, end : number) :number{

    if(start > end) {
        return -1;
    }

    const mid =  Math.floor((start + end) / 2 );

    if(toFind === arr[mid] ) {
        return mid;
    } else if (toFind < arr[mid]) {
        return binarySearch(toFind, start, mid - 1);
    } else {
        return binarySearch(toFind, mid + 1, end);
    }
}

console.log(binarySearch( 16, 0, len));