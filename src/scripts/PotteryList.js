export const PotteryList = (potteryList) => {
    return ['<h1>Pottery</h1>',
        potteryList.map(pottery => 
            `<section class="pottery" id="pottery--${pottery.id}">
                <h2 class="pottery__shape">${pottery.shape.toUpperCase()}</h2>
                <div class="pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
                </div>
                <div class="pottery__price">Price is $${pottery.price} hello</div>
            </section>`)
    ].flat().join("");
}
