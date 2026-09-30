const AddButton = document.querySelector('header button')
const CloseButton = document.querySelector('.dialogTop button')
const AddItemButton = document.querySelector('.main button')

AddButton.addEventListener('click', ()=>{
    document.querySelector('dialog').open = true
})

CloseButton.addEventListener('click', ()=>{
    document.querySelector('dialog').open = false
})

AddItemButton.addEventListener('click', ()=>{
    const cardTemplate = document.querySelector('template')
    const card = cardTemplate.content.querySelector('.card').cloneNode(true)

    let item = document.querySelector("input[name=ItemName]").value
    let quantity = document.querySelector('input[name=Quantity]').value
    let expDate = document.querySelector('input[name=ExpirationDate]').value

    card.querySelector('h2').textContent = item
    card.querySelector('.Quantity').textContent = quantity
    card.querySelector('.date').textContent = expDate

    if (quantity <= 0 ){
        const inStock = card.querySelector('.inStock')
        inStock.textContent = 'Out of Stock'
        inStock.style.backgroundColor = 'var(--red)' 
    } else if (quantity <= 5){
        const inStock = card.querySelector('.inStock')
        inStock.textContent = 'Running Low'
        inStock.style.backgroundColor = 'var(--orange)' 
    }
    const cardBox = document.querySelector('section')
    cardBox.appendChild(card)

    document.querySelector('dialog').open = false

    document.querySelector("input[name=ItemName]").value = ''
    document.querySelector('input[name=Quantity]').value = ''
    document.querySelector('input[name=ExpirationDate]').value = ''
    document.querySelector('input[name=Category]').value = ''
})