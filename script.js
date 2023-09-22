const numbers = [10, 8, 7, 10, 5, 8, 9, 10];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// for (const num of numbers) {
//     let sum = 0;
//     sum += num;
// }

const average = sum / numbers.length;

console.log(average);


const numbers1 = Array.from({length: 20}, (_, index) => {
    return index + 1;
})

console.log(numbers1);


const numbers3 = [];

for (let i = 1; i <= 100; i++) {
  numbers3.push(i);
}

console.log(numbers3);


// const rollDice = () => {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     randomNumber === 6 ? console.log(`You rolled a ${randomNumber}. You won!`) : console.log(`You rolled a ${randomNumber}. Try again!`);
//   }
  
//   rollDice();


// const rollDice = () => randomNumber = Math.floor(Math.random() * 6) + 1;
// const result = rollDice();
// const message = `You rolled a ${result}. ${result === 3 || result === 6 ? "You won!" : "Try again!"}`;
// console.log(message);


// const seasons = ["Spring", "Summer", "Autumn", "Winter"];
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// function checkMonth() {
//     let season;
//     let randomMonthindex = Math.floor(Math.random() * months.length) + 1;

//     if (randomMonthindex == 0 || randomMonthindex == 1 || randomMonthindex == 11) {
//         season = seasons[3];
//     } else if (randomMonthindex == 2 || randomMonthindex == 3 || randomMonthindex == 4) {
//         season = seasons[0];
//     } else if (randomMonthindex == 5 || randomMonthindex == 6 || randomMonthindex == 7) {
//         season = seasons[1];
//     } else if (randomMonthindex == 8 || randomMonthindex == 9 || randomMonthindex == 10) {
//         season = seasons[2];
//     }
//     return season;
// }

// const result = checkMonth();
// console.log(`We are in ${result}`)

const seasons = ["Spring", "Summer", "Autumn", "Winter"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const randomMonth = Math.floor(Math.random() * months.length);
let season;

    switch (randomMonth) {
      case 0:
      case 1:
      case 11:
        season = seasons[3];
        break;
      case 2:
      case 3:
      case 4:
        season = seasons[0];
        break;
      case 5:
      case 6:
      case 7:
        season = seasons[1];
        break;
      case 8:
      case 9:
      case 10:
        season = seasons[2];
        break;
      default:
        break;
    }

console.log(`The month is: ${months[randomMonth]} so we are in ${season}`);


// const seasons = ["Spring", "Summer", "Autumn", "Winter"];
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// function findCurrentSeason() {
//     const randomMonth = Math.floor(Math.random() * months.length);
//     let season;

//     if (randomMonth <= 1 || randomMonth === 11) {
//       season = seasons[3];
//     } else if (randomMonth >= 2 && randomMonth <= 4) {
//       season = seasons[0];
//     } else if (randomMonth >= 5 && randomMonth <= 7) {
//       season = seasons[1];
//     } else if (randomMonth >= 8 && randomMonth <= 10) {
//       season = seasons[2];
//     }
  
//   console.log(`The month is: ${months[randomMonth]} so we are in ${season}`);
// }

// findCurrentSeason();


// const seasons = ["Spring", "Summer", "Autumn", "Winter"];
// const months = [
//   { month: "January", seasonIndex: 3 },
//   { month: "February", seasonIndex: 3 },
//   { month: "March", seasonIndex: 0 },
//   { month: "April", seasonIndex: 0 },
//   { month: "May", seasonIndex: 0 },
//   { month: "June", seasonIndex: 1 },
//   { month: "July", seasonIndex: 1 },
//   { month: "August", seasonIndex: 1 },
//   { month: "September", seasonIndex: 2 },
//   { month: "October", seasonIndex: 2 },
//   { month: "November", seasonIndex: 2 },
//   { month: "December", seasonIndex: 3 },
// ];

// function findCurrentSeason(month) {
//   let season;
//   let currentMonthIndex;

//   for (let i = 0; i < months.length; i++) {
//     if (month === months[i].month) {
//       currentMonthIndex = months[i].seasonIndex;
//       season = seasons[currentMonthIndex];
//       break;
//     }
//   }

//   console.log(`The month is: ${month} so we are in ${season}`);
// }

// findCurrentSeason("December");

// const seasons = ["Spring", "Summer", "Autumn", "Winter"];
// const months = [
//   { month: "January", seasonIndex: 3 },
//   { month: "February", seasonIndex: 3 },
//   { month: "March", seasonIndex: 0 },
//   { month: "April", seasonIndex: 0 },
//   { month: "May", seasonIndex: 0 },
//   { month: "June", seasonIndex: 1 },
//   { month: "July", seasonIndex: 1 },
//   { month: "August", seasonIndex: 1 },
//   { month: "September", seasonIndex: 2 },
//   { month: "October", seasonIndex: 2 },
//   { month: "November", seasonIndex: 2 },
//   { month: "December", seasonIndex: 3 },
// ];

// function findCurrentSeason(month) {
//   const foundMonth = months.find(m => m.month === month);

//   if (foundMonth) {
//     const season = seasons[foundMonth.seasonIndex];
//     console.log(`The month is: ${month}, so we are in ${season}.`);
//   } else {
//     console.log(`The month "${month}" was not found.`);
//   }
// }

// findCurrentSeason("October");

// const seasons = ["Spring", "Summer", "Autumn", "Winter"];
// const months = [
//   ["January", 3],
//   ["February", 3],
//   ["March", 0],
//   ["April", 0],
//   ["May", 0],
//   ["June", 1],
//   ["July", 1],
//   ["August", 1],
//   ["September", 2],
//   ["October", 2],
//   ["November", 2],
//   ["December", 3],
// ];

// function findCurrentSeason(month) {
//   let season;

// //   for (let i = 0; i < months.length; i++) {
// //     if(months[i][0] === month) {
// //         season = seasons[months[i][1]];
// //         break;
// //     }
// //   }

//     const foundMonth = months.find(m => m[0] === month);
//     if(foundMonth) {
//         // season = seasons[months[months.indexOf(foundMonth)][1]];
//         season = seasons[foundMonth[1]];

//         console.log(`The month is: ${month} so we are in ${season}`);
//     } else {
//         console.log(`The month "${month}" was not found.`);
//     }

// }

// findCurrentSeason("May");





const liveToThePointOfTears = () => {
  return new Promise((resolve) => {
    resolve("Live to the Point of Tears");
  });
};

const overflowHappiness = () => {
  return new Promise((resolve) => {
    resolve("Overflow Happiness");
  });
};

const loveWithoutEnd = () => {
  return new Promise((resolve) => {
    resolve("Love Without End");
  });
};

Promise.all([liveToThePointOfTears(), overflowHappiness(), loveWithoutEnd()])
  .then(([tears, happiness, love]) => {
    console.log(`1: ${tears}`);
    console.log(`2: ${happiness}`);
    console.log(`3: ${love}`);
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });