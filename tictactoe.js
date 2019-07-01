$(document).ready(function () 
{ 


// Reload Button 

$('#reset').click(function () {
    location.reload();
});



// Declare players with their turns 
 const playerOne = "X";
 let playerOneTurn=1;

 const playerTwo = "O";
 let playerTwoTurn=1;

//  let turn= 0;

 const game = $(".box").click(function(){
 console.log($(this).text());
 
    if ($(this).text() === "")
    {
    if (playerOneTurn <= playerTwoTurn)
    {
        p1= $(this).text(playerOne)
        playerOneTurn++
    }

else 
{
     p2=$(this).text(playerTwo)
    playerTwoTurn++
}
    }


    winner();
  });



// Declare and display players names
const startButton = document.getElementById("nameButton");

const name = function()
{
  var playerOneName = prompt("Please enter player one name:");
  var playerTwoName = prompt("Please enter player two name:");

  document.querySelector('#names').innerText = `Player one is  ${playerOneName} \n Player two is ${playerTwoName}`;
  

 };

 startButton.addEventListener('click' , name);

    
    

 // Declare winners

gameOver = false; 

winner = function () {
    
    const box0 = $('#0').text();
    const box1 = $('#1').text();
    const box2 = $('#2').text();
    const box3 = $('#3').text();
    const box4 = $('#4').text();
    const box5 = $('#5').text();
    const box6 = $('#6').text();
    const box7 = $('#7').text();
    const box8 = $('#8').text();

    // console.log('hello');

    if (box0 === box1 && box0 === box2 && box0 != '') 
    {
        $('#message').text(box0 + " is the WINNER!");  
        gameOver = true;  
    }

    else if (box3 === box4 && box3 === box5 && box3 !== '') 
    {
        $('#message').text(box3+ " is the WINNER!" );
        gameOver = true;  
    } 

    else if (box6 === box7 && box6 === box8 && box6 !== '') 
    {
        $('#message').text(box6 + " is the WINNER!");
        gameOver = true;  

    }

    else if (box0 === box3 && box0 === box6 && box0 !== '') 
    {
        $('#message').text(box0 + " is the WINNER!");
        gameOver = true;  
    }

    else if (box1 === box4 && box1 === box7 && box1 !== '') 
    {
        $('#message').text(box1 + " is the WINNER!");
        gameOver = true;  
    }

    else if (box2 === box5 && box2 === box8 && box2 !== '') 
    {
        $('#message').text(box2 + " is the WINNER!");
        gameOver = true;  

    }

    else if (box0 === box4 && box0 === box8 && box0 !== '') 
    {
        $('#message').text(box0 + " is the WINNER!");
        gameOver = true;  
    }

    else if (box2 === box4 && box2 === box6 && box2 !== '') 
    {
        $('#message').text(box2 + " is the WINNER");
        gameOver = true;  
    }

    else if (
        box0 !== "" &&
        box1 !== "" &&
        box2 !== "" &&
        box3 !== "" &&
        box4 !== "" &&
        box5 !== "" &&
        box6 !== "" &&
        box7 !== "" &&
        box8 !== "") 
        {
        $('#message').text("It's a tie");
        gameOver = false;  
        }
       
      


    }

    
    
   
});
