const country = "India";
let continent = "Asia";
let population = 7000000;
let isIsland = false;
let language;
console.log(
  typeof country,
  typeof isIsland,
  typeof population,
  typeof language
);

//challenge 2
let markWeight = 78;
let johnWeight = 95;
let markHeight = 1.69;
let johnHeight = 1.88;
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
if (markBMI > johnBMI) {
  console.log(`"Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!"`);
} else {
  console.log(`"John's BMI (${johnBMI}) is higher than Mark's ${markBMI}!"`);
}

//challenge 3
//Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
let dolphins = (97 + 112 + 101) / 3;
let Koalas = (109 + 95 + 106) / 3;
if (dolphins > Koalas && Koalas >= 100 && dolphins >= 100) {
  console.log("Dolphins win 🎉");
} else if (dolphins === Koalas && Koalas >= 100 && dolphins >= 100) {
  console.log("Equal");
} else {
  console.log("Koalas win");
}

//275 40 and 430 challenge 4 and challenge 2(folder 3)
const ti = (bill) => (bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill);

const bills = [125, 555, 44];

const tips = [ti(bills[0])];
tips.push(ti(bills[1]));
tips.push(ti(bills[2]));

console.log(tips);

total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(total);

//challenge 5
const calcAverage = (s1, s2, s3) => {
  return (s1 + s2 + s3) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`No one wins`);
  }
}

const avgDolphins = calcAverage(78, 2, 3);
const avgKoalas = calcAverage(99, 99, 99);

checkWinner(avgDolphins, avgKoalas);

// objects challenge
const jonas = {
  firstName: "Jonas",
  friends: ["Michael", "Jim", "Pam"],
};
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
);

//loops challenge
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const totals = [];
const calcTip = (bill) => {
  for (let i = 0; i < bill.length; i++) {
    tip.push(bill[i] <= 300 && bill[i] >= 50 ? 0.15 * bill[i] : 0.2 * bill[i]);
    totals.push(bill[i] + tip[i]);
  }
  console.log(bill);
  console.log(tip);
  console.log(totals);
};
calcTip(bill);

let sum = 0;
const calcAverages = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum / arr.length);
};
calcAverages(totals);
