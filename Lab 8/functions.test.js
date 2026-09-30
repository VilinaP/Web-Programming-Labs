import {describe, it, expect} from "vitest"
import { blastoff, average, vowelsAndConsonants, greatest, calculator, isPalindrome, bitwiseNot } from "./functions"

describe('main', function(){
    describe('blastoff', function(){
        it('counts down', function(){
            const result = blastoff(5)
            expect(result).toEqual("5, 4, 3, 2, 1, 0... blastoff!")
        })
        it('not a number', function(){
            const result = blastoff('hi')
            expect(result).toEqual("Invalid Input")
        })
        it('negative number', function(){
            const result = blastoff(-5)
            expect(result).toEqual("Invalid Input")
        })
        it('not a whole number', function(){
            const result = blastoff(5.5)
            expect(result).toEqual("Invalid Input")
        })
        it('decimal number', function(){
            const result = blastoff(1/5)
            expect(result).toEqual("Invalid Input")
        })
    })

    describe('average', function(){
        it('counts average of same number', function(){
            const result = average(1, 1, 1, 1)
            expect(result).toEqual(1)
        })
        it('counts average of random numbers', function(){
            const result = average(2, 4, 6)
            expect(result).toEqual(4)
        })
        it('empty string', function(){
            const result = (average())
            expect(result).toEqual("Invalid Input")
        })
        it('strings', function(){
            const result = average('hi', 'bye')
            expect(result).toEqual("Invalid Input")
        })
        it('NaN', function(){
            const result = average(NaN)
            expect(result).toEqual("Invalid Input")
        })
        it('more strings', function(){
            const result = average('hi')
            expect(result).toEqual("Invalid Input")
        })
        it('string with numbers', function(){
            const result = average(1, 2, 'hi', 5)
            expect(result).toEqual("Invalid Input")
        })
        it('NaN in between numbers', function(){
            const result = average(1, 2, NaN, 6)
            expect(result).toEqual("Invalid Input")
        })
    })

    describe('vowelsAndConsonants', function(){
        it('counts the number of vowels and consonants', function(){
            const result = vowelsAndConsonants('hello')
            expect(result).toEqual("Vowels: 2, Consonants: 3")
        })
        it('counts the number of vowels and consonants for uppercase letters', function(){
            const result = vowelsAndConsonants('HELLO')
            expect(result).toEqual("Vowels: 2, Consonants: 3")
        })
        it('mix of capitals and lowercase', function(){
            const result = vowelsAndConsonants('HeLlO')
            expect(result).toEqual("Vowels: 2, Consonants: 3")
        })
        it('useing Y and y', function(){
            const result = vowelsAndConsonants('HeLlOYy')
            expect(result).toEqual("Vowels: 2, Consonants: 5")
        })
        it('only consonants', function(){
            const result = vowelsAndConsonants('HhHhH')
            expect(result).toEqual("Vowels: 0, Consonants: 5")
        })
        it('only vowels', function(){
            const result = vowelsAndConsonants('AaAaA')
            expect(result).toEqual("Vowels: 5, Consonants: 0")
        })
        it('empty string', function(){
            const result = vowelsAndConsonants("")
            expect(result).toEqual("Vowels: 0, Consonants: 0")
        })
        it('a number', function(){
            const result = vowelsAndConsonants(5)
            expect(result).toEqual("Invalid Input")
        })
        it('counts the number of vowels and consonants for string of numbers', function(){
            const result = vowelsAndConsonants('1826645')
            expect(result).toEqual("Vowels: 0, Consonants: 0")
        })
    })

    describe('greatest', function(){
        it('finds the greatest of the same numbers', function(){
            const result = greatest(1, 1, 1, 1)
            expect(result).toEqual(1)
        })
        it('finds the greates of random numbers', function(){
            const result = greatest(2, 4, 6)
            expect(result).toEqual(6)
        })
        it('two values', function(){
            const result = greatest(0, 6)
            expect(result).toEqual(6)
        })
        it('not a number', function(){
            const result = greatest('')
            expect(result).toEqual("Invalid Input")
        })
        it('strings', function(){
            const result = greatest('hi', 'bye')
            expect(result).toEqual("Invalid Input")
        })
        it('-Infinity', function(){
            const result = greatest(1, 2, 3, -Infinity)
            expect(result).toEqual(3)
        })
        it('no numbers = -Infinity', function(){
            const result = greatest()
            expect(result).toEqual(-Infinity)
        })
        it('passing Infinity', function(){
            const result = greatest(Infinity, 1, 2, 3)
            expect(result).toEqual(Infinity)
        })
        it('paasing -Infinity', function(){
            const result = greatest(-Infinity)
            expect(result).toEqual(-Infinity)
        })
        it('one value', function(){
            const result = greatest(1)
            expect(result).toEqual(1)
        })
        it('one of the values is NaN', function(){
            const result = greatest(1, 3, 100, NaN, 200)
            expect(result).toEqual('Invalid Input')
        })
    })

    describe('calculator', function(){
        it('adds two numbers', function(){
            const result = calculator(1, 1, 'add')
            expect(result).toEqual(2)
        })
        it('subtracts two numbers', function(){
            const result = calculator(2, 4, 'subtract')
            expect(result).toEqual(-2)
        })
        it('multiply two numbers', function(){
            const result = calculator(2, 4, 'multiply')
            expect(result).toEqual(8)
        })
        it('divides two numbers', function(){
            const result = calculator(4, 2, 'divide')
            expect(result).toEqual(2)
        })
        it('divide by 0', function(){
            const result = calculator(4, 0, 'divide')
            expect(result).toEqual(Infinity)
        })
        it('more divide by 0', function(){
            const result = calculator(120, 0, 'divide')
            expect(result).toEqual(Infinity)
        })
        it('divide NaN by 0', function(){
            const result = calculator(NaN, 0, 'divide')
            expect(result).toEqual('Invalid Input')
        })
        it('not a number', function(){
            const result = calculator('')
            expect(result).toEqual("Invalid Input")
        })
        it('strings', function(){
            const result = calculator('hi', 'bye')
            expect(result).toEqual("Invalid Input")
        })
        it('invalid operator', function(){
            const result = calculator(2, 4, '=')
            expect(result).toEqual("Invalid Input")
        })
        it('on of the values is NaN', function(){
            const result = calculator(NaN, 1, 'add')
            expect(result).toEqual("Invalid Input")
        })
        it('both numbers are Infinity', function(){
            const result = calculator(-Infinity, Infinity, 'add')
            expect(result).toEqual("Invalid Input")
        })
        it('one number is Infinity', function(){
            const result = calculator(12, Infinity, 'add')
            expect(result).toEqual(Infinity)
        })
        it('one number is -Infinity', function(){
            const result = calculator(12, -Infinity, 'add')
            expect(result).toEqual(-Infinity)
        })
    })
    describe('isPalindrome', function(){
        it('word is not a polindrome', function(){
            const result = isPalindrome('hello')
            expect(result).toEqual(false)
        })
        it('word is a polindrome', function(){
            const result = isPalindrome('madam')
            expect(result).toEqual(true)
        })
        it('not a string', function(){
            const result = isPalindrome(5)
            expect(result).toEqual('Invalid Input')
        })
        it('empty string', function(){
            const result = isPalindrome('')
            expect(result).toEqual(true)
        })
        
    })

    describe('bitwiseNot', function(){
        it('string is not a bit string', function(){
            const result = bitwiseNot('hello')
            expect(result).toEqual('Invalid Input')
        })
        it('string is a bit string', function(){
            const result = bitwiseNot('10001')
            expect(result).toEqual('01110')
        })
        it('not a string', function(){
            const result = bitwiseNot(5)
            expect(result).toEqual('Invalid Input')
        })
        it('empty string', function(){
            const result = bitwiseNot('')
            expect(result).toEqual('Invalid Input')
        })
    })
})