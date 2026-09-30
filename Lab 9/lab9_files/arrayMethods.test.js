import{describe, it, expect} from 'vitest'
import { removeOutliers, compress, reformat, salarySort, fullNameSort } from './arrayMethods.js'

/* 
I have kindly provided you with the following class definition for
testing purposes. Feel free to use it or not.
*/

class User {
    constructor(firstName, lastName, isAdmin, salary) {
        this.firstName = firstName
        this.lastName = lastName
        this.isAdmin = isAdmin
        this.salary = salary
    }
}

const exampleFromMainFile = [
    new User('Alice', 'Smith', false, 50000),
    new User('Bob', 'Johnson', true, 55000),
    new User('Charlie', 'Brown', false, 60000),
    new User('David', 'Davis', true, 70000),
]

const salarySortUsers = [
    new User('Alice', 'Smith', false, 60000),
    new User('Bob', 'Johnson', true, 50000),
    new User('Charlie', 'Brown', false, 55000),
]


const myExample = [
    new User('Alice', 'Smith', false, 50000),
    new User('Bob', 'Johnson', true, 55000),
    new User('Charlie', 'Brown', false, 60000),
]

    

describe('main', () => {
    describe('removeOutliers', () =>{
        it('gives the offset from the salaries', () => {
            const result = removeOutliers(exampleFromMainFile, 5000)
            expect(result).toEqual([{ firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },{ firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 }])
        })
    })
    describe('compres', () =>{
        it('write sentences', () => {
            const result = compress(myExample)
            expect(result).toEqual("Alice Smith is not an admin and makes $50000 annually;Bob Johnson is an admin and makes $55000 annually;Charlie Brown is not an admin and makes $60000 annually;")
        })
    })
    describe('reformat', () =>{
        it('add full name property to each', () => {
            const result = reformat(myExample)
            expect(result).toEqual([{ firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000, fullName: 'Alice Smith' },{ firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000, fullName: 'Bob Johnson' },{ firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000, fullName: 'Charlie Brown' }])
        })
    })
    describe('salarySort', () =>{
        it('sorts the salaries in the assending order', () => {
            const result = salarySort(salarySortUsers)
            expect(result).toEqual( [{ firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 50000 },{ firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 55000 },{ firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 60000 }])
        })
    })
    describe('fullNameSort', () =>{
        it('sorts people by full name asending order', () => {
            const result = fullNameSort(myExample)
            expect(result).toEqual([{ firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000, fullName: 'Alice Smith' },{ firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000, fullName: 'Bob Johnson' },{ firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000, fullName: 'Charlie Brown' }])    
        })
    })
})