let myscore = document.querySelector("#score1")
let botscore = document.querySelector("#score2")
let rock = document.querySelector(".rock")
let text = document.querySelector("#text")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")

let i = 1 , j = 1

function botchoice(){
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    console.log(choice[randomIndex])
    return choice[randomIndex];
}
rock.addEventListener('click' , function(){
    const bot = botchoice();
    if(bot == "rock"){
        text.innerHTML = "It's a tie!" 
    }
    else if(bot == "paper"){
        text.innerHTML = "You lose! paper beats rock"
        botscore.innerHTML = j
        j++
    }
    else{
        text.innerHTML = "You win! rock beats scissors"
        myscore.innerHTML = i
        i++
    }
})

paper.addEventListener('click' , function(){
    const bot = botchoice();
    if(bot == "rock"){
        text.innerHTML = "You win! paper beats rock"
        myscore.innerHTML = i
        i++ 
    }
    else if(bot == "paper"){
        text.innerHTML = "It's a tie!"
 
    }
    else{
        text.innerHTML = "You lose! scissors beats paper"
        botscore.innerHTML = j
        j++
    }
})

scissors.addEventListener('click' , function(){
    const bot = botchoice();
    if(bot == "rock"){
        text.innerHTML = "You lose! rock beats scissors"
        botscore.innerHTML = j
        j++
    }
    else if(bot == "paper"){
        text.innerHTML = "You win! scissors beats paper"
        myscore.innerHTML = i
        i++ 
    }
    else{
        text.innerHTML = "It's a tie!"

    }
})