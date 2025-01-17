// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";


// Make 5 pieces of pottery at the wheel
let mug1 = makePottery("mug", 3, 4);
let mug2 = makePottery("mug", 8, 2);
let platter = makePottery("platter", 20, 1);
let vase = makePottery("vase", 30, 18);
let bowl = makePottery("bowl", 5, 3);

// Fire each piece of pottery in the kiln
firePottery(mug1, 1000);
firePottery(mug2, 3000);
firePottery(platter, 2000);
firePottery(vase, 2200);
firePottery(bowl, 2201);

// Determine which ones should be sold, and their price
const testArr = [];
testArr.push(mug1);
testArr.push(mug2);
testArr.push(platter);
testArr.push(vase);
testArr.push(bowl);

for (const pottery of testArr) {
    toSellOrNotToSell(pottery);
    console.log(pottery);
}

console.log(usePottery());

// Invoke the component function that renders the HTML list
const potteryListElement = document.getElementById('potteryList');

if (potteryListElement) {
    potteryListElement.innerHTML = PotteryList(usePottery());
}
