/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export type SearchResultProduct = {
    name: string;
    sku: string;
    url: string;
    imageUrl: string;
    price: number;
    rank: number;
};

export type SearchResultCategory = {
    name: string;
    url: string;
    rank: number;
};

export type SearchResultSuggestion = {
    suggestion: string;
    rank: number;
};

export type SearchResults = {
    searchRequestId: string;
    products: Array<SearchResultProduct>;
    categories: Array<SearchResultCategory>;
    suggestions: Array<SearchResultSuggestion>;
    productCount: number;
    categoryCount: number;
    suggestionCount: number;
    page: number;
    perPage: number;
    facets: Array<SearchFacet> | null;
};

export type SearchFacet = {
    attribute: string;
    dataType: string;
    facetType: string;
    buckets: Array<SearchBucket>;
};

export type SearchBucket = {
    tite: string;
    count: number;
};
