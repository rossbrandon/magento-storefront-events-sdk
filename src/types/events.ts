/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { CustomContext, Context } from "./contexts";
import events from "../events";

export type EventName =
    | typeof events.ADD_TO_CART
    | typeof events.CUSTOM_URL
    | typeof events.DATA_LAYER_CHANGE
    | typeof events.DATA_LAYER_EVENT
    | typeof events.INITIATE_CHECKOUT
    | typeof events.PAGE_ACTIVITY_SUMMARY
    | typeof events.PAGE_VIEW
    | typeof events.PLACE_ORDER
    | typeof events.PRODUCT_PAGE_VIEW
    | typeof events.RECS_ITEM_CLICK
    | typeof events.RECS_ITEM_ADD_TO_CART_CLICK
    | typeof events.RECS_REQUEST_SENT
    | typeof events.RECS_RESPONSE_RECEIVED
    | typeof events.RECS_UNIT_RENDER
    | typeof events.RECS_UNIT_VIEW
    | typeof events.REFERRER_URL
    | typeof events.REMOVE_FROM_CART
    | typeof events.SEARCH_CATEGORY_CLICK
    | typeof events.SEARCH_PRODUCT_CLICK
    | typeof events.SEARCH_REQUEST_SENT
    | typeof events.SEARCH_RESPONSE_RECEIVED
    | typeof events.SEARCH_RESULTS_VIEW
    | typeof events.SEARCH_SUGGESTION_CLICK
    | typeof events.SHOPPING_CART_VIEW
    | typeof events.SIGN_IN
    | typeof events.SIGN_OUT
    | typeof events.UPDATE_CART;

export type Event<T> = {
    event: EventName;
    eventInfo: {
        context: Context;
        data: T;
    };
};

export type EventHandler<T> = (event: Event<T>) => void;

export type ListenerOptions = {
    path?: string;
    scope?: "past" | "future" | "all";
};

export type RecsUnitRenderContext = { recsUnitId: string } & GenericContextData;

type GenericContextData = { [K: string]: unknown };
