const chunk = (arr, groupsize) => {
    const iter = (acc, items) => {
        if (items.length === 0) {
            return acc
        }
        return iter([...acc, items.slice(0, groupsize)], items.slice(groupsize))
    }
    return iter([], arr)    
}

export default chunk