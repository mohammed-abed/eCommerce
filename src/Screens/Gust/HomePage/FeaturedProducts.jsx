import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import {
  FlexBox,
  InnerSection,
  FlexRow,
  FlexRowCenter,
  FlexBox100pxmargin43,
  Hr,
  HrDiv,
  SubTitle,
} from "../../../App.style";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import { DotSpan } from "./HomePage.Style";
import Card from "../../../Components/Cards/Card";

const styles = {
  root: {
    position: "relative",
    width: "100%",
  },
  styleIcon: {
    fontSize: 35,
    color: "#FCDD06",
    fill: "#FCDD06",
    cursor: "pointer",
  },
  styleIconSave: {
    fontSize: 40,
    color: "#242424",
    fill: "#242424",
    opacity: 0.3,
  },
};

export default function FeaturedProduct({ products }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleChangeIndex = () => {};
  console.log(products);
  const chunkSize =
    window.innerWidth > 1100 ? 3 : window.innerWidth > 800 ? 2 : 1;
  const getData = () => {
    const arr1 = [...products];

    const newArr = [];
    for(let i=0;i<arr1.length;i++) {newArr.push(arr1.splice(0, chunkSize));}
    console.log(newArr);
    return newArr.map((itemProducts, index) => (
      <FlexRow key={index}>
        {itemProducts.map((item) => (
          <Card
            rating={item.rating}
            product={item}
            id={item._id}
            srcImg={"https://proshop-ms.herokuapp.com/" + item.image}
            text={item.name}
            value={true}
            cost={"$" + item.price}
            IconBtn={<BookmarkBorderIcon style={styles.styleIconSave} />}
            heightImg={"60%"}
          />
        ))}
      </FlexRow>
    ));
  };

  return (
    <FlexBox bgcolor={"#F7F8FC"}>
      <InnerSection margin={"60px 0"}>
        <SubTitle>Featured Products</SubTitle>
        <FlexRowCenter>
          <HrDiv></HrDiv>
        </FlexRowCenter>
        <Hr marginBottom={"45px"} />
        <SwipeableViews
          style={Object.assign({}, styles.root, styles.root)}
          index={sliderIndex}
          onChangeIndex={handleChangeIndex}
        >
          {getData()}
        </SwipeableViews>
        <FlexBox100pxmargin43>
          {getData().map((item, index) => (
            <DotSpan
              isGray={sliderIndex !== index}
              onClick={() => {
                setSliderIndex(index);
              }}
            />))}
        </FlexBox100pxmargin43>
      </InnerSection>
    </FlexBox>
  );
}
