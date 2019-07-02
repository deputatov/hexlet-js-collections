export default (numbers) => {
    return numbers.reduce((acc, value, index, arr) => !acc.includes(value) ? acc.concat(value) : acc, [])
}