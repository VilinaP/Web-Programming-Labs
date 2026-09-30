/************************ STUDENT INFORMATION ***********************
Course: CPTR-212 Web Programming
Assignment: Lab 8 - JavaScript Values, Types, Operators, and Functions
Full Name: Vilina Prenko
Date: 11.11.2025

Honor Statement: I hereby declare that I will complete the assignment 
independently and will not seek unauthorized assistance from other 
students or external sources. I understand that collaboration with 
others or the use of artificial intelligence tools is not permitted, 
and I commit to ensuring that my work is entirely my own. [check]

/********************* ASSIGNMENT INSTRUCTIONS **********************
In this assignment, you will learn to use basic values, types, and
functions to solve some simple problems with JavaScript. Follow the
provided lab check-off sheet, and get each problem approved BEFORE
moving onto the next one. You must write appropriate tests for
each function.

NOTE: You may NOT import OR include any libraries (e.g. through NPM / Yarn)
and you may not use any of the standard libraries (e.g., Math).

Once you've completed all of the functions and their appropriate tests,
provide your code to the instructor for grading. You have 3 attempts
to successfully pass the instructor's test suite.

/**
 * Generates a countdown from the given number to zero, followed by "blastoff!".
 *
 * @param {number} amount - The starting number for the countdown (must be a non-negative integer number).
 * @returns {string} The countdown string ending with "0... blastoff!", or `"Invalid Input"` if the input is not a valid number, is negative, or is non-integer.
 * @example
 * 
 * blastoff(5);    // returns "5, 4, 3, 2, 1, 0... blastoff!"
 */
export function blastoff(amount) {
    if (typeof amount === "number" && amount >= 0 && Number.isInteger(amount)){
        let myString = ''
        for(let i = amount; i > 0; i--){
            myString += `${i}, `
        }
        myString += `0... blastoff!`
        return myString
    } else{
        return 'Invalid Input'
    }
}

/**
 * Calculates the average of a list of numbers.
 *
 * @param {...number} values - A list of numbers to average.
 * @returns {(number|string)} The average of the numbers, or `"Invalid Input"` if any value is not a number or if no numbers are provided.
 * @example
 * 
 * average(2, 4, 6);        // returns 4
 */
export function average(...values) {
    if(values.length === 0){
        return 'Invalid Input'
    }
    let total = 0
    let numberOfNumbers = 0
    for(let i = 0; i < values.length; i++){
        if (typeof values[i] !== 'number' || Number.isNaN(values[i]) || values[i] === ''){
            return 'Invalid Input'
        }
    }
    for (let i = 0; i < values.length; i++){
        total += values[i]
        numberOfNumbers++
    }
    return total/numberOfNumbers
       
}

/**
 * Counts the number of vowels and consonants in a given string.
 *
 * @param {string} value - The input string to analyze.
 * @returns {string} A string indicating the number of vowels and consonants, or `"Invalid Input"` if the input is not a string.
 * @example
 * 
 * vowelsAndConsonants("hello");      // returns "Vowels: 2, Consonants: 3"
 */
export function vowelsAndConsonants(value) {
    const vowels = 'aeiou'+ 'AEIOU'
    const consonants = 'bcdfghjklmnpqrstvwxyz' + 'BCDFGHJKLMNPQRSTVWXZY'
    let numVowels = 0
    let numConsonants = 0
    if(typeof value === 'string'){
        for(let i = 0; i < value.length; i++){
            if (vowels.includes(value[i])){
                numVowels++
            } else if(consonants.includes(value[i])){
                numConsonants++
            } 
        }
        return `Vowels: ${numVowels}, Consonants: ${numConsonants}`
    } else{
        return 'Invalid Input'
    }
}

/**
 * Returns the greatest number from a list of values.
 *
 * @param {...number} values - A list of numbers to compare.
 * @returns {(number|string)} The greatest number in the list, `"Invalid Input"` if any value is not a number, or `-Infinity` if no value is provided.
 * @example
 * 
 * greatest(1, 5, 3, 9);        // returns 9
 */
export function greatest(...values) {
    if (values.length === 0){
        return -Infinity
    } else {
        for(let i = 0; i < values.length; i++){
            if (typeof values[i] !== 'number' || Number.isNaN(values[i])){
                return 'Invalid Input'
            } else if (values[i] === Infinity){
                return Infinity
            }
        }
        
        let great = values[0]
        for(let i = 0; i < values.length; i++){
            if (values[i] > great){
                great = values[i]
            }
        
        }
        return great
    }
}

/**
 * Performs basic arithmetic operations: addition, subtraction, multiplication, and division.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {string} operation - The operation to perform: 'add', 'subtract', 'multiply', or 'divide'.
 * @returns {(number|string)} The result of the arithmetic operation, `"Invalid Input"` if the operation is not recognized, or `"Invalid Input"` if one of the operands isn't a number.
 * If division by zero occurs, returns `Infinity`.
 * @example
 * 
 * calculator(5, 3, 'add');      // returns 8
 */
export function calculator(a, b, operation) {
    if (Number.isNaN(a) || Number.isNaN(b)){
        return 'Invalid Input'
    }
    if(typeof a === 'number' && typeof b === 'number' && (Number.isFinite(a) || Number.isFinite(b))){
        if (operation === 'add'){
            return a + b
        } else if (operation === 'subtract'){
            return a - b
        }
        else if (operation === 'multiply'){
            return a * b
        }
        else if (operation === 'divide'){
            if (b === 0){
                return Infinity
            }
            return a / b
        } else{
            return 'Invalid Input'
        }
    } else{
        return 'Invalid Input'
    }
}

/**
 * Checks if the given string is a palindrome (reads the same forwards and backwards).
 *
 * @param {string} str - The string to check.
 * @returns {(boolean|string)} Returns `true` if the string is a palindrome, 
 * `false` if it's not, or `"Invalid Input"` if the input is not a string.
 * 
 * @example
 * isPalindrome("madam"); // returns true
 */
export function isPalindrome(str) {
    if (typeof str !== 'string'){
        return 'Invalid Input'
    }
    else{
        const reversedString = str.split('').reverse().join('')
        return str === reversedString
    }
}

/**
 * Performs a bitwise NOT operation on a given bitstring.
 *
 * @param {string} bitstring - A string consisting of '0's and '1's.
 * @returns {(string|string)} The resulting bitstring after applying the NOT operation, 
 * or `"Invalid Input"` if the input is not a valid bitstring.
 * 
 * @example
 * bitwiseNot("1101");      // returns "0010"
 */
export function bitwiseNot(bitstring) {
    if (typeof bitstring !== 'string' || bitstring === ''){
        return 'Invalid Input'
    }
    const splitBitString = bitstring.split('')
    const NewString = []
    for(const bit of splitBitString){
        if (bit === '0'){
        NewString.push('1')
        } else if (bit === '1'){
            NewString.push('0')
        } else {
            return 'Invalid Input'
        }
    }

    return NewString.join('')

}