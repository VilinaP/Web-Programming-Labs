// Name:Vilina Prenko
// Class: CPTR-212 Web Programming
// Date: 12.11.2025
// Honor Statement: I have neither given nor received any unauthorized help on this lab. [CHECK ME]

/************************** INSTRUCTIONS **************************

In this lab, you'll be working with the JavaScript Array API to become more familiar with handling 
advanced array operations. Each of the functions you implement will, necessarily, use one of the following
JavaScript array methods:

* filter
* map
* reduce
* sort

Please do not implement those operations by hand - use the built-in methods.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!! YOU SHOULD NOT USE ANY MANUAL LOOPS IN THIS ASSIGNMENT !!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
You shouldn't want the extra work, and I don't want to give you a zero 💀💻. 

The function definitions and Intellisense comments should provide you with
enough information to get started, but make sure to write tests, as you only
get three tries to pass my unit tests.

NOTE: I will NOT be testing for invalid types this go-around. I will only provide
your functions with reasonably-typed values. That being said, you are responsible for
handling the entire gamut of values within those types.

NOTE: Your functions should NOT mutate the original data. I explicitly check for this.
Please don't waste one of your tests by failing to meet this criterion

NOTE: For the `compress` function, you should NOT use the `map` method.
*/


/************** TYPE DEFINITIONS - DO NOT MODIFY **************

@typedef User
@property {string} firstName 
@property {string} lastName
@property {boolean} isAdmin
@property {number} salary

@typedef {User & {fullName: string}} UpdatedUser

*/

/************************ IMPLEMENTATIONS ************************/

/**
 * Returns users whose salary is within the offset (inclusive) of the group average.
 * @param {Array<User>} users An array containing user objects.
 * @param {number} offset A numeric offset that defines the range from the average salary.
 * @returns {Array<User>} An array of users matching the offset criteria.
 * 
 * @example
 * const users = [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 },
 *   { firstName: 'David', lastName: 'Davis', isAdmin: true, salary: 70000 }
 * ];
 * 
 * const offset = 5000;
 * const result = removeOutliers(users, offset);
 * console.log(result);
 * 
 * Output:
 * [
 *  { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
 *  { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 }
 * ]
 */
 const removeOutliers = (users, offset) => {
    const total = users.reduce((total, user) => {
        return total + user.salary
    }, 0)

    const average = total/users.length
    console.log(average)

    const OffsetUsers = users.filter((user)=>{
        const numbers = average - user.salary
        return numbers <= offset && numbers >= -(offset)
    })
    return OffsetUsers
}

/**
 * Compresses all the users into a single semicolon-separated string. You may not use the .map() method to solve this.
 * @param {Array<User>} users An array containing user objects.
 * @returns {string} A stringified, semicolon-separated version of all the users.
 * 
 * @example
 * const users = [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 }
 * ];
 * 
 * const result = compress(users);
 * console.log(result);
 * 
 * Output:
 * "Alice Smith is not an admin and makes $50000 annually;Bob Johnson is an admin and makes $55000 annually;Charlie Brown is not an admin and makes $60000 annually;"
 */
const compress = (users) => {
    const newArray = users.reduce((myString, user)=>{
        myString += `${user.firstName} ${user.lastName} is `
        if (!user.isAdmin){
            myString += 'not '
        }
        myString += `an admin and makes $${user.salary} annually;`
        return myString
    }, '')
    return newArray
}

/**
 * Adds a full name property to all users.
 * @param {Array<User>} users An array containing user objects.
 * @returns {Array<UpdatedUser>} The updated users with a `fullName` property added.
 * 
 * @example
 * const users = [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 }
 * ];
 * 
 * const result = reformat(users);
 * console.log(result);
 * 
 * Output:
 * [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000, fullName: 'Alice Smith' },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000, fullName: 'Bob Johnson' },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000, fullName: 'Charlie Brown' }
 * ]
 */
const reformat = (users) => {
    return users.map((user)=>{
        return {
            ...user,
            fullName: `${user.firstName} ${user.lastName}`,
        }
    })

}

/**
 * Sorts the users (ascending) by their salaries.
 * @param {Array<User>} users An array containing user objects.
 * @returns {Array<User>} The sorted users array.
 * 
 * @example
 * const users = [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 60000 },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 50000 },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 55000 }
 * ];
 * 
 * const result = salarySort(users);
 * console.log(result);
 * 
 * Output:
 * [
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 50000 },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 55000 },
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 60000 }
 * ]
 */
const salarySort = (users) => {
    return structuredClone(users).sort((a, b)=>{
        return -(a.salary < b.salary) || +(a.salary > b.salary)
    })
}

/**
 * Sorts the users (ascending ASCII) by their full name.
 * @param {Array<User>} users - An array containing user objects.
 * @returns {Array<UpdatedUser>} - The sorted users array.
 * 
 * @example
 * const users = [
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 },
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 }
 * ];
 * 
 * const result = fullNameSort(users);
 * console.log(result);
 * 
 * Output:
 * [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000, fullName: 'Alice Smith' },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000, fullName: 'Bob Johnson' },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000, fullName: 'Charlie Brown' }
 * ]
 */
const fullNameSort = (users) => {
    users = reformat(users)
    return structuredClone(users).sort((a, b)=>{
        return -(a.fullName < b.fullName) || +(a.fullName > b.fullName)
    })
}

/* DO NOT MODIFY */
export {
    removeOutliers,
    compress,
    reformat,
    salarySort,
    fullNameSort,
}