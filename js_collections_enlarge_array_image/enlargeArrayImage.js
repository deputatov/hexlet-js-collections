export default arr => _
  .flatten(arr
    .map(elem => _.flatMap(elem, n => [n, n]))
    .map(elem => [elem, elem]));

// Teacher's solution
// const duplicateEachItemInArray = arr => _.flatten(arr.map(item => [item, item]));

// const enlargeArrayImage = (arr) => {
//   const horizontallyStretched = arr.map(duplicateEachItemInArray);
//   return duplicateEachItemInArray(horizontallyStretched);
// };

// export default enlargeArrayImage;