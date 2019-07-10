const findIndexOfNearest = (arr, num) => {
    if (arr.length === 0) {
        return null;
    }
    return arr.reduce((currentIndex, currentElement, index) => {
        const a = Math.abs(currentElement - num)
        const b = Math.abs(arr[currentIndex] - num)
        if (a < b) {
            return index
        }
        return currentIndex
    }, 0);
}