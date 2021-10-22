import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { FlexRow, Text } from "../../../App.style";
import {
  ProductContainer,
  ProductDiv,
  TextProduct,
  FlexColProduct,
  FlexRowProduct,
} from "./Products.Style";
import Products from "./Products";
import Button from "../../../Components/Button/Button";
const Styles = {
  create: {
    background: "#fff",
    borderRadius: "4px",
    margin: "0 20px 0 0",
  },
  delete: {
    color: "#fff",
    background: "#FC4059",
    borderRadius: "4px",
  },
};
export default function Product() {
  return (
    <ProductContainer>
      <FlexColProduct>
        <FlexRowProduct>
          <Text fontSize="32px" weight="700">
            Products
          </Text>
          <Button
            width="229px"
            height="60px"
            text="Create Product"
            fontSize="24px"
          ></Button>
        </FlexRowProduct>
        <FlexRow align="flex-start" justify="space-between">
          <TextProduct>PRODUCT ID</TextProduct>
          <TextProduct>PRODUCT NAME</TextProduct>
          <TextProduct>PRODUCT PRICE</TextProduct>
          <TextProduct>CATEGORY</TextProduct>
          <TextProduct width={true}>ACTION</TextProduct>
        </FlexRow>

        <ProductDiv>
          <Products
            PRODUCTID="#564531"
            PRODUCTNAME="Airpods"
            PRODUCTPRICE="$89.99"
            CATEGORY="Accessories"
            ICONCREATE={<CreateIcon style={Styles.create} />}
            ICONDELETE={<DeleteIcon style={Styles.delete} />}
          />
        </ProductDiv>
        <ProductDiv>
          <Products
            PRODUCTID="#564531"
            PRODUCTNAME="Airpods"
            PRODUCTPRICE="$89.99"
            CATEGORY="Accessories"
            ICONCREATE={<CreateIcon style={Styles.create} />}
            ICONDELETE={<DeleteIcon style={Styles.delete} />}
          />
        </ProductDiv>
        <ProductDiv>
          <Products
            PRODUCTID="#564531"
            PRODUCTNAME="Airpods"
            PRODUCTPRICE="$89.99"
            CATEGORY="Accessories"
            ICONCREATE={<CreateIcon style={Styles.create} />}
            ICONDELETE={<DeleteIcon style={Styles.delete} />}
          />
        </ProductDiv>
        <ProductDiv>
          <Products
            PRODUCTID="#564531"
            PRODUCTNAME="Airpods"
            PRODUCTPRICE="$89.99"
            CATEGORY="Accessories"
            ICONCREATE={<CreateIcon style={Styles.create} />}
            ICONDELETE={<DeleteIcon style={Styles.delete} />}
          />
        </ProductDiv>
        <ProductDiv>
          <Products
            PRODUCTID="#564531"
            PRODUCTNAME="Airpods"
            PRODUCTPRICE="$89.99"
            CATEGORY="Accessories"
            ICONCREATE={<CreateIcon style={Styles.create} />}
            ICONDELETE={<DeleteIcon style={Styles.delete} />}
          />
        </ProductDiv>
        <ProductDiv>
          <Products
            PRODUCTID="#564531"
            PRODUCTNAME="Airpods"
            PRODUCTPRICE="$89.99"
            CATEGORY="Accessories"
            ICONCREATE={<CreateIcon style={Styles.create} />}
            ICONDELETE={<DeleteIcon style={Styles.delete} />}
          />
        </ProductDiv>
        <ProductDiv>
          <Products
            PRODUCTID="#564531"
            PRODUCTNAME="Airpods"
            PRODUCTPRICE="$89.99"
            CATEGORY="Accessories"
            ICONCREATE={<CreateIcon style={Styles.create} />}
            ICONDELETE={<DeleteIcon style={Styles.delete} />}
          />
        </ProductDiv>
        <ProductDiv>
          <Products
            PRODUCTID="#564531"
            PRODUCTNAME="Airpods"
            PRODUCTPRICE="$89.99"
            CATEGORY="Accessories"
            ICONCREATE={<CreateIcon style={Styles.create} />}
            ICONDELETE={<DeleteIcon style={Styles.delete} />}
          />
        </ProductDiv>
        <ProductDiv>
          <Products
            PRODUCTID="#564531"
            PRODUCTNAME="Airpods"
            PRODUCTPRICE="$89.99"
            CATEGORY="Accessories"
            ICONCREATE={<CreateIcon style={Styles.create} />}
            ICONDELETE={<DeleteIcon style={Styles.delete} />}
          />
        </ProductDiv>
      </FlexColProduct>
    </ProductContainer>
  );
}
