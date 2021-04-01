/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Base } from "./Base";
import events from "./events";
import {
    ListenerOptions,
    EventHandler,
    RecsUnitRenderContext,
} from "./types/events";

export default class SubscribeManager extends Base {
    /**
     * Subscribe to Add to Cart event
     */
    addToCart(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.ADD_TO_CART, handler, options);
    }

    /**
     * Subscribe to Custom Url event
     */
    customUrl(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.CUSTOM_URL, handler, options);
    }

    /**
     * Subscribe to changes on the data layer
     */
    dataLayerChange(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.DATA_LAYER_CHANGE, handler, options);
    }

    /**
     * Subscribe to all events on the data layer
     */
    dataLayerEvent(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.DATA_LAYER_EVENT, handler, options);
    }

    /**
     * Subscribe to Initiate Checkout event
     */
    initiateCheckout(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.INITIATE_CHECKOUT, handler, options);
    }

    /**
     * Subscribe to Page Activity Summary event
     */
    pageActivitySummary(
        handler: EventHandler,
        options?: ListenerOptions,
    ): void {
        this.addEventListener(events.PAGE_ACTIVITY_SUMMARY, handler, options);
    }

    /**
     * Subscribe to Page View event
     */
    pageView(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.PAGE_VIEW, handler, options);
    }

    /**
     * Subscribe to Place Order event
     */
    placeOrder(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.PLACE_ORDER, handler, options);
    }

    /**
     * Subscribe to Product Page View event
     */
    productPageView(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.PRODUCT_PAGE_VIEW, handler, options);
    }

    /**
     * Subscribe to Recommended Item Add to Cart Click event
     */
    recsItemAddToCartClick(
        handler: EventHandler<RecsUnitRenderContext>,
        options?: ListenerOptions,
    ): void {
        this.addEventListener(
            events.RECS_ITEM_ADD_TO_CART_CLICK,
            handler,
            options,
        );
    }

    /**
     * Subscribe to Recommended Item Click event
     */
    recsItemClick(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.RECS_ITEM_CLICK, handler, options);
    }

    /**
     * Subscribe to Recommendations API Request event
     */
    recsRequestSent(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.RECS_REQUEST_SENT, handler, options);
    }

    /**
     * Subscribe to Recommendations Response Received event
     */
    recsResponseReceived(
        handler: EventHandler,
        options?: ListenerOptions,
    ): void {
        this.addEventListener(events.RECS_RESPONSE_RECEIVED, handler, options);
    }

    /**
     * Subscribe to Recommended Unit Render Event
     */
    recsUnitRender(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.RECS_UNIT_RENDER, handler, options);
    }

    /**
     * Subscribe to Recommended Unit View event
     */
    recsUnitView(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.RECS_UNIT_VIEW, handler, options);
    }

    /**
     * Subscribe to Referrer Url event
     */
    referrerUrl(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.REFERRER_URL, handler, options);
    }

    /**
     * Subscribe to Remove from Cart event
     */
    removeFromCart(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.REMOVE_FROM_CART, handler, options);
    }

    /**
     * Subscribe to Search Category Click event
     */
    searchCategoryClick(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_CATEGORY_CLICK, handler);
    }

    /**
     * Subscribe to Search Product Click event
     */
    searchProductClick(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_PRODUCT_CLICK, handler);
    }

    /**
     * Subscribe to Search Request Sent event
     */
    searchRequestSent(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_REQUEST_SENT, handler);
    }

    /**
     * Subscribe to Search Response Received event
     */
    searchResponseReceived(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_RESPONSE_RECEIVED, handler);
    }

    /**
     * Subscribe to Search Results View event
     */
    searchResultsView(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_RESULTS_VIEW, handler);
    }

    /**
     * Subscribe to Search Suggestion Click event
     */
    searchSuggestionClick(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_SUGGESTION_CLICK, handler);
    }

    /**
     * Subscribe to Shopping Cart View event
     */
    shoppingCartView(handler: EventHandler): void {
        this.addEventListener(events.SHOPPING_CART_VIEW, handler);
    }

    /**
     * Subscribe to Sign In event
     */
    signIn(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.SIGN_IN, handler, options);
    }

    /**
     * Subscribe to Sign Out event
     */
    signOut(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.SIGN_OUT, handler, options);
    }

    /**
     * Subscribe to Update Cart event
     */
    updateCart(handler: EventHandler): void {
        this.addEventListener(events.UPDATE_CART, handler);
    }
}
