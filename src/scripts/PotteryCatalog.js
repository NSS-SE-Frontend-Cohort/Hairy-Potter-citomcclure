// import structuredClone from "@ungap/structured-clone";

const potteryToBeSold = [];

export const toSellOrNotToSell = (pottery) => {
    if (!pottery.cracked) {
        if (pottery.weight >= 6) {
            pottery.price = 40;
        } else {
            pottery.price = 20;
        }

        potteryToBeSold.push(pottery);
    }
    
    return pottery;
}

export const usePottery = () => {
    // return structuredClone(potteryToBeSold); // structuredClone() is not defined when running jest tests even on a more up to date jest and node versions. Link to bug: https://github.com/jsdom/jsdom/issues/3363. Uncomment here and at import to use in jest tests (but won't work in browser when running local web server)
    return JSON.parse(JSON.stringify(potteryToBeSold));
}