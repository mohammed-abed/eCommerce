import {
  Text,
  FlexRow,
  Span,
  FlexCol,
  Image,
  FlexRowJustifyStart,
  FlexRowStartStart,
  FlexRowBetween,
  FlexRowStartBetween,
  FlexColAlignStart,
  FlexRowStartCenter,
  FlexRowEnd,
  FlexColstartStart,
} from "../../App.style";
import {
  OrederContainer,
  FlexCol1516px,
  FlexRow55,
  SpanOrder,
  SpanOrder2,
  FlexRow250px,
  FlexCol950px,
  Textwidth30,
  TextFlexEnd,
  TextFlexEndBlack,
  Text22,
} from "./ReviewOreder.Style";
import Button from "../../Components/Button/Button";
import phone from "../../Assets/img14.PNG";
import airpods from "../../Assets/img15.PNG";
import visa from "../../Assets/visa.PNG";

export default function PlaceOnOreder() {
  return (
    <OrederContainer>
      <FlexCol1516px>
        <Text fontSize="32px" weight="700" marginA="0 0 36px 0">
          Review Order
        </Text>
        <FlexRow55>
          <FlexRowJustifyStart>
            <SpanOrder style={{ color: "#7C7C7C" }}>1</SpanOrder>
            <Text
              fontSize="22px"
              weight="700"
              marginA="0 0 0 10px"
              color="#7C7C7C"
            >
              Shipping and Payment
            </Text>
          </FlexRowJustifyStart>
          <FlexRow250px></FlexRow250px>
          <FlexRowJustifyStart>
            <SpanOrder2>2</SpanOrder2>
            <Text fontSize="22px" weight="700" marginA="0 0 0 10px">
              Place an Order
            </Text>
          </FlexRowJustifyStart>
        </FlexRow55>
        <FlexRowStartStart>
          <FlexCol950px>
            <Text fontSize="24px" weight="700" marginA="0 0 16px">
              Shipping Address
            </Text>
            <FlexRowBetween>
              <FlexColAlignStart width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="10px 0 16px"
                >
                  Mona Mohammed
                </Text>
                <Text
                  width="250px"
                  weight="700"
                  color="#707070"
                  marginA="0 0 40px"
                  lineHeight="1.8"
                >
                  56051 Jones Falls, Gaza, Palestine - 62502
                </Text>
              </FlexColAlignStart>
            </FlexRowBetween>

            <FlexRowStartBetween>
              <Text fontSize="24px" weight="700" marginA="0 0 20px 0">
                Order Details
              </Text>
              <Text22>Change</Text22>
            </FlexRowStartBetween>
            <FlexRow margin="0 0 20px" height="96px">
              <Image src={phone} width="135px" />
              <FlexColAlignStart padding="0 22px 35px 22px">
                <Text
                  align="flex-start"
                  color="#70707095"
                  weight="700"
                  marginA="0 0 30px"
                >
                  iPhone 11 Pro 256GB Memory
                </Text>
                <FlexRowBetween>
                  <Text color="#70707095" weight="700">
                    $499.99 <Span margin="0 0 0 10px">×1</Span>
                  </Text>
                  <Text color="#242424" weight="700">
                    $89.99
                  </Text>
                </FlexRowBetween>
              </FlexColAlignStart>
            </FlexRow>
            <FlexRow margin="0 0 20px" height="96px">
              <Image src={airpods} width="135px" />
              <FlexColAlignStart padding="0 22px 35px 22px">
                <Text
                  align="flex-start"
                  color="#70707095"
                  weight="700"
                  marginA="0 0 30px"
                >
                  Apple Airpods Wireless Bluetooth Headset
                </Text>
                <FlexRowBetween>
                  <Text color="#70707095" weight="700">
                    $89.99 <Span margin="0 0 0 10px">×1</Span>
                  </Text>
                  <Text color="#242424" weight="700">
                    $89.99
                  </Text>
                </FlexRowBetween>
              </FlexColAlignStart>
            </FlexRow>

            <FlexRowStartBetween>
              <Text fontSize="24px" weight="700" marginA="0 0 20px 0">
                Payment Details
              </Text>
              <Text22>Change</Text22>
            </FlexRowStartBetween>
            <FlexRowStartCenter>
              <Image src={visa} width="80px" />
              <Text color="#70707095" weight="700">
                **** 1245
              </Text>
            </FlexRowStartCenter>
          </FlexCol950px>

          <FlexColstartStart
            width="400px"
            height="280px"
            margin="0 0 0 30px"
            bgcolor="#F2F2F2"
            borderRadius="16px"
          >
            <FlexRowStartBetween padding="35px 22px 22px 22px">
              <Text fontSize="32px" weight="700" marginA="0 0 20px 0">
                Order Details
              </Text>
            </FlexRowStartBetween>

            <FlexCol padding="0 22px">
              <FlexRowBetween margin="0 0 16px">
                <Textwidth30>Subtotal</Textwidth30>
                <TextFlexEnd>$589.98</TextFlexEnd>
              </FlexRowBetween>
              <FlexRowBetween margin="0 0 16px">
                <Textwidth30>Tax</Textwidth30>
                <TextFlexEnd>$2.53</TextFlexEnd>
              </FlexRowBetween>
              <FlexRowBetween margin="0 0 16px">
                <Textwidth30>Shipping</Textwidth30>
                <TextFlexEnd>$0.00</TextFlexEnd>
              </FlexRowBetween>
              <FlexRowBetween margin="0 0 16px">
                <Text width="30%" weight="700">
                  Total
                </Text>
                <TextFlexEndBlack>$592.51</TextFlexEndBlack>
              </FlexRowBetween>
            </FlexCol>
            <FlexRowEnd margin="60px 0 ">
              <Button text="Place Order" />
            </FlexRowEnd>
          </FlexColstartStart>
        </FlexRowStartStart>
      </FlexCol1516px>
    </OrederContainer>
  );
}
