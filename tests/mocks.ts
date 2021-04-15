/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { CustomUrl } from "../src/types/schemas/customUrl";
import {
    Category,
    Experiment,
    MagentoExtension,
    Order,
    Page,
    Product,
    Recommendations,
    ReferrerUrl,
    SearchInput,
    SearchResults,
    Shopper,
    ShoppingCart,
    StorefrontInstance,
} from "../src/types/schemas/";

export const generateCategoryContext = (
    overrides?: Partial<Category>,
): Category => ({
    name: "Gear",
    urlKey: "gear",
    urlPath: "gear",
    ...overrides,
});

export const generateCustomUrlContext = (
    overrides?: Partial<CustomUrl>,
): CustomUrl => ({
    customUrl: "https://www.test.org",
    ...overrides,
});

export const generateExperimentContext = (
    overrides?: Partial<Experiment>,
): Experiment => ({
    experimentName: "MyExperiment",
    variantName: "MyVariant",
    ...overrides,
});

export const generateMagentoExtensionContext = (
    overrides?: Partial<MagentoExtension>,
): MagentoExtension => ({
    magentoExtensionVersion: "1.0.0",
    ...overrides,
});

export const generateOrderContext = (overrides?: Partial<Order>): Order => ({
    appliedCouponCode: "",
    email: "test@test.com",
    grandTotal: 123,
    orderId: 1293949,
    otherTax: 5,
    paymentMethodCode: "giftcard",
    paymentMethodName: "giftcard",
    salesTax: 7,
    ...overrides,
});

export const generatePageContext = (overrides?: Partial<Page>): Page => ({
    pageType: "pdp",
    action: "product-view",
    eventType: "visibilityHidden",
    maxXOffset: 0,
    maxYOffset: 0,
    minXOffset: 0,
    minYOffset: 0,
    ping_interval: 5,
    pings: 20419,
    ...overrides,
});

export const generateProductContext = (
    overrides?: Partial<Product>,
): Product => ({
    categories: ["14", "15", "21"],
    name: "Felicia Maxi Dress",
    productId: 1153,
    sku: "VD04",
    topLevelSku: "VD04",
    ...overrides,
});

export const generateRecommendationsContext = (
    overrides?: Partial<Recommendations>,
): Recommendations => ({
    units: [
        {
            unitId: "abc123",
            unitName: "most-viewed",
            unitType: "primary",
            searchTime: 2,
            totalProducts: 2,
            primaryProducts: 2,
            backupProducts: 0,
            products: [
                {
                    rank: 1,
                    score: 100.5,
                    sku: "space sku tst two",
                    name: "space sku tst two",
                    productId: 2051,
                    shortDescription: "short product description",
                    type: "simple",
                    visibility: "Catalog, Search",
                    categories: [
                        "",
                        "gear",
                        "collections",
                        "training",
                        "men",
                        "women",
                        "promotions",
                        "gift-cards",
                        "sale",
                        "what-is-new",
                        "what-is-new/qa",
                    ],
                    weight: 7.0,
                    currency: "USD",
                    url: "https://magento.com",
                    prices: {
                        maximum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 33.12,
                            regular: 33.12,
                            regularAdjustments: [],
                        },
                        minimum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 33.12,
                            regular: 33.12,
                            regularAdjustments: [],
                        },
                    },
                    queryType: "primary",
                },
                {
                    rank: 2,
                    score: 100.5,
                    sku: "space sku tst three",
                    name: "space sku tst three",
                    productId: 2052,
                    shortDescription: "short product description",
                    type: "simple",
                    visibility: "Catalog, Search",
                    categories: [
                        "",
                        "gear",
                        "collections",
                        "training",
                        "men",
                        "women",
                        "promotions",
                        "gift-cards",
                        "sale",
                        "what-is-new",
                        "what-is-new/qa",
                    ],
                    weight: 7.0,
                    currency: "USD",
                    url: "https://magento.com",
                    prices: {
                        maximum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 12.22,
                            regular: 12.22,
                            regularAdjustments: [],
                        },
                        minimum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 12.22,
                            regular: 12.22,
                            regularAdjustments: [],
                        },
                    },
                    queryType: "primary",
                },
            ],
        },
    ],
    ...overrides,
});

export const generateReferrerUrlContext = (
    overrides?: Partial<ReferrerUrl>,
): ReferrerUrl => ({
    referrerUrl: "https://www.test.org",
    ...overrides,
});

export const generateSearchInputContext = (
    overrides?: Partial<SearchInput>,
): SearchInput => ({
    source: "search-bar",
    query: "pants",
    page: 1,
    perPage: 20,
    filters: [{ attribute: "size", eq: "small" }],
    sortType: "relevance",
    sortOrder: "descending",
    ...overrides,
});

export const generateSearchResultsContext = (
    overrides?: Partial<SearchResults>,
): SearchResults => ({
    products: [],
    categories: [],
    suggestions: [],
    productCount: 0,
    categoryCount: 0,
    suggestionCount: 0,
    page: 1,
    perPage: 20,
    ...overrides,
});

export const generateShopperContext = (
    overrides?: Partial<Shopper>,
): Shopper => ({ shopperId: "guest", ...overrides });

export const generateShoppingCartContext = (
    overrides?: Partial<ShoppingCart>,
): ShoppingCart => ({
    totalQuantity: 5,
    id: "1",
    subtotalAmount: 3.41,
    subtotalExcludingTax: 2.57,
    subtotalIncludingTax: 3.41,
    ...overrides,
});

export const generateStorefrontInstanceContext = (
    overrides?: Partial<StorefrontInstance>,
): StorefrontInstance => ({
    baseCurrencyCode: "USD",
    environment: "Test",
    environmentId: "12345",
    alternateEnvironmentId: "67890",
    storeId: 12345,
    storeName: "Test Store",
    storeUrl: "https://www.test.org",
    storeViewCurrencyCode: "CLP",
    storeViewId: 12345,
    storeViewName: "Test store view",
    websiteId: 12345,
    websiteName: "test website name",
    ...overrides,
});
