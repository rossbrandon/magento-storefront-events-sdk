/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export type Recommendations = {
    units: Array<RecommendationUnit>;
};

export type RecommendationUnit = {
    unitId: string;
    unitName: string;
    unitType: string;
    searchTime: number;
    totalProducts: number;
    primaryProducts: number;
    backupProducts: number;
    products: Array<RecommendedProduct>;
};

export type RecommendedProduct = {
    rank: number;
    score: number;
    sku: string;
    name: string;
    productId: number;
    shortDescription?: string | null;
    type: string;
    visibility: string;
    categories: Array<string>;
    weight: number;
    weightType?: string | null;
    currency: string;
    image?: Image | null;
    smallImage?: Image | null;
    thumbnailImage?: Image | null;
    swatchImage?: string | null;
    url: string;
    prices: Prices;
    queryType: string;
};

export type Image = {
    label?: string | null;
    url: string;
};

export type Prices = {
    maximum: Price;
    minimum: Price;
};

export type Price = {
    finalAdjustments: Array<Adjustment>;
    final: number;
    regular: number;
    regularAdjustments: Array<Adjustment>;
};

export type Adjustment = {
    code: string;
    amount: number;
};
