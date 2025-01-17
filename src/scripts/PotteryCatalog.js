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
    return structuredClone(potteryToBeSold);
}