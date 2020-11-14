// memoization is an optimization technique used primarily to speed up programs
// by storing the results of expensive function calls
// and returning the cached result when the same input occur again
import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// memoize does the same idea of memoization as reselect does for the selectors
// here we are memoizing the return of our function which return our selector
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
