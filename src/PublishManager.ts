/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Base } from "./Base";
import events from "./events";
import { CustomContext } from "./types/contexts";
import { RecsUnitRenderContext } from "./types/events";

export default class PublishManager extends Base {
    /**
     * Publish Add to Cart event
     */
    addToCart(context?: CustomContext): void {
        this.pushEvent(events.ADD_TO_CART, context);
    }

    /**
     * Publish Custom Url event
     */
    customUrl(context?: CustomContext): void {
        this.pushEvent(events.CUSTOM_URL, context);
    }

    /**
     * Publish Initiate Checkout event
     */
    initiateCheckout(context?: CustomContext): void {
        this.pushEvent(events.INITIATE_CHECKOUT, context);
    }

    /**
     * Publish Page Activity Summary event
     */
    pageActivitySummary(context?: CustomContext): void {
        this.pushEvent(events.PAGE_ACTIVITY_SUMMARY, context);
    }

    /**
     * Publish Page View event
     */
    pageView(context?: CustomContext): void {
        this.pushEvent(events.PAGE_VIEW, context);
    }

    /**
     * Publish Place Order event
     */
    placeOrder(context?: CustomContext): void {
        this.pushEvent(events.PLACE_ORDER, context);
    }

    /**
     * Publish Product Page View event
     */
    productPageView(context?: CustomContext): void {
        this.pushEvent(events.PRODUCT_PAGE_VIEW, context);
    }

    /**
     * Publish Recommended Item Add to Cart Click event
     */
    recsItemAddToCartClick(context: RecsUnitRenderContext): void {
        this.pushEvent(events.RECS_ITEM_ADD_TO_CART_CLICK, context);
    }

    /**
     * Publish Recommended Item Click event
     */
    recsItemClick(context?: CustomContext): void {
        this.pushEvent(events.RECS_ITEM_CLICK, context);
    }

    /**
     * Publish Recommendations API Request event
     */
    recsRequestSent(context?: CustomContext): void {
        this.pushEvent(events.RECS_REQUEST_SENT, context);
    }

    /**
     * Publish Recommendations Response Received event
     */
    recsResponseReceived(context?: CustomContext): void {
        this.pushEvent(events.RECS_RESPONSE_RECEIVED, context);
    }

    /**
     * Publish Recommended Unit Render Event
     */
    recsUnitRender(context: RecsUnitRenderContext): void {
        this.pushEvent<RecsUnitRenderContext>(events.RECS_UNIT_RENDER, context);
    }

    /**
     * Publish Recommended Unit View event
     */
    recsUnitView(context?: CustomContext): void {
        this.pushEvent(events.RECS_UNIT_VIEW, context);
    }

    /**
     * Publish Referrer Url event
     */
    referrerUrl(context?: CustomContext): void {
        this.pushEvent(events.REFERRER_URL, context);
    }

    /**
     * Publish Remove from Cart event
     */
    removeFromCart(context?: CustomContext): void {
        this.pushEvent(events.REMOVE_FROM_CART, context);
    }

    /**
     * Publish Search Category Click event
     */
    searchCategoryClick(context?: CustomContext): void {
        this.pushEvent(events.SEARCH_CATEGORY_CLICK, context);
    }

    /**
     * Publish Search Product Click event
     */
    searchProductClick(context?: CustomContext): void {
        this.pushEvent(events.SEARCH_PRODUCT_CLICK, context);
    }

    /**
     * Publish Search Request Sent event
     */
    searchRequestSent(context?: CustomContext): void {
        this.pushEvent(events.SEARCH_REQUEST_SENT, context);
    }

    /**
     * Publish Search Response Received event
     */
    searchResponseReceived(context?: CustomContext): void {
        this.pushEvent(events.SEARCH_RESPONSE_RECEIVED, context);
    }

    /**
     * Publish Search Results View event
     */
    searchResultsView(context?: CustomContext): void {
        this.pushEvent(events.SEARCH_RESULTS_VIEW, context);
    }

    /**
     * Publish Search Suggestion Click event
     */
    searchSuggestionClick(context?: CustomContext): void {
        this.pushEvent(events.SEARCH_SUGGESTION_CLICK, context);
    }

    /**
     * Publish Shopping Cart View event
     */
    shoppingCartView(context?: CustomContext): void {
        this.pushEvent(events.SHOPPING_CART_VIEW, context);
    }

    /**
     * Publish Sign In event
     */
    signIn(context?: CustomContext): void {
        this.pushEvent(events.SIGN_IN, context);
    }

    /**
     * Publish Sign Out event
     */
    signOut(context?: CustomContext): void {
        this.pushEvent(events.SIGN_OUT, context);
    }

    /**
     * Publish Cart Update events
     */
    updateCart(context?: CustomContext): void {
        this.pushEvent(events.UPDATE_CART, context);
    }
}
