import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  FlexRow,
  Text,
  Image,
  Span,
  FlexColStart,
  FlexRowStart,
  FlexColAlignStart,
  FlexColStartBetween,
  SpinnerContainer,
} from "../../App.style";
import { useState } from "react";
import {
  SpecificationContainer,
  RIcon,
  ProductInfo,
  AddToCart,
  FlexColMargin30,
  FlexRow204pxW,
  FlexCol200pxW,
  FlexRowMarginTop,
  FlexRow40pxH,
  FlexColStartMargin,
  DotSpan,
  FlexRowStartEnd,
  SpanColor,
  Text24px,
  FlexCol470pxW,
  FlexCol1134px,
  FlexColWhite,
  FlexColMarginTop,
  StyledTextArea,
} from "./Specification.Style";
import Reviews from "./Reviews";
import FeaturedProduct from "../../Screens/Gust/HomePage/FeaturedProducts";
import Button from "../../Components/Button/Button";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import { addReviewAction } from "../../Redux/User/UserActions";
import {
  ADD_REVIEW_RESET,
  ADD_REVIEW_TO_PRODUCT,
} from "../../Redux/User/ConstTypeAction";
import { useLocationWithQuery } from "react-router-query-hooks";
import {
  getFeaturedProducts,
  getProduct,
} from "../../Redux/Guest/guestActions";
import { addCartItem } from "../../Redux/Cart/cartActions";
import Failed from "../SnackBars/Failed";
import Success from "../SnackBars/Success";
import Warning from "../SnackBars/Warning";
export default function Specification(props) {
  const locationQuery = useLocationWithQuery();
  const {
    query: { review: reviewFromQuery, rating: ratingFromQuery },
  } = locationQuery;
  const [count, setcount] = useState(1);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const params = useParams();
  const [review, setReview] = useState(reviewFromQuery ? reviewFromQuery : "");
  const [rating, setRating] = useState(ratingFromQuery ? ratingFromQuery : 0);
  const history = useHistory();
  const product = state.guestState.product;
    
  
  const goBack = () => {
    history.goBack();
  };
  useEffect(() => {
    dispatch({
      type: ADD_REVIEW_RESET,
    });
    dispatch(getFeaturedProducts());
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (state?.userDetails?.addingReview?.success) {
      dispatch({
        type: ADD_REVIEW_TO_PRODUCT,
        payload: {
          comment: review,
          rating,
          createdAt: new Date().toString(),
          name: state?.userDetails.user.name,
        },
      });
      setError("");
      setReview("");
      setRating(0);
    }
  }, [
    dispatch,
    rating,
    review,
    state?.userDetails?.addingReview?.success,
    state?.userDetails.user.name,
  ]);
  return state.guestState.isLoading || product.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColStart>
      <SpecificationContainer>
        <FlexColStartMargin>
          <Text24px>
            <Span color="#707070" onClick={goBack} style={{cursor:'pointer'}}>
              Back /
            </Span>{" "}
            {product.product.name}
          </Text24px>
          <ProductInfo>
            <FlexCol470pxW>
              <Image
                src={
                  "https://proshop-ms.herokuapp.com/" + product.product.image
                }
              />
            </FlexCol470pxW>
            <FlexCol1134px> 
              <FlexRowStart>
                <FlexColStartBetween>
                  <Text fontSize="32px" weight="700" marginA="30px 0">
                    {product.product.name}
                  </Text>
                  <FlexRow204pxW>
                    <RIcon
                      onClick={() => {
                        if (count > 1) {
                          setcount(count - 1);
                          // product.product.countInStock+=1
                          console.log(product.product.countInStock);
                        }
                      }}
                    >
                      <RemoveIcon />
                    </RIcon>
                    <Text
                      width={"108px"}
                      align="center"
                      justify="center"
                      weight="700"
                      fontSize="24px"
                    >
                      {count}
                    </Text>
                    <RIcon
                      onClick={() => {
                        if (count < product.product.countInStock) {
                          setcount(count + 1);
                        }
                      }}
                    >
                      <AddIcon />
                    </RIcon>
                  </FlexRow204pxW>
                  <FlexColMargin30>
                    <Text fontSize="24px" weight="500">
                      <Span color="#707070" margin="0 10px 0 0">
                        color :
                      </Span>{" "}
                      Silver
                    </Text>
                    <FlexRow40pxH>
                      <DotSpan bgcolor="#FED6BC" />
                      <DotSpan bgcolor="#EDEAE3" />
                      <DotSpan bgcolor="#6B7B73" />
                    </FlexRow40pxH>
                  </FlexColMargin30>
                </FlexColStartBetween>
                <FlexCol200pxW>
                    <Text
                      width={"120px"}
                      marginA={"0 35px 0 120px"}
                      weight={"700"}
                      fontSize={"30px"}
                    >
                      ${product.product.price}
                    </Text>
                </FlexCol200pxW>
              </FlexRowStart>
              <FlexColAlignStart>
                <Text fontSize="24px" weight="500">
                  <Span color="#707070" margin="0 10px 0 0">
                    Size :{" "}
                  </Span>
                  256GB
                </Text>
                <AddToCart>
                  <FlexRowStartEnd>
                    <SpanColor>64GB</SpanColor>
                    <SpanColor>256GB</SpanColor>
                    <SpanColor>512GB</SpanColor>
                  </FlexRowStartEnd>
                  <FlexRowMarginTop>
                    <Button
                      text={
                        <BookmarkBorderIcon
                          style={{ fontSize: "40px", color: "#B3B3B3" }}
                        />
                      }
                      width={"54px"}
                      borderRadius={10}
                      style={{
                        height: 62,
                        marginRight: 13,
                        background: "#fff",
                        border: "1px solid #FCDD06",
                      }}
                    />
                    <Button
                      text="Add to cart"
                      width={"324px"}
                      borderRadius={10}
                      style={{ height: 62 }}
                      link={"/soppingCarts"}
                      disabled={product.product.countInStock}
                      onClick={() => {
                        if (product.product.countInStock)
                          dispatch(addCartItem(product.product, count));
                      }}
                    />
                  </FlexRowMarginTop>
                </AddToCart>
              </FlexColAlignStart>
              <Text
                fofntSize="16px"
                style={{ lineHeight: "1.8" }}
                marginA="16px 0"
                weight="500"
                color="#707070"
              >
                {product.product.description}
              </Text>
            </FlexCol1134px>
          </ProductInfo>
          <FlexColMarginTop>
              <FlexColAlignStart>
                <Text fontSize="32px" weight="700" marginA="60px 0 30px">
                  Reviews
                </Text>
                <FlexColWhite>
                <Text
                  fontSize="26"
                  weight="700"
                  style={{ margin: "30px 0 30px", justifyContent: "start" }}
                >
                  Add Review
                </Text>
                <StyledTextArea
                  type="text"
                  placeholder={"Comment..."}
                  required={true}
                  onChange={(e) => setReview(e.target.value)}
                  value={review}
                />
                <Rating
                    style={{ margin: "0 20px 20px" }}
                    onChange={(e, value) => {
                      setRating(value);
                    }}
                    value={rating}
                    defaultValue={props.rate}
                    name="simple-controlled"
                  />
                {error && <Failed message = {error}/>}
                {state?.userDetails?.addingReview?.error && (
                    <Warning message = {state?.userDetails?.addingReview?.error}/>
                  )}
                  {state?.userDetails?.addingReview?.success && (
                    <Success message = {state?.userDetails?.addingReview?.success}/>
                    )}
                <FlexRow style={{ justifyContent: "start" }}>
                  <Button
                    text={"Submit"}
                    link={
                      state?.userDetails.user.name
                        ? ""
                        : `/login?pathname=${props.location.pathname}&rating=${rating}&review=${review}`
                    }
                    onClick={
                      state?.userDetails.user.name
                        ? () => {
                            dispatch(
                              addReviewAction(
                                {
                                  comment: review,
                                  rating,
                                },
                                product.product._id
                              )
                            );

                            if (review && rating) {
                            } else
                              setError(
                                "Please write a comment and add rating"
                              );
                          }
                        : () => {}
                    }
                  isLoading={state?.userDetails?.addingReview?.isLoading}
                  borderRadius={10}
                    
                  />
                </FlexRow>
                {product.product?.reviews?.map((item) => (
                  <Reviews
                    title={item.name}
                    text={item.comment}
                    date={item.createdAt}
                    rate={item.rating}
                  />
                ))}
              </FlexColWhite>
              </FlexColAlignStart>
          </FlexColMarginTop>
        </FlexColStartMargin>
      </SpecificationContainer>
      <FeaturedProduct products={state.guestState.products || []} />
    </FlexColStart>
  );
}
