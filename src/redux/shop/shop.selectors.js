// memoization is an optimization technique used primarily to speed up programs
// by storing the results of expensive function calls
// and returning the cached result when the same input occur again
import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// memoize does the same idea of memoization as reselect does for the selectors
// here we are memoizing the return of our function which return our selector
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
