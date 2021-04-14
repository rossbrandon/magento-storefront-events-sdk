/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export type Page = {
    pageType: string;
    action: string;
    eventType?: "pageUnload" | "visibilityHidden";
    maxXOffset: number;
    maxYOffset: number;
    minXOffset: number;
    minYOffset: number;
    ping_interval: number;
    pings: number;
};
