export default (arr1, arr2) => {
    const set2 = new Set(arr2);
    return [...(new Set(arr1.filter(elem => set2.has(elem))))];
};