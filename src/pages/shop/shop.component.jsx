import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect"; // replaced by breaking down the components
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.conatiner";

import {
  fetchCollectionsStart,
  // updateCollections,
} from "../../redux/shop/shop.actions";

// import {
//   selectIsCollectionFetching,
//   selectIsCollectionsLoaded,
// } from "../../redux/shop/shop.selectors";

// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview); -- replaced by CollectionsOverviewContainer
// import CollectionPage from "../collection/collection.component";
// const CollectionPageWithSpinner = WithSpinner(CollectionPage); -- replaced by CollectionPageContainer

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // -------------replaced by useEffect hook
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;

  //   fetchCollectionsStart();
  // }

  // const { match } = this.props;    // -------------replaced by useEffect hook
  // const { isCollectionFetching,isCollectionsLoaded } = this.props; -- replaced by CollectionsOverviewContainer

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
        // render={(props) => (
        //   <CollectionsOverviewWithSpinner
        //     isLoading={isCollectionFetching} -- replaced by CollectionsOverviewContainer
        //     {...props}
        //   />
        // )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
        // render={(props) => (
        //   <CollectionPageWithSpinner
        //     isLoading={!isCollectionsLoaded} --- replaced by CollectionPageContainer
        //     {...props}
        //   />
        // )}
      />
    </div>
  );
};

//--------------- replaced by breaking down the Components
// const mapStateToProps = createStructuredSelector({
// isCollectionFetching: selectIsCollectionFetching, --- replaced by CollectionsOverviewContainer
// isCollectionsLoaded: selectIsCollectionsLoaded, --- replaced by CollectionPageContainer
// });

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: (collectionsMap) =>
  // dispatch(updateCollections(collectionsMap)),

  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
