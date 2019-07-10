const difference = (arr1, arr2) => arr1.filter(elem => !arr2.includes(elem))

const difference2 = (arr1, arr2) => {
    const set2 = new Set(arr2)
    return arr1.filter(elem => !set2.has(elem))
}