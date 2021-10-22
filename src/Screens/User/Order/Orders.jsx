import {
  FlexCol,
  InnerSection,
  SpinnerContainer,
  Text,
} from "../../../App.style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../../Redux/Orders/ordersActions";
import { ListBox, RowCell, StyledRow,ErrorMessage } from "./Order";

function Orders(props) {
  const {
    orders: {
      userOrders: { isLoading, error, orders },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return isLoading ? (
    <SpinnerContainer />
  ) : error ? (
    <ErrorMessage>{error}</ErrorMessage>
  ) : (
    <InnerSection style={{ margin: "44px 0 60px", alignItems: "flex-start" }}>
      <Text
        style={{ justifyContent: "start",fontWeight:'700' }}
        fontSize="32px"
        color="#242424"
      >
        MY ORDERS
      </Text>
      <FlexCol>
        <ListBox>
          <StyledRow as={"div"}>
            <RowCell width={"30%"}>Id</RowCell>
            <RowCell>User Name</RowCell>
            <RowCell>Products</RowCell>
            <RowCell>Created At</RowCell>
            <RowCell>Payment</RowCell>
            <RowCell>Delivery</RowCell>
          </StyledRow>
          {orders.map((item) => (
            <StyledRow to={`/order/${item._id}`} key={item._id}>
              <RowCell width={"30%"}>{item._id}</RowCell>
              <RowCell>{item.user.name}</RowCell>
              <RowCell>{item.orderItems.length}</RowCell>
              <RowCell>{item.createdAt.substring(0, 10)}</RowCell>
              <RowCell isCompleted={item?.paymentResult?.status}>
                {item?.paymentResult?.status
                  ? item.paymentResult.status
                  : "Not Paid"}
              </RowCell>
              <RowCell isCompleted={item?.isDelivered}>
                {item?.isDelivered ? "Delivered" : "Not Delivered"}
              </RowCell>
            </StyledRow>
          ))}
        </ListBox>
      </FlexCol>
    </InnerSection>
  );
}

export default Orders;
