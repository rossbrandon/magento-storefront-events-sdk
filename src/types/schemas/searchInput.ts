/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

type SearchInput = {
    searchRequestId: string;
    source: "search-bar" | "results-page" | "custom" | null;
    query: string;
    page: number;
    perPage: number;
    filters: Array<SearchFilter>;
    sortType: string;
    sortOrder: "ascending" | "descending";
};

type SearchFilter = {
    attribute: string;
    eq?: string;
    in?: Array<string>;
    range?: {
        from?: number;
        to?: number;
    };
};

export { SearchInput, SearchFilter };
