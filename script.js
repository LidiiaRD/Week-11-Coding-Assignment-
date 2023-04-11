//adding a string to represent the player's symbol
let playerSymbol = "X";

//creating a variable to keep track of whether the game has ended
let gameEnded = false;

//creare a var to store all possible "winning" positions
let winPos = [
   [1, 2, 3], [4, 5, 6],
   [7, 8, 9], [1, 4, 7],
   [2, 5, 8], [3, 6, 9],
   [1, 5, 9], [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {
   document.getElementById(i.toString()).addEventListener(
      "click",
      function () {
         if (this.innerHTML === "" && !gameEnded) {
            this.innerHTML = playerSymbol;

            //check who is a winner
            checkWin();
            this.classList.add(playerSymbol.toLowerCase());
            //swap the symbol
            if (playerSymbol === "X")
               playerSymbol = "O"
            else
               playerSymbol = "X"
         }
      }
   );

}
//create a function to determine a winner 
//by loopping through each of the possible winning positions
//and checking if all cells contain the player's symbol
function checkWin() {
   for (let i = 0; i < winPos.length; i++) {
      if (
         document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
         document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
         document.getElementById(winPos[i][2]).innerHTML === playerSymbol
      ) {
         document.getElementById(winPos[i][0]).classList.add("win");
         document.getElementById(winPos[i][1]).classList.add("win");
         document.getElementById(winPos[i][2]).classList.add("win");
         gameEnded = true;

         //display a massage to the user
         setTimeout(function () {
            alert(playerSymbol + "win!");
         }, 800);
      }
   }
}

//create a function to reset a game
document.getElementById("reset").addEventListener(
   "click",
   function () {
      for (let i = 1; i <= 9; i++) {
         document.getElementById(i.toString()).innerHTML = "";
         document.getElementById(i.toString()).classList.remove("x");
         document.getElementById(i.toString()).classList.remove("o");
         document.getElementById(i.toString()).classList.remove("win");
         gameEnded = false;
      }
   }
);