const getCarsCountByYear = (cars) => {
    const iter = (arr, acc) => {
        if (arr.length === 0) {
            return acc
        }
        const [{year}, ...rest] = arr
        return iter(rest, {...acc, [year]: has(acc, year) ? acc[year] + 1 : 1})
    }
    return iter(cars, {})
}

export default getCarsCountByYear

// Teacher's solution

export default (cars) => {
    const iter = (items, acc) => {
      if (items.length === 0) {
        return acc;
      }
      const [{ year }, ...rest] = items;
      const newValue = has(acc, year) ? acc[year] + 1 : 1;
      return iter(rest, { ...acc, [year]: newValue });
    };
  
    return iter(cars, {});
  };