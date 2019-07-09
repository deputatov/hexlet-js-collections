const objectify = (args, func) => {
    return args.reduce((acc, item) => {
        return ({
            ...acc,
            [func(item)]: item
        })
    }, {})
}

// Teacher's solution

export default (coll, select) => coll.reduce((acc, item) => ({
    ...acc,
    [select(item)]: item
}), {});