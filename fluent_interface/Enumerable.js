class Enumerable {
    constructor(collection) {
        this.collection = collection;
    }

    // BEGIN (write your solution here)
    select(fn) {
        this.collection = this.collection.map(fn)
        return this
    }
    // END

    // BEGIN (write your solution here)
    orderBy(fn, direction = 'asc') {
        this.collection = this.collection.sort((a, b) => {
            if (direction === 'asc') {
                if (fn(a) > fn(b)) {
                    return 1
                } else {
                    return -1
                }
            } else if (direction === 'desc') {
                if (fn(a) < fn(b)) {
                    return 1
                } else {
                    return -1
                }
            }
        })
        return this
    }
    // END

    where(fn) {
        this.collection = this.collection.filter(fn);
        return this;
    }

    toArray() {
        return this.collection.slice();
    }
}

export default Enumerable;

// teacher solution

orderBy(fn, direction = 'asc') {
    const compareResult = direction === 'asc' ? 1 : -1;
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      if (a1 > b1) {
        return compareResult;
      }
      if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    this.collection.sort(comparator);
    return this;
  }