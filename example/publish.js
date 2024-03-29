const mse = window.magentoStorefrontEvents;

setTimeout(() => {
    mse.publish.addToCart();
    mse.publish.customUrl();
    mse.publish.initiateCheckout();
    mse.publish.pageActivitySummary();
    mse.publish.pageView();
    mse.publish.placeOrder();
    mse.publish.productPageView();
    mse.publish.recsItemAddToCartClick("abc123", 123456);
    mse.publish.recsItemClick("abc123", 123456);
    mse.publish.recsRequestSent();
    mse.publish.recsResponseReceived();
    mse.publish.recsUnitRender("abc123");
    mse.publish.recsUnitView("abc123");
    mse.publish.referrerUrl();
    mse.publish.removeFromCart();
    mse.publish.searchCategoryClick("tops");
    mse.publish.searchProductClick("abc123");
    mse.publish.searchRequestSent();
    mse.publish.searchResponseReceived();
    mse.publish.searchResultsView();
    mse.publish.searchSuggestionClick("pants");
    mse.publish.shoppingCartView();
    mse.publish.signIn();
    mse.publish.signOut();
    mse.publish.updateCart();
}, 1000);
