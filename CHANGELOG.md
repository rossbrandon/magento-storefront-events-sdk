# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.10.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.9.0...v0.10.0) (2021-04-20)


### ⚠ BREAKING CHANGES

* The ShoppingCart context now has a different shape.

SEARCH-1381

### Bug Fixes

* fix shopping cart types ([af4b967](https://github.com/adobe/magento-storefront-events-sdk/commit/af4b9679f91a5d4e8111e8ed5073a59f7c01d098))

## [0.9.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.8.1...v0.9.0) (2021-04-16)


### ⚠ BREAKING CHANGES

* searchRequestId is a new required property for SearchInput and SearchResults
context.

SEARCH-1374
* The SearchResults schema now requires a facets property.

SEARCH-1342
* The SearchInput context now has a filters property instead of the previous
refinements properties.

### Features

* add search request id ([cc7b2a3](https://github.com/adobe/magento-storefront-events-sdk/commit/cc7b2a3847b898516290515b5ffc5593a034255d))
* adjusting the filter types ([c81b53c](https://github.com/adobe/magento-storefront-events-sdk/commit/c81b53cb2b019867eb234a658131d0d76c190cf1))
* update snowplow schema versions ([caeba1d](https://github.com/adobe/magento-storefront-events-sdk/commit/caeba1d1d211080a4c90d7038510f171c415730c))

### [0.8.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.8.0...v0.8.1) (2021-04-09)

## [0.8.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.7.0...v0.8.0) (2021-04-08)


### ⚠ BREAKING CHANGES

* The following events now require additional parameters when published:
- recsItemAddToCartClick
- recsItemClick
- recsUnitRender
- recsUnitView
- searchCategoryClick
- searchProductClick
- searchSuggestionClick

SEARCH-1326

### Features

* pass additional data to publish ([0d50b0c](https://github.com/adobe/magento-storefront-events-sdk/commit/0d50b0c8a99b64d9f020e630997ebfca3ea18070))

## [0.7.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.6.0...v0.7.0) (2021-04-07)


### ⚠ BREAKING CHANGES

* Renamed the getPageOffset and setPageOffset methods to getPage and setPage.

SEARCH-1329

### Features

* add page context ([530de3d](https://github.com/adobe/magento-storefront-events-sdk/commit/530de3db82d84527edd3e38bd6082ee28a3eebba))

## [0.6.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.5.2...v0.6.0) (2021-04-06)


### ⚠ BREAKING CHANGES

* Renamed adjustment.value to adjustment.amount.

### Bug Fixes

* fix adjustment type definition ([375cc84](https://github.com/adobe/magento-storefront-events-sdk/commit/375cc84d14141daf368dbfc93ed02bdd46663d96))

### [0.5.2](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.5.1...v0.5.2) (2021-04-01)


### Features

* add recommendations context ([309dc9f](https://github.com/adobe/magento-storefront-events-sdk/commit/309dc9f0bfcc84f23b3f2c2d3b90c8e966f678a9))

### [0.5.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.5.0...v0.5.1) (2021-03-29)


### Features

* support shopping cart view event ([5231139](https://github.com/adobe/magento-storefront-events-sdk/commit/52311395578768d2ac8864143c2adf28c5ce25ab))

## [0.5.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.4.0...v0.5.0) (2021-03-24)


### ⚠ BREAKING CHANGES

* Renamed foramttedPrice to formattedPrice in ShoppingCartItem.

### Bug Fixes

* fix typo in ShoppingCartItem ([bd61d84](https://github.com/adobe/magento-storefront-events-sdk/commit/bd61d842cf306149b16528494e35bb3ff5fbee9a))

## [0.4.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.3.1...v0.4.0) (2021-03-24)


### ⚠ BREAKING CHANGES

* Renamed environtmentId to environmentId.

### Bug Fixes

* fix storefront instance typo ([d4fb111](https://github.com/adobe/magento-storefront-events-sdk/commit/d4fb11173f108f4ffe6a9f2a1b9731a13ca61ba5))

### [0.3.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.3.0...v0.3.1) (2021-03-22)

## [0.3.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.3...v0.3.0) (2021-03-22)


### ⚠ BREAKING CHANGES

* Removed the SEARCH_RESULT_CLICK event.

### Features

* support search result click events ([1759ba0](https://github.com/adobe/magento-storefront-events-sdk/commit/1759ba055286ab501ff80d5aeb00bf690ac31e56))

### [0.2.3](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.2...v0.2.3) (2021-03-19)

### [0.2.2](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.1...v0.2.2) (2021-03-18)

### [0.2.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.0...v0.2.1) (2021-03-18)


### Features

* **recommendations:** enables recommendations events ([cd76752](https://github.com/adobe/magento-storefront-events-sdk/commit/cd767529c0afaa24df5d2f7362057b1e47838b44))


### Bug Fixes

* **filename:** fixed recomendations.js to reocmmendations.js ([b6d7e13](https://github.com/adobe/magento-storefront-events-sdk/commit/b6d7e136242ca64e3fc64a95e2da09ea05aa2f9e))

## [0.2.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.1.1...v0.2.0) (2021-03-17)

### ⚠ BREAKING CHANGES

-   **rename:** Changing the package name to @adobe/magento-storefront-events-sdk.
-   **webpack:** window.magentoDataLayer.default is now window.MagentoDataLayer.

### build

-   **webpack:** include default export on window ([839d9d9](https://github.com/adobe/magento-storefront-events-sdk/commit/839d9d9ec4c077d8e6784b24bdbd9d1be8aae54a))

-   **rename:** change the package name ([9598d98](https://github.com/adobe/magento-storefront-events-sdk/commit/9598d98e3b3fa3ee48657252d8e6b2bf85a49205))

### [0.1.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.1.0...v0.1.1) (2021-03-16)

### Bug Fixes

-   **events:** event context was in data layer. Change to "eventInfo" object that won't be persisted ([e1de784](https://github.com/adobe/magento-storefront-events-sdk/commit/e1de784ef6920c629ab3b738d2a1e9eb1acbdcce))

## [0.1.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.0.9...v0.1.0) (2021-03-16)

### ⚠ BREAKING CHANGES

-   handlers no longer receive a reference to mdl as a second argument

### Features

-   add initial order context ([d2078b2](https://github.com/adobe/magento-storefront-events-sdk/commit/d2078b260d2b2db328a93cb687376e8734722a26))

-   send copy of the entire data layer context with handler rather than a reference to mdl ([37ba49a](https://github.com/adobe/magento-storefront-events-sdk/commit/37ba49af6073abe351a3c466d3080962d2b727f0)), closes [#8](https://github.com/adobe/magento-storefront-events-sdk/issues/8)

### [0.0.9](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.0.8...v0.0.9) (2021-03-15)

### Features

-   add missing unsubscribe support for generic event listeners ([f8ee42e](https://github.com/adobe/magento-storefront-events-sdk/commit/f8ee42e079e9c861be0295e47135eb3d80077a2a))
