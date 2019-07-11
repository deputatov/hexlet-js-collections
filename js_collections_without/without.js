const without = (arr1, ...arr2) => {
    const set = new Set(arr2)
    return arr1.filter(item => !set.has(item))
}