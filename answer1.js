// Homework
// Time is provided only with indicative propose. You ARE NOT restricted in time matter.
// Task 1 (25 min)
// Given a string nums, which contains only digits, and a array of numbers predefinedNumbers,
// add colons in nums to construct a new strings, where each number between colons is a valid number from predefinedNumbers. 
// Return all possible strings. 
const nums = "14316342115414321154";
const predefinedNumbers = ["21154","143","21154143", "1634", "163421154"]

function makeNumSentences(nums, predefinedNumbers) {
    const matchedString = []
    const resultArray = []
    let trimmedString 
 
    const findMatchingNumber = (string) => {
        for(let i=0; i<=trimmedString.length; i++) {
            if(trimmedString && predefinedNumbers.includes(string.substring(0,i))) {
                matchedString.push(string.substring(0,i));
                trimmedString = string.slice(i,string.length);
                findMatchingNumber(trimmedString)
            }
        }
    }
 
 
    for(let i=0; i<=nums.length ; i++) {
        if(!trimmedString && predefinedNumbers.includes(nums.substring(0, i))  ) {
            matchedString.push(nums.substring(0, i))
            trimmedString = nums.slice(i,nums.length)
            findMatchingNumber(trimmedString, predefinedNumbers)
        } 
       
    }
 
  resultArray.push(`:${matchedString.toString().replace(/\s*,/g,":")}:`)
  return resultArray
}

console.log( makeNumSentences("14316342115414321154", ["21154","143","21154143", "1634", "163421154"]))

module.exports.makeNumSentences = makeNumSentences
