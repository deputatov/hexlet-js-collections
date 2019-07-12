const findodd = (numbers) => {
    const setOfNumbers = new Set(numbers)
    const copyNumbers = numbers.slice().sort()
    let result
    setOfNumbers.forEach(elem => {
        const firstIndex = copyNumbers.indexOf(elem)
        const lastIndex = copyNumbers.lastIndexOf(elem)
        if ((lastIndex - firstIndex + 1) % 2 !== 0) {
            result = elem
        }
    })
    return result
}

const findodd2 = (numbers) => {
    const iter = (items, currentIndex) => {
        if (currentIndex === items.length) {
            return null
        }
        const currentElement = items[currentIndex]
        const lastIndex = items.lastIndexOf(currentElement)
        if ((lastIndex - currentIndex + 1) % 2 !== 0) {
            return currentElement
        }
        return iter(items, lastIndex + 1)
    }
    return iter(numbers.slice().sort(), 0)
}

// Teacher's solution 
// xor operator
const findodd3 = (arr) => arr.reduce((acc, num) => acc ^ num, 0);

