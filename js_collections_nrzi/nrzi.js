export default signal => signal
    .split('')
    .map((elem, i, arr) => {
        if (arr[i - 1] === '|') return 0;
        return elem;
    })
    .filter(elem => elem !== '|')
    .map((elem) => {
        if (elem === 0) return 1;
        return 0;
    })
    .join('');

// Teacher's solution
// export default str => str
//   .split('')
//   .map((e, i, arr) => {
//     if (e === '|') return '';
//     return arr[i - 1] === '|' ? 1 : 0;
//   })
//   .join('');