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
            document.getElementById('status').
            style.color='red';

            document.getElementById('status').
            textContent='You lose! Paper beats Rock';

            return -1;
        }

        else if(playerChoice=='paper' && computerChoice=='scissor')
        {
            document.getElementById('status')
            .style.color='red';

            document.getElementById('status')
            .textContent='You lose! Scissor beats Paper';

            return -1;
        }

        else if(playerChoice=='scissor' && computerChoice=='rock')
        {
            document.getElementById('status')
            .style.color='red';

            document.getElementById('status')
            .textContent='You lose! Rock beats Scissor';

            return -1;
        }

        else if(playerChoice=='paper' && computerChoice=='rock')
        {
            document.getElementById('status')
            .style.color='green';

            document.getElementById('status')
            .textContent='You win! Paper beats Rock';

            return 1;
        }

        else if(playerChoice=='scissor' && computerChoice=='paper')
        {
            document.getElementById('status')
            .style.color='green';

            document.getElementById('status')
            .textContent='You win! Scissor beats Paper';

            return 1;
        }

        else if(playerChoice=='rock' && computerChoice=='scissor')
        {
            document.getElementById('status')
            .style.color='green';

            document.getElementById('status')
            .textContent='You win! Rock beats Scissor';

            return 1;
        }

        else{
            document.getElementById('status').
            style.color='#bdeb05';

            var msg= playerChoice+' vs '
            +computerChoice+" It's a draw !";

            document.getElementById('status')
            .textContent=msg;

            return 2;
        }
    
}

//Initialize scores to 0

var computerScore=0;
var playerScore=0;

function game(choice){

    var playerChoice=choice;

    var computerChoice=getComputerChoice();

    var winOrLose=playRound(playerChoice,computerChoice);

    if(winOrLose==-1)
    {

            computerScore+=1;
    }

    else if(winOrLose==1){
            playerScore+=1;
    }

    else {
        //Draw
    }

    //Update the score on UI

    document.getElementById('resultOfPlayer').
    textContent='Player : '+playerScore;

    document.getElementById('resultOfComputer').
    textContent='Computer : '+computerScore;
    
    //The first to score 5 points is winner

    if(playerScore==5 || computerScore ==5)
    {
        document.getElementById('resultOfPlayer').
        textContent='Player : '+playerScore;

        document.getElementById('resultOfComputer').
        textContent='Computer : '+computerScore;

        //divs to select an option is locked here until reset is pressed

        document.getElementById('rock').
        style.pointerEvents = 'none'; 

        document.getElementById('paper').
        style.pointerEvents = 'none';

        document.getElementById('scissor').
        style.pointerEvents = 'none'; 

        if(playerScore>computerScore)
        {
            document.getElementById('status').
            style.color='green';

            document.getElementById('status').
            textContent="*** You win! ***";

            playerScore=0;
            computerScore=0;
        }

        else if(playerScore<computerScore){

            document.getElementById('status').
            style.color='red';

            document.getElementById('status').
            textContent="*** You lose! ***";

            playerScore=0;
            computerScore=0;
        }

        else{

            document.getElementById('status').
            textContent="*** It's a draw! ***";

            count==0;
            playerScore=0;
            computerScore=0;
        }

    }
}

function reset(){

    playerScore=0;
    computerScore=0;
    
    //Reset score to 0 

    document.getElementById('resultOfPlayer').
    textContent='Player : '+playerScore;

    document.getElementById('resultOfComputer').
    textContent='Computer : '+computerScore;

    document.getElementById('status')
    .style.color='#bdeb05';
    
    document.getElementById('status').
    textContent="Let's begin !";

    //unlocking the div to select option

    document.getElementById('rock').
    style.pointerEvents ='auto' ; 

    document.getElementById('paper').
    style.pointerEvents = 'auto';

    document.getElementById('scissor').
    style.pointerEvents = 'auto';
    
}