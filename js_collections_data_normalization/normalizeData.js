export default (data, beginDate, endDate) => {
    const arrayOfDates = eachDay(new Date(beginDate), new Date(endDate)).map(elem => format(elem, 'DD.MM.YYYY'));
    const keyedData = keyBy(data, 'date');
    return arrayOfDates.reduce((acc, elem) => {
        if (get(keyedData, elem)) {
            acc.push(keyedData[elem]);
            return acc;
        }
        acc.push({
            value: 0,
            date: elem
        });
        return acc;
    }, []);
};

// Teacher's solution
// 
// export default (data, begin, end) => {
//     const dates = keyBy(data, 'date');
//     const result = eachDay(begin, end)
//       .map(day => format(day, 'DD.MM.YYYY'))
//       .map(date => get(dates, date, { date, value: 0 }));
//     return result;
// };