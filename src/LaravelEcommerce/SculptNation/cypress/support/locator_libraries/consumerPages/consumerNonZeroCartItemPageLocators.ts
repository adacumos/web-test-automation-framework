const nonZeroCartItemsPageLocators = {
    pageSections: {
        cart: () => cy.contains('h2', 'Cart'),
        coupon: () => cy.contains('h2', 'Coupon'),
        cartTotals: () => cy.contains('h2', 'Cart totals'),
    },
    cartItemRow: () => cy.get('tr.cart-items-table__row'),
    couponInput: () => cy.get('input.cart-items-table__row'),
    applyCouponButton: () => cy.get('button.coupon-area__button'),
    shipping: () => cy.contains('th', 'Shipping').next(),
    salesTax: () => cy.contains('th', 'Sales Tax').next(),
    total: () => cy.contains('th', 'Total (USD)').next(),
    proceedToCheckout: () => cy.get('a[href="/checkout"]'),
    continueShopping: () => cy.get('div.inner-content a[href="/products"]'),
};
export default nonZeroCartItemsPageLocators;
