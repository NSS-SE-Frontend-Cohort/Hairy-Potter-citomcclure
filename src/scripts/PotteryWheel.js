const allPottery = []
let currentId = 1;

function getNextId() {
    return currentId++;
}

export const makePottery = (shape, weight, height) => {
    const pottery = {
        id: getNextId(),
        shape: shape,
        weight: weight,
        height: height
    }

    allPottery.push(pottery);

    return pottery;
}