$(document).ready(function () 
{ 

    // const grid =
    // [
    // [" "," "," "], [" "," "," "],[" "," "," "]
    // ]

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



















   


  });


















    
    
    
    
    
    
    
    












});
