export default (set1 , set2) => new Set([...set1].filter(n => !set2.has(n)))
