/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

const contexts = {
    CATEGORY_CONTEXT: "categoryContext",
    CUSTOM_URL_CONTEXT: "customUrlContext",
    EXPERIMENT_CONTEXT: "experimentContext",
    MAGENTO_EXTENSION_CONTEXT: "magentoExtensionContext",
    ORDER_CONTEXT: "orderContext",
    PAGE_CONTEXT: "pageContext",
    PRODUCT_CONTEXT: "productContext",
    RECOMMENDATIONS_CONTEXT: "recommendationsContext",
    REFERRER_URL_CONTEXT: "referrerUrlContext",
    SEARCH_INPUT_CONTEXT: "searchInputContext",
    SEARCH_RESULTS_CONTEXT: "searchResultsContext",
    SHOPPER_CONTEXT: "shopperContext",
    SHOPPING_CART_CONTEXT: "shoppingCartContext",
    STOREFRONT_INSTANCE_CONTEXT: "storefrontInstanceContext",
} as const;

export default contexts;
