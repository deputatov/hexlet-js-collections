const wordsCount = (words, stopWords) => {
    const lowerCaseWords = words.map((value) => value.toLowerCase(), words)
    const filteredWords = lowerCaseWords.filter(value => !stopWords.includes(value))
    const countedWords = filteredWords.reduce((acc, value, index, arr) => {
        return acc.has(value) ? acc.set(value, acc.get(value) + 1) : acc.set(value, 1) } , new Map())
    return countedWords
}
export default wordsCount