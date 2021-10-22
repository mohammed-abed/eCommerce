import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import { FlexRowEnd } from "../../App.style";
import {
  ShoppingCartContainer,
  RIcon,
  FlexColContainer,
  TextCard24px,
  FlexRow204pxW,
  TextCenter,
  ImageCard,
  FleCol120pxW,
  TextEnd,
  TextEndBlack,
  TextEndBlackMargin,
  CardContainerResp
} from "./ShoppingCart.Style";
import propTypes from "prop-types";

export default function ShoppingCart({
  srcImg,
  text,
  cost,
  discount,
  increaseCounter,
  decreaseCounter,
  handleDelete,
  counter,
}) {
  const Style = {
    position: "relative",
    top: "27px",
    right: "23px",
    fontWeight: "700",
    cursor: "pointer",
  };
  return (
    <ShoppingCartContainer>
      <FlexColContainer>
        <FlexRowEnd>
          <CloseIcon style={Style}onClick={handleDelete}  />
        </FlexRowEnd>
        <CardContainerResp>
          <ImageCard src={"https://proshop-ms.herokuapp.com/" + srcImg} />
          <TextCard24px>{text}</TextCard24px>
          <FlexRow204pxW>
            <RIcon onClick={decreaseCounter}>
              <RemoveIcon/>
            </RIcon>
            <TextCenter>{counter}</TextCenter>
            <RIcon onClick={increaseCounter}>
              <AddIcon />
            </RIcon>
          </FlexRow204pxW>
          {discount ? (
            <FleCol120pxW>
              <TextEnd>{discount}</TextEnd>
              <TextEndBlack>{cost}</TextEndBlack>
            </FleCol120pxW>
          ) : (
            <TextEndBlackMargin>{cost}</TextEndBlackMargin>
          )}
        </CardContainerResp>
      </FlexColContainer>
    </ShoppingCartContainer>
  );
}
ShoppingCart.defaultProps = {
  handleDelete: () => {},
  setCounter: () => {},
  counter: 1,
  decreaseCounter: () => {},
  increaseCounter: () => {},
};

ShoppingCart.propTypes = {
  text: propTypes.string.isRequired,
  srcImg: propTypes.string.isRequired,
  counter: propTypes.number.isRequired,
  cost: propTypes.number.isRequired,
  // setCounter: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,

  increaseCounter: propTypes.func.isRequired,
  decreaseCounter: propTypes.func.isRequired,
};
