import {
  FlexColStartStart,
  Text,
  Hr,
  FlexCol384px,
  FlexColAlignStart,
} from "../../../App.style";
import ShoppingCart from "../../../Components/ShoppingCart/ShoppingCart";
import Button from "../../../Components/Button/Button";
import { Span } from "./Cart.Style";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  decreaseCounter,
  deleteItem,
} from "../../../Redux/Cart/cartActions";
import {FlexCol1640px, ContainerCard, FlexCol75} from "./Cart.Style"
export default function SoppingCarts({ discount = "$999.97" }) {
  // const [counter, setCounter] = useState(1);
  const state = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const goBack = () => {
    history.goBack();
  };
  return (
    <FlexCol1640px>
      <Text
        color={"#242424"}
        fontSize={"24px"}
        marginA={"49px 0 30px 0"}
        width={"100%"}
        weight="500"
      >
        <Span color={"#707070"} onClick={goBack}>
          Back /{" "}
        </Span>
        Shopping Cart
      </Text>

      <ContainerCard>
        <FlexCol75>
          {state.cart.cart.map((item) => (
            <ShoppingCart
              key={item._id}
              text={item.name}
              cost={item.price}
              srcImg={item.image}
              counter={item.quantity}
              // setCounter={setCounter}
              handleDelete={() => dispatch(deleteItem(item._id))}
              increaseCounter={() => {
                if (item.quantity < item.countInStock)
                  dispatch(addCartItem(item, 1));
              }}
              decreaseCounter={() => {
                if (item.quantity > 1) dispatch(decreaseCounter(item, 1));
              }}
            />
          ))}
        </FlexCol75>
        <FlexCol384px>
          <FlexColStartStart>
            <Text fontSize={"32px"} weight={500}>
              Subtotal ({state.cart.cart.length}) items
            </Text>
            <Text fontSize={"32px"} weight={500}>
              Total (
              {state.cart.cart.reduce((acc, item) => {
                return acc + item.quantity;
              }, 0)}
              ) items
            </Text>
            {discount ? (
              <FlexColAlignStart>
                <Text
                  width={"120px"}
                  marginA={"30px 0 9px 0"}
                  weight={"700"}
                  fontSize={"24px"}
                  color={"#707070"}
                  decoration={true}
                >
                  {discount}
                </Text>
                <Text
                  width={"120px"}
                  // marginA={"0 35px 0 120px"}
                  weight={"700"}
                  fontSize={"30px"}
                >
                  $
                  {state.cart.cart
                    .reduce((acc, item) => {
                      return acc + item.price * item.quantity;
                    }, 0)
                    .toFixed(2)}
                </Text>
              </FlexColAlignStart>
            ) : (
              <Text fontSize={"38px"} weight={700}>
                $
                {state.cart.cart
                  .reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                  }, 0)
                  .toFixed(2)}
              </Text>
            )}
          </FlexColStartStart>
          <Hr marginBottom="0" />
          <Button
            width={"324px"}
            text="Proceed to checkout"
            link={"/proceedCheckout/shippingAddress"}
          ></Button>
        </FlexCol384px>
      </ContainerCard>
    </FlexCol1640px>
  );
}
