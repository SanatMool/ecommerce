import React from "react";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// this is necessary because unlike other selectors,
// this selector needs a part of the state depending on the URL parameter
// ownProps gives all of the props that we are getting in a component
const mapStateToProps = (state, ownProps) => ({
  // selectCollection is function the returns a function
  // we pass state to the function, that comes out of it
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
