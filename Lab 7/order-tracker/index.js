const prompt = require("prompt-sync")();

let CustomerOrders = []

function greet(){
    console.log('Welcome to the restaurant Order Tracker!')
    console.log('1. Add a new order')
    console.log('2. View all orders')
    console.log('3. Find orders by customer name')
    console.log('4. Show total sales')
    console.log('5. Exit')
    console.log()
}

function exit(){
    console.log('Goodbye!')
}

function newOrder(){
    let CustomerName = prompt('Enter customer name: ')
    let itemOrdered = prompt(`What did ${CustomerName} order? `)
    let itemCost = prompt('How much did it cost? ')

    let CustomerOrder = {name: CustomerName, item: itemOrdered, cost: itemCost}
    CustomerOrders.push(CustomerOrder)

    console.log('Order recorded!')
}

function viewOrders(){
    if (CustomerOrders.length === 0){
        console.log('No orders recorded.')
    } else{
        console.log('Order Summary:')
        for(let i = 0; i < CustomerOrders.length; i++ ){
            console.log(`${CustomerOrders[i].name} ordered ${CustomerOrders[i].item} ($${CustomerOrders[i].cost.toFixed(2)})`)
        }
    }
}

function findOrders(){
    const nameToFind = prompt('View orders for which customer? ')
    let count = 0

    for(let i = 0; i < CustomerOrders.length; i++ ){
        if (CustomerOrders[i].name === nameToFind){
            console.log(`${CustomerOrders[i].name} ordered ${CustomerOrders[i].item} ($${CustomerOrders[i].cost.toFixed(2)})`)
            count++
        }   
    }

    if (count === 0){
        console.log('No orders found for that customer.')
    } else{
        console.log(`Total: ${count} orders`)
    }

}

function totalSales(){
    let total = 0
    for(let i = 0; i < CustomerOrders.length; i++ ){
       total += +CustomerOrders[i].cost
    }   
    console.log(`Total sales: $${total.toFixed(2)}`)
}

userChoice = 0

while (userChoice !== '5'){
    greet()
    userChoice = prompt('Enter your choice: ')
    if (userChoice === '5'){
        exit()
    } else if(userChoice === '1'){
        newOrder()
    } else if(userChoice === '2'){
        viewOrders()
    } else if(userChoice === '3'){
        findOrders()
    } else if(userChoice === '4'){
        totalSales()
    }
    console.log()

}


