import Button from "../../Components/Button/Button";
import { FlexBox, FlexRow, Text, Image } from "../../App.style";
import { CustomeCard } from "./Card.Style";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../Redux/Cart/cartActions";
import Rating from "@material-ui/lab/Rating";

export default function Card({
  srcImg,
  text,
  margin,
  height,
  cost,
  Discount,
  newCost,
  IconBtn,
  heightImg,
  id,
  rating,
  product,
  widthBorder,
  style
}) {
  const dispatch = useDispatch();

  return (
    <CustomeCard style ={style}margin={margin} height={height} to={`/product/${id}`} widthBorder={widthBorder}>
      <FlexBox height={heightImg}>
        <Image src={srcImg} />
      </FlexBox>
      <Text fontSize={"23px"} marginTop={"20px"} height={'60px'}>
        {text}
      </Text>
      <Rating readOnly={true} defaultValue={rating} name="simple-controlled" />
      {Discount ? (
        <FlexRow marginTop={"15px"}>
          <Text weight={true} color={"#FC4059"} margin={"15px"}>
            {newCost}
          </Text>
          <Text weight={true} decoration={true} color={"#242424"}>
            {cost}
          </Text>
          {/* <DiscountDiv>{Discount}</DiscountDiv> */}
        </FlexRow>
      ) : (
        <FlexRow marginTop={"15px"}>
          <Text weight={true} color={"#242424"}>
            {cost}
          </Text>
        </FlexRow>
      )}
      <FlexRow marginTop={"20px"}>
        <Button
          text={IconBtn}
          width={"54px"}
          borderRadius={10}
          isGray={true}
          style={{ height: 62, marginRight: 13 }}
        />
        <Button
          // disabled={product.countInStock}
          text="Add to cart"
          width={"324px"}
          borderRadius={10}
          style={{ height: 62 }}
          isGray={true}
          link={"/soppingCarts"}
          onClick={() => {
            if (product?.countInStock) dispatch(addCartItem(product, 1));
          }}
        />
      </FlexRow>
    </CustomeCard>
  );
}
