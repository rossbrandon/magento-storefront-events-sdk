/* eslint-disable no-console */
const mse = window.magentoStorefrontEvents;

mse.subscribe.addToCart(args => console.log(args));
mse.subscribe.customUrl(args => console.log(args));
mse.subscribe.initiateCheckout(args => console.log(args));
mse.subscribe.pageActivitySummary(args => console.log(args));
mse.subscribe.pageView(args => console.log(args));
mse.subscribe.placeOrder(args => console.log(args));
mse.subscribe.productPageView(args => console.log(args));
mse.subscribe.recsItemAddToCartClick(args => console.log(args));
mse.subscribe.recsItemClick(args => console.log(args));
mse.subscribe.recsRequestSent(args => console.log(args));
mse.subscribe.recsResponseReceived(args => console.log(args));
mse.subscribe.recsUnitRender(args => console.log(args));
mse.subscribe.recsUnitView(args => console.log(args));
mse.subscribe.referrerUrl(args => console.log(args));
mse.subscribe.removeFromCart(args => console.log(args));
mse.subscribe.searchCategoryClick(args => console.log(args));
mse.subscribe.searchProductClick(args => console.log(args));
mse.subscribe.searchRequestSent(args => console.log(args));
mse.subscribe.searchResponseReceived(args => console.log(args));
mse.subscribe.searchResultsView(args => console.log(args));
mse.subscribe.searchSuggestionClick(args => console.log(args));
mse.subscribe.shoppingCartView(args => console.log(args));
mse.subscribe.signIn(args => console.log(args));
mse.subscribe.signOut(args => console.log(args));
mse.subscribe.updateCart(args => console.log(args));
