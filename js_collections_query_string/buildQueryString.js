const buildQueryString = parameters => Object
    .entries(parameters)
    .sort()
    .join('&')
    .replace(/,/g, '=');

// Teacher's solution
// export default (params) => {
//     const keys = Object.keys(params).sort();
//     return keys.map(k => `${k}=${params[k]}`).join('&');
// };