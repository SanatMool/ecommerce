import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

// creating a new function prop called addItem, that will go into CollectionItem
// as the addItem function that we need to leverage
// whenever we dispatch or called addItem, function will receive item as property which is passed into addItem action trader
// which gives us back the object (from action)
// that new object will be dispatched into store and will go through our redux flow

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

// if second parameter (disptach) is not passed in connect
// connect will pass dispatch as props in component
export default connect(null, mapDispatchToProps)(CollectionItem);
