const prompt = require('prompt-sync')({sigint:true})

function generateQuestions(){
    for(let i = 0; i < 6; i++){
        randomNum1 = Math.floor(Math.random()*10) +1 // Add 1 because the random goes 1 - 9 without it
        randomNum2 = Math.floor(Math.random()*10) +1

        // console.log(randomNum1)
        // console.log(randomNum2)

        myOperators = '+-*' 
        operator = myOperators[Math.floor(Math.random()*3)] 

        console.log(`What is ${randomNum1} ${operator} ${randomNum2}?`)
        const answer = prompt('> ')

        switch (operator){
            case '+':
                correctAnswer = randomNum1 + randomNum2
                break
            case '-':
                correctAnswer = randomNum1 - randomNum2
                break
            case '*':
                correctAnswer = randomNum1 * randomNum2
                break
        }

        if (+answer === correctAnswer){
            console.log('☑ Correct!')
            score++
        } else {
            console.log(`❌ Sorry, the correct answer was ${correctAnswer}`)
        }

    }

    console.log(`You got ${score} out of 5 correct!`)
    playAgain = prompt('Do you want to play again? ')
}



const name = prompt("What's your name? ")

console.log(`Welcome to the Math Quiz, ${name}!`)

score = 0
playAgain = 'yes'

while(playAgain === 'yes'){
    generateQuestions()
}

while(playAgain != 'no'){
    playAgain = prompt('Do you want to play again? ')
    if(playAgain === 'yes'){
        generateQuestions()
    }
}
