/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
import contexts from "../src/contexts";
import events from "../src/events";
import mdl, { MagentoStorefrontEvents } from "../src/index";
import { Event } from "../src/types/events";
import { Shopper } from "../src/types/schemas/shopper";

beforeAll(() => {
    // Forces magento data layer code to be bundled so that
    // 'data layer should exist' test passes
    expect(mdl).toBeInstanceOf(MagentoStorefrontEvents);
});

beforeEach(async () => {
    jest.resetModules();
    window.adobeDataLayer = [];
    require("@adobe/adobe-client-data-layer");
});

test("data layer should exist", () => {
    expect(window.adobeDataLayer).toBeDefined();
});

describe("events", () => {
    test("add to cart", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.ADD_TO_CART,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.addToCart(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.addToCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.addToCart(eventHandler);
        mdl.publish.addToCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("custom url", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.CUSTOM_URL,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.customUrl(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.customUrl();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.customUrl(eventHandler);
        mdl.publish.customUrl();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("initiate checkout", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.INITIATE_CHECKOUT,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.initiateCheckout(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.initiateCheckout();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.initiateCheckout(eventHandler);
        mdl.publish.initiateCheckout();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("page activity summary", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.PAGE_ACTIVITY_SUMMARY,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.pageActivitySummary(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.pageActivitySummary();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.pageActivitySummary(eventHandler);
        mdl.publish.pageActivitySummary();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("page view", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.PAGE_VIEW,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.pageView(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.pageView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.pageView(eventHandler);
        mdl.publish.pageView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("product page view", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.PRODUCT_PAGE_VIEW,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.productPageView(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.productPageView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.productPageView(eventHandler);
        mdl.publish.productPageView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec item add to cart click", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_ITEM_ADD_TO_CART_CLICK,
                eventInfo: expect.any(Object),
            });
        });
        mdl.subscribe.recsItemAddToCartClick(event => {
            event.eventInfo.data.recsUnitId;
        });
        mdl.subscribe.recsItemAddToCartClick(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsItemAddToCartClick({
            recsUnitId: "test",
            somethingElse: "foo",
        });
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsItemAddToCartClick(eventHandler);
        mdl.publish.recsItemAddToCartClick();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec item click", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_ITEM_CLICK,
                eventInfo: expect.any(Object),
            });
        });
        mdl.subscribe.recsItemClick(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsItemClick();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsItemClick(eventHandler);
        mdl.publish.recsItemClick();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec request sent", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_REQUEST_SENT,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.recsRequestSent(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsRequestSent();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsRequestSent(eventHandler);
        mdl.publish.recsRequestSent();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec response sent", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_RESPONSE_RECEIVED,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.recsResponseReceived(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsResponseReceived();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsResponseReceived(eventHandler);
        mdl.publish.recsResponseReceived();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec unit render", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_UNIT_RENDER,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.recsUnitRender(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsUnitRender();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsUnitRender(eventHandler);
        mdl.publish.recsUnitRender();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec unit view", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_UNIT_VIEW,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.recsUnitView(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsUnitView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsUnitView(eventHandler);
        mdl.publish.recsUnitView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("referrer url", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.REFERRER_URL,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.referrerUrl(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.referrerUrl();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.referrerUrl(eventHandler);
        mdl.publish.referrerUrl();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("remove from cart", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.REMOVE_FROM_CART,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.removeFromCart(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.removeFromCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.removeFromCart(eventHandler);
        mdl.publish.removeFromCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search category click", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_CATEGORY_CLICK,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchCategoryClick(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchCategoryClick();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchCategoryClick(eventHandler);
        mdl.publish.searchCategoryClick();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search product click", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_PRODUCT_CLICK,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchProductClick(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchProductClick();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchProductClick(eventHandler);
        mdl.publish.searchProductClick();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search request sent", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_REQUEST_SENT,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchRequestSent(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchRequestSent();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchRequestSent(eventHandler);
        mdl.publish.searchRequestSent();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search response received", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_RESPONSE_RECEIVED,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchResponseReceived(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchResponseReceived();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchResponseReceived(eventHandler);
        mdl.publish.searchResponseReceived();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search results view", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_RESULTS_VIEW,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchResultsView(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchResultsView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchResultsView(eventHandler);
        mdl.publish.searchResultsView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search suggestion click", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_SUGGESTION_CLICK,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchSuggestionClick(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchSuggestionClick();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchSuggestionClick(eventHandler);
        mdl.publish.searchSuggestionClick();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("shopping cart view", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SHOPPING_CART_VIEW,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.shoppingCartView(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.shoppingCartView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.shoppingCartView(eventHandler);
        mdl.publish.shoppingCartView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("sign in", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SIGN_IN,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.signIn(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.signIn();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.signIn(eventHandler);
        mdl.publish.signIn();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("sign out", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SIGN_OUT,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.signOut(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.signOut();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.signOut(eventHandler);
        mdl.publish.signOut();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("update cart", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.UPDATE_CART,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.updateCart(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.updateCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.updateCart(eventHandler);
        mdl.publish.updateCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("getting state before data layer initializes", () => {
        window.adobeDataLayer = [];
        expect(mdl.context.getCustomUrl()).toEqual({});
        expect(mdl.context.getReferrerUrl()).toEqual({});
    });

    test("deferred handlers receive the same context object as synchronous handlers", async () => {
        const firstContext = { shopperId: "guest" } as Shopper;
        const secondContext = { shopperId: "logged-in" } as Shopper;

        const handler = (event: Event) => {
            expect(event.eventInfo.shopperContext).toEqual(firstContext);
            expect(mdl.context.getShopper()).toEqual(firstContext);
        };
        const deferredHandler = (event: Event) => {
            // values don't match because the event context was created from
            // the context when the event was fired thus ensuring deferred
            // handlers receive "timely" data
            expect(event.eventInfo.shopperContext).toEqual(firstContext);
            expect(mdl.context.getShopper()).toEqual(secondContext);
        };
        mdl.context.setShopper(firstContext);
        mdl.subscribe.signIn(handler);
        mdl.publish.signIn();
        await new Promise<void>(res => {
            setTimeout(() => res());
        });
        mdl.context.setShopper(secondContext);
        await new Promise<void>(res => {
            setTimeout(() => res());
        });
        mdl.subscribe.signIn(deferredHandler);
    });

    test("event publisher passes user-defined context through to subscribers", () => {
        const myContext = { foo: "bar" };
        const handler = (event: Event) => {
            expect(event.eventInfo).toEqual(myContext);
        };

        mdl.subscribe.addToCart(handler);
        mdl.publish.addToCart(myContext);
    });

    test("user-defined context merges with and overrides acdl context", () => {
        mdl.context.setCustomUrl({ customUrl: "testing.edu" });
        mdl.context.setReferrerUrl({ referrerUrl: "test.com" });
        const myContext = mdl.context.getReferrerUrl(); // using get/set to make sure our context matches exactly what referrer context would look like in the data layer

        const handler = (event: Event) => {
            expect(event.eventInfo).toEqual({
                [contexts.CUSTOM_URL_CONTEXT]: expect.anything(),
                [contexts.REFERRER_URL_CONTEXT]: myContext,
            });
        };
        // now set the context to something else
        mdl.context.setReferrerUrl({ referrerUrl: "different.me" });
        // fire event with context to overwrite
        mdl.subscribe.pageView(handler);
        mdl.publish.pageView({ [contexts.REFERRER_URL_CONTEXT]: myContext });
    });

    test("event context data is not persisted in data layer", () => {
        mdl.context.setCustomUrl({ customUrl: "test.com" });
        mdl.publish.pageView();

        expect(window.adobeDataLayer.getState()).not.toHaveProperty(
            "eventInfo",
        );
    });
});
