import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import {
  InnerSectionStart,
  FlexRowBorder,
  FlexRowJustifyStart,
  Hr,
  HrDiv,
  SubTitle,
} from "../../../App.style";
import Card from "../../../Components/Cards/Card";
import { TopRate } from "./Products.Style";
const styles = {
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

export function TopRateProduct({ title = "Top Rate Prodducts" ,topRatedProducts}) {
  return (
    <TopRate>
      <InnerSectionStart>
        <SubTitle>{title}</SubTitle>
        <FlexRowJustifyStart>
          <HrDiv></HrDiv>
        </FlexRowJustifyStart>
        <Hr marginButtom={"45px"} />
        <FlexRowBorder>
        {topRatedProducts.map((item) => (
            <Card
              product={item}
              id={item._id}
              key={item._id}
              srcImg={"https://proshop-ms.herokuapp.com/" + item.image}
              text={item.name}
              discount={0}
              cost={item.price}
              rating={item.rating}
              IconBtn={<BookmarkBorderIcon style={styles.styleIconSave} />}
              widthBorder={true}
            />
          ))}
        </FlexRowBorder>
      </InnerSectionStart>
    </TopRate>
  );
}
