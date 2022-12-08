function getComputerChoice(){
    let opt=['scissor','rock','paper'];

    let choice=Math.floor((Math.random()*10000)%3);

    return opt[choice];
}

function playRound(playerChoice,computerChoice){
    
    playerChoice.trim();

    playerChoice.toLowerCase();

        if(playerChoice=='rock' && computerChoice=='paper')
        {
            document.getElementById('status').style.color='red';
            document.getElementById('status').textContent='You lose! Paper beats Rock';
            return -1;
        }
        else if(playerChoice=='paper' && computerChoice=='scissor')
        {
            document.getElementById('status').style.color='red';
            document.getElementById('status').textContent='You lose! Scissor beats Paper';
            return -1;
        }
        else if(playerChoice=='scissor' && computerChoice=='rock')
        {
            document.getElementById('status').style.color='red';
            document.getElementById('status').textContent='You lose! Rock beats Scissor';
            return -1;
        }
        else if(playerChoice=='paper' && computerChoice=='rock')
        {
            document.getElementById('status').style.color='green';
            document.getElementById('status').textContent='You win! Paper beats Rock';
            return 1;
        }
        else if(playerChoice=='scissor' && computerChoice=='paper')
        {
            document.getElementById('status').style.color='green';
            document.getElementById('status').textContent='You win! Scissor beats Paper';
            return 1;
        }
        else if(playerChoice=='rock' && computerChoice=='scissor')
        {
            document.getElementById('status').style.color='green';
            document.getElementById('status').textContent='You win! Rock beats Scissor';
            return 1;
        }
        else{
            document.getElementById('status').style.color='#bdeb05';
            var msg= playerChoice+' vs '+computerChoice+" It's a draw !";
            document.getElementById('status').textContent=msg;
            return 2;
        }
    
}

var count=0;
var computer=0;
var player=0;

function game(choice){

    var playerChoice=choice;

    var computerChoice=getComputerChoice();

    var winOrLose=playRound(playerChoice,computerChoice);

    if(winOrLose==-1){

            computer+=1;
    }
    else if(winOrLose==1){
            player+=1;
    }
    else {

    }

    count++;
    
    document.getElementById('resultOfPlayer').textContent='Player : '+player;
    document.getElementById('resultOfComputer').textContent='Computer : '+computer;
    
    if(player==5 || computer ==5)
    {
        document.getElementById('resultOfPlayer').textContent='Player : '+player;
        document.getElementById('resultOfComputer').textContent='Computer : '+computer;
        document.getElementById('rock').style.pointerEvents = 'none'; 
        document.getElementById('paper').style.pointerEvents = 'none'; 
        document.getElementById('scissor').style.pointerEvents = 'none'; 

        if(player>computer)
        {
            document.getElementById('status').style.color='green';
            document.getElementById('status').textContent="*** You win! ***";
            count==0;
            player=0;
            computer=0;
        }
        else if(player<computer){
            document.getElementById('status').style.color='red';
            document.getElementById('status').textContent="*** You lose! ***";
            count==0;
            player=0;
            computer=0;
        }
        else{
            document.getElementById('status').textContent="*** It's a draw! ***";
            count==0;
            player=0;
            computer=0;
        }

    }
}

function reset(){
    player=0;
    computer=0;
    count=0;
    document.getElementById('resultOfPlayer').textContent='Player : '+player;
    document.getElementById('resultOfComputer').textContent='Computer : '+computer;
    document.getElementById('status').style.color='#bdeb05';
    document.getElementById('status').textContent="Let's begin !";
    
}