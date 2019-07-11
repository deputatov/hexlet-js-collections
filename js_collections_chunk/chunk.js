const chunk = (arr, groupsize) => {
    const sets = []
    let i = 0, begin = 0, end = groupsize
    const chunks = arr.length / groupsize
    while(i < chunks) {
        sets[i] = arr.slice(begin, end)
        i += 1;
        begin = end;
        end = begin + end;
    }
    return sets
}

// Array.prototype.chunk = function(groupsize){
//     var sets = [], chunks, i = 0;
//     chunks = this.length / groupsize;

//     while(i < chunks){
//         sets[i] = this.splice(0,groupsize);
// 	i++;
//     }
	
//     return sets;
// };

const result1 = chunk(['a', 'b', 'c', 'd'], 2);
console.log('1: ', result1)
// expect(result1).toEqual([['a', 'b'], ['c', 'd']]);

const result2 = chunk(['a', 'b', 'c', 'd'], 3);
console.log('2: ', result2)
// expect(result2).toEqual([['a', 'b', 'c'], ['d']]);

const result3 = chunk([], 4);
console.log('3: ', result3)
// expect(result3).toEqual([]);

const result4 = chunk(['a'], 2);
console.log('4: ', result4)
// expect(result4).toEqual([['a']]);

const result5 = chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2);
console.log('5: ', result5)
// expect(result5).toEqual([['a', 'b'], ['c', 'd'], ['e', 'f']]);

