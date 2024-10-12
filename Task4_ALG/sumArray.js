function sumArray(array) {
    if(array.length === 0){
        return 0;
    }

    return array[0] + sumArray(array.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));