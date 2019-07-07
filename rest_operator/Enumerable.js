class Enumerable {
    constructor(collection, operations) {
        this.collection = collection;
        this.operations = operations || [];
    }

    build(fn) {
        return new Enumerable(this.collection.slice(), this.operations.concat(fn));
    }

    // BEGIN (write your solution here)
    where(...args) {
        const operations = args.reduce((acc, elem) => {
            if (typeof (elem) === 'function') {
                return acc.concat(coll => coll.filter(elem))
            } else {
                return acc.concat(Object.keys(elem).map(value => {
                    return coll => coll.filter(car => car[value] === elem[value])
                }))
            }
        }, [])
        return this.build(operations)
    }
    // END

    getProcessedCollection() {
        if (!this.memo) {
            this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
        }

        return this.memo;
    }

    get length() {
        return this.getProcessedCollection().length;
    }

    toArray() {
        return this.getProcessedCollection().slice();
    }
}

// Teacher's solution

where(...predicates) {
    const fns = predicates.map((predicate) => {
        if (typeof predicate === 'function') {
            return coll => coll.filter(predicate);
        }

        const keys = Object.keys(predicate);
        return coll => coll.filter(element =>
            keys.every(key => predicate[key] === element[key]));
    });
    return this.build(fns);
}