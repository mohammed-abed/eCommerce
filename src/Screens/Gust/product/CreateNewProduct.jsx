import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Text, Span, FlexRowBetween, InputText } from "../../../App.style";
import Button from "../../../Components/Button/Button";
import {
  ProductContainer,
  TextArea,
  FlexColCreateProduct,
  FlexRowCreateProduct,
  AddIcon,
  TextProduct22PX,
  FlexCol346pxH,
  FlexCol378pxW,
  FlexCol866pxW,
  FlexColStart,
  FlexRowEnd,
} from "./Products.Style";

export default function CreateNewProduct() {
  return (
    <ProductContainer>
      <FlexColCreateProduct>
        <Text fontSize="32px" weight="700">
          Create New Product
        </Text>
        <FlexRowCreateProduct>
          <FlexCol378pxW>
            <FlexCol346pxH>
              <CloudUploadIcon
                style={{ fontSize: "200px", color: "#707070" }}
              />
              <Text>
                Product Images <Span>(4 images allowed)</Span>
              </Text>
            </FlexCol346pxH>
            <FlexRowBetween>
              <AddIcon>+</AddIcon>
              <AddIcon>+</AddIcon>
              <AddIcon>+</AddIcon>
            </FlexRowBetween>
          </FlexCol378pxW>

          <FlexCol866pxW>
            <Text fontSize="32px" weight="700" marginA="0 0 10px">
              Product Details
            </Text>
            <FlexRowBetween>
              <FlexColStart>
                <TextProduct22PX>Product name</TextProduct22PX>
                <InputText value="" marginB="30px" />
              </FlexColStart>
              <FlexColStart>
                <TextProduct22PX>Product Brand</TextProduct22PX>
                <InputText value="" marginB="30px" />
              </FlexColStart>
            </FlexRowBetween>

            <FlexRowBetween>
              <FlexColStart>
                <TextProduct22PX>Product ID</TextProduct22PX>
                <InputText value="" marginB="30px" />
              </FlexColStart>
              <FlexColStart>
                <TextProduct22PX>Product Category</TextProduct22PX>
                <InputText value="" marginB="30px" />
              </FlexColStart>
            </FlexRowBetween>

            <FlexRowBetween>
              <FlexColStart>
                <TextProduct22PX>Product Description</TextProduct22PX>
                <TextArea value="" />
              </FlexColStart>
            </FlexRowBetween>

            <FlexRowBetween>
              <FlexColStart>
                <TextProduct22PX>Product Description</TextProduct22PX>
                <InputText value="" />
              </FlexColStart>
              <FlexColStart>
                <TextProduct22PX>Price</TextProduct22PX>
                <InputText value="" />
              </FlexColStart>
            </FlexRowBetween>
          </FlexCol866pxW>
        </FlexRowCreateProduct>
        <FlexRowEnd>
          <Button
            text="Create New Product"
            bgcolor="#4BB543"
            color="#fff"
          ></Button>
        </FlexRowEnd>
      </FlexColCreateProduct>
    </ProductContainer>
  );
}
