/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { ContextName, CustomContext, Context } from "./types/contexts";
import { EventName, ListenerOptions, EventHandler } from "./types/events";

export abstract class Base {
    // Set a context on ACDL
    protected setContext<T>(name: ContextName, context: T): void {
        window.adobeDataLayer.push({
            [name]: null,
        });
        window.adobeDataLayer.push({
            [name]: context,
        });
    }
    // Get a context from ACDL
    protected getContext<T>(name?: ContextName): T {
        return window.adobeDataLayer.getState
            ? window.adobeDataLayer.getState(name)
            : ({} as T);
    }
    // Add event listener to ACDL
    protected addEventListener(
        name: EventName,
        handler: EventHandler,
        options?: ListenerOptions,
    ): void {
        window.adobeDataLayer.push((dl: AdobeClientDataLayer) => {
            dl.addEventListener(name, handler, options);
        });
    }
    // Remove event listener from ACDL
    protected removeEventListener(
        name: EventName,
        handler: EventHandler,
    ): void {
        window.adobeDataLayer.push((dl: AdobeClientDataLayer) => {
            dl.removeEventListener(name, handler);
        });
    }
    // Push event to ACDL
    protected pushEvent<T>(event: EventName, context: T): void {
        window.adobeDataLayer.push((dl: AdobeClientDataLayer) => {
            dl.push({
                event,
                eventInfo: {
                    context: this.getContext<Context>(),
                    data: context,
                },
            });
        });
    }
}
