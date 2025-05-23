                                    //  M1


// let container = document.getElementById("container");
// let print = document.getElementById("print");

// let user = document.getElementById("user");
// let opponent = document.getElementById("opponent");
// let firstSelect = document.getElementById("firstSelect");
// let secondSelect = document.getElementById("secondSelect");

// let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
// let listSelectedid;
// let listLastIndex = 24;
// let flag = 0;

// let win = [
//   [0, 1, 2, 3, 4],
//   [5, 6, 7, 8, 9],
//   [10, 11, 12, 13, 14],
//   [15, 16, 17, 18, 19],
//   [20, 21, 22, 23, 24],
//   [0, 5, 10, 15, 20],
//   [1, 6, 11, 16, 21],
//   [2, 7, 12, 17, 22],
//   [3, 8, 13, 18, 23],
//   [4, 9, 14, 19, 24],
//   [0, 6, 12, 18, 24],
//   [4, 8, 12, 16, 20],
// ];

// const imageMap = {
//   "Cute Girl": "./girl1.png",
//   "Cute Boy": "./boy1.png",
//   "Angry Boy": "./boy2.png",
//   "Angry girl": "./girl2.png",
// };


// user.addEventListener("change", function () {
//   user.classList.toggle("hidden");

//   flag = 1;
//   let selectedValue = user.value;
//   let imguser = document.getElementById("imguser");


//   imgPath=imageMap[selectedValue];
//   if (imgPath) {
//     imguser.innerHTML = `<img src="${imgPath}" alt="${selectedValue}"  style="width: 20vw; height: 50vh;">`;
//   }

//   setTimeout(() => {
//     opponent.addEventListener("change", function () {
//       opponent.classList.toggle("hidden");

//       let selectedValue = opponent.value;
//       let imgopponent = document.getElementById("imgopponent");

//       let imgPath=imageMap[selectedValue];

//       if (imgPath) {
//         imgopponent.innerHTML = `<img src="${imgPath}" alt="${selectedValue}"  style="width: 20vw; height: 50vh;">`;
//       }

//       let count = 0;

//       container.addEventListener("click", (event) => {
//         if (
//           (count & 1) == 0 &&
//           document.getElementById(event.target.id).innerHTML == ""
//         ) {
//           document.getElementById(event.target.id).innerHTML = "O";
//           listSelectedid = Number(event.target.id);

//           [list[listLastIndex], list[listSelectedid]] = [list[listSelectedid], list[listLastIndex]];
//           listLastIndex--;

//           // adding zooming effect to the images
//           document.getElementById("imguser").classList.add("zoom");


//           setTimeout(() => {
//             document.getElementById("imguser").classList.remove("zoom");
//           }, 300);
//           count++;
//         }

//         for (let i = 0; i < win.length; i++) {
//           let counto = 0;
//           let countx = 0;
//           for (let j = 0; j <= 4; j++) {
//             let check = document.getElementById(`${win[i][j]}`);
//             if (check.innerHTML === "O") counto++;
//             else if (check.innerHTML === "X") countx++;
//           }

//           if (counto === 5) {
//             print.innerHTML = "You won";
//             count = -1;
//           } else if (countx === 5) {
//             print.innerHTML = "Opponent won";
//             count = -1;
//           }
//         }

//         // taking too much time when there are less number of options
//         let index = Math.floor(Math.random() * (listLastIndex+1));
//         // while (
//         //   document.getElementById(index).innerHTML == "O" ||
//         //   document.getElementById(index).innerHTML == "X"
//         // )
//         //   index = Math.floor(Math.random() * listLastIndex + 1);

//         if (
//           ((count & 1) === 1) &&
//         (count >= 1)
//           // document.getElementById(index).innerHTML == ""
//         ) {
          // document.getElementById(list[index] ).innerHTML = "X";
          // document.getElementById(index).innerHTML = "X";

//           listSelectedid = index;

//           // list[listLastIndex] this will be treated as number

//           [list[listLastIndex], list[listSelectedid]] = [list[listSelectedid], list[listLastIndex]];
//           listLastIndex--;


//           // adding zooming effect to the images
//           document.getElementById("imgopponent").classList.add("zoom");


//           // Reset scale after a short delay 👇
//           setTimeout(() => {
//             document.getElementById("imgopponent").classList.remove("zoom");
//           }, 700);
//           count++;
//         }

//         if (count === 25) print.innerHTML = "Match false";
//       });
//     });
//   });

//   }, 1000)

// let run = function () {
//   if (flag == 1) {
//     count = -1;
//   }
//   let index = Math.floor(Math.random() * 25 + 1);
//   while (document.getElementById(index).innerHTML == ("O" || "X"))
//     index = Math.floor(Math.random() * 25 + 1);

//   if (((count & 1) == 1 && count>1) && document.getElementById(index).innerHTML == "") {
//     document.getElementById(index).innerHTML = "X";
//     count++;
//   }

//   for (let i = 0; i < win.length; i++) {
//     let counto = 0;
//     let countx = 0;
//     for (let j = 0; j <= 4; j++) {
//       let check = document.getElementById(`${win[i][j]}`);
//       if (check.innerHTML == "O") counto++;
//       else if (check.innerHTML == "X") countx++;
//     }

//     if (counto == 5) print.innerHTML = "You won";
//     else if (countx == 5) print.innerHTML = "X won";
//   }
// }
// if(flag==0)
// setInterval(run, 1000);

// NOTE DOWN  ============================>>>>>>>>>>>>>>>>.
// 🔍 What’s Really Happening
// Let’s inspect this part of your code again:

// js
// Copy
// Edit
// let flag = 0;

// if (flag === 1) {
//   container.addEventListener("click", (event) => {
//     // game logic
//   });
// }
// This code block is run immediately when the JavaScript is first loaded by the browser. So at that point:

// flag is 0 (as initialized)

// if (flag === 1) fails

// No event listener is attached

// The rest of your code — event listeners for user and opponent — are correctly defined and will fire later

// So the mistake is: you assume that when the user later selects something and flag becomes 1, the game logic inside that if (flag === 1) block will somehow run — but it won't, because:

// JavaScript doesn't remember or re-check an if condition you wrote during page load.









                                          // M2






const  container = document.getElementById("container");
const print = document.getElementById("print");

const user = document.getElementById("user");
const opponent = document.getElementById("opponent");
const firstSelect = document.getElementById("firstSelect");
const secondSelect = document.getElementById("secondSelect");

let list = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24
];
let availableCells = [...list]; // Keep track of available cells
let flag = 0;

let win = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]  
  ];


const imageMap = {
  "Cute Girl": "./girl1.png",
  "Cute Boy": "./boy1.png",
  "Angry Boy": "./boy2.png",
  "Angry girl": "./girl2.png",
};

user.addEventListener("change", function () {
  user.classList.toggle("hidden");

  flag = 1;
  let selectedValue = user.value;
  const imguser = document.getElementById("imguser");

  let imgPath = imageMap[selectedValue];
  if (imgPath) {
    imguser.innerHTML = `<img src="${imgPath}" alt="${selectedValue}" style="width: 20vw; height: 50vh;">`;
  }

  setTimeout(() => {
    opponent.addEventListener("change", function () {
      opponent.classList.toggle("hidden");

      let selectedValue = opponent.value;
      const imgopponent = document.getElementById("imgopponent");

      let imgPath = imageMap[selectedValue];

      if (imgPath) {
        imgopponent.innerHTML = `<img src="${imgPath}" alt="${selectedValue}" style="width: 20vw; height: 50vh;">`;
      }

      let count = 0;
      let gameActive = true;

      container.addEventListener("click", (event) => {
        if (!gameActive) return;

        const targetId = event.target.id;
        const targetElement = document.getElementById(targetId);

        // Player's turn
        if (
          (count & 1) === 0 &&
          targetElement &&
          targetElement.innerHTML === ""
        ) {
          targetElement.innerHTML = "O";

          // Remove the cell from available cells
          availableCells = availableCells.filter((id) => id != targetId);

          // Add zooming effect
          document.getElementById("imguser").classList.add("zoom");
          setTimeout(() => {
            document.getElementById("imguser").classList.remove("zoom");
          }, 300);

          count++;

          // Check for win
          if (checkWin("O")) {
            print.innerHTML = "You won";
            gameActive = false;
            return;
          }

          // Check for draw
          if (availableCells.length === 0) {
            print.innerHTML = "Match draw";
            gameActive = false;
            return;
          }

          // Computer's turn
          setTimeout(() => {
            if (!gameActive) return;

            // Select a random available cell
            const randomIndex = Math.floor(
              Math.random() * availableCells.length
            );
            const computerMove = availableCells[randomIndex];

            document.getElementById(computerMove).innerHTML = "X";

            // Remove the cell from available cells
            availableCells.splice(randomIndex, 1);

            // Add zooming effect
            document.getElementById("imgopponent").classList.add("zoom");
            setTimeout(() => {
              document.getElementById("imgopponent").classList.remove("zoom");
            }, 700);

            count++;

            // Check for win
            if (checkWin("X")) {
              print.innerHTML = "Opponent won";
              gameActive = false;
              return;
            }

            // Check for draw
            if (availableCells.length === 0) {
              print.innerHTML = "Match draw";
              gameActive = false;
            }
          }, 500);
        }
      });

      // Function to check for win
      function checkWin(symbol) {
        for (let i = 0; i < win.length; i++) {
          let count = 0;
          for (let j = 0; j <= 4; j++) {
            let check = document.getElementById(`${win[i][j]}`);
            if (check && check.innerHTML === symbol) {
              count++;
            }
          }
          if (count === 5) {
            return true;
          }
        }
        return false;
      }
    });
  }, 1000);
});
