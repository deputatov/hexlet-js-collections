const fromPairs = (arr) => {
    return arr.reduce((acc, elem) => {
        return ({...acc, [elem[0]]:elem[1]})
    }, {})
}

// Teacher's solution
// Destructuring assignment 
const fromPairs = (pairs) => pairs.reduce((acc, [key, value]) => ({...acc, [key]: value}), {},);