// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";


// Make 5 pieces of pottery at the wheel
let mug1 = makePottery("mug", 3, 4);
let mug2 = makePottery("mug", 8, 2);
let platter = makePottery("platter", 20, 1);
let vase = makePottery("vase", 30, 18);
let bowl = makePottery("bowl", 5, 3);

firePottery(mug1, 1000);
firePottery(mug2, 3000);
firePottery(platter, 2000);
firePottery(vase, 2200);
firePottery(bowl, 2201);

console.log(mug1);
console.log(mug2);
console.log(platter);
console.log(vase);
console.log(bowl);

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

