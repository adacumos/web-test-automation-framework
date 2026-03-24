const sculptNationLocators = {
    buyNow: () => cy.findAllByText(/buy now/i).eq(0),
    chooseYourPackage: () => cy.findAllByText(/CHOOSE YOUR PACKAGE >>/i).eq(0),
    productName: () => cy.get('.product-name'),
    productDiscount: () => cy.get('.price-discounted'),
    step1: () => cy.get(':nth-child(1) > .steps2__title'),

    speedUpMyMetabolism: {
        oneBottle: () => cy.findAllByText(/1 bottle/i).eq(0),
        threeBottle: () => cy.findAllByText(/3 bottle/i).eq(0),
        sixBottle: () => cy.findAllByText(/6 bottle/i).eq(0),

        bottleOne: () =>
            cy.get(
                '#end_hero > div > div > div.col.right > div > a:nth-child(1)'
            ),
        bottleThree: () =>
            cy.get(
                '#end_hero > div > div > div.col.right > div > a:nth-child(2)'
            ),
        bottleSix: () =>
            cy.get(
                '#end_hero > div > div > div.col.right > div > a:nth-child(3)'
            ),

        speedUpMyMetabloism: () =>
            cy.findAllByText(/speed up my metabolism/i).eq(0),
        speedUpMyMetabloismFullElement: () =>
            cy.get('#end_hero > div > div > div.col.right > a '),

        speedUpMyMetabloismTest: () =>
            cy.get(
                ':nth-child(1) > .flex-col.justify-center > .max-w-[500px] > .mt-6 > .w-full'
            ),
    },
    skyrocketMyManhood1: () => cy.findAllByText(/skyrocket my manhood/i).eq(0),
    skyrocketMyManhood6: () => cy.findAllByText(/skyrocket my manhood/i).eq(1),
    skyrocketMyManhood3: () => cy.findAllByText(/skyrocket my manhood/i).eq(2),
    burnBellyFatFaster1: () => cy.findAllByText(/burn belly fat faster/i).eq(0),
    burnBellyFatFaster6: () => cy.findAllByText(/burn belly fat faster/i).eq(1),
    burnBellyFatFaster3: () => cy.findAllByText(/burn belly fat faster/i).eq(2),

    quiz: {
        yesButton: () => cy.findAllByText(/Yes/i),
        noButton: () => cy.findAllByText(/No/i),
        sixBottle: () => cy.findAllByText(/6 bottle/i).eq(0),

        speedUpMyMetabloism: () =>
            cy.findAllByText(/speed up my metabolism/i).eq(0),

        speedUpMyMetabloismTest: () =>
            cy.get(
                ':nth-child(1) > .flex-col.justify-center > .max-w-[500px] > .mt-6 > .w-full'
            ),
    },

    offer: {
        dismissOfferButton: () => cy.findAllByText(/I understand/i),
        upgradeOffer: () => cy.findAllByText(/Yes!/i).eq(0),
    },
};

export default sculptNationLocators;
