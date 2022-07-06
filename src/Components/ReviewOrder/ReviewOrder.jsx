import { Text, FlexRow, Span, FlexCol ,Hr, Image,FlexRowJustifyStart} from "../../App.style";
import { OrederContainer, InputText } from "./ReviewOreder.Style";
import Button from "../../Components/Button/Button";
import phone from '../../Assets/img14.PNG'
import airpods from '../../Assets/img15.PNG'

export default function ReviewOrder() {
  return (
    <OrederContainer>
      <FlexCol margin="44px 0 0 0" align="flex-start" width="1516px">
        <Text fontSize="32px" weight="700" marginA="0 0 36px 0">
          Review Order
        </Text>
        <FlexRow align="center" width="55%" margin="0 0 36px">
          <FlexRowJustifyStart>
            <Span
              width="40px"
              weight="700"
              height="40px"
              bgcolor="#FCDD06"
              fontSize="22px"
              justify="center"
              align="center"
            >
              1
            </Span>
            <Text fontSize="22px" weight="700" marginA="0 0 0 10px">
              Shipping and Payment
            </Text>
          </FlexRowJustifyStart>
          <FlexRow
            width="250px"
            height="1px"
            bgcolor="#70707080"
            justify="center"
            margin="0 20px 0 0"
          ></FlexRow>
          <FlexRowJustifyStart>
            <Span
              width="40px"
              height="40px"
              weight="700"
              bgcolor="#70707080"
              fontSize="22px"
              justify="center"
              align="center"
              color="#fff"
            >
              2
            </Span>
            <Text
              fontSize="22px"
              weight="700"
              color="#70707080"
              marginA="0 0 0 10px"
            >
              Place an Order
            </Text>
          </FlexRowJustifyStart>
        </FlexRow>
        <FlexRow
          justify="flex-start"
          align="flex-start"
          
        >
          <FlexCol
            justify="flex-start"
            align="flex-start"
            width="950px"
            bgcolor="#F2F2F2"
            height="652px"
            padding="45px 88px"
            borderRadius='16px'
          >
            <Text fontSize="32px" weight="700" marginA="0 0 16px">
              Shipping Address
            </Text>
            <FlexRow justify="space-between">
              <FlexCol align="flex-start" width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="0 0 16px"
                >
                  Country
                </Text>
                <InputText value="Palistine" />
              </FlexCol>
              <FlexCol align="flex-start" width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="0 0 16px"
                >
                  City
                </Text>
                <InputText value="Gaza" />
              </FlexCol>
            </FlexRow>
            <FlexRow justify="space-between">
              <FlexCol align="flex-start" width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="0 0 16px"
                >
                  Zip Code
                </Text>
                <InputText value="62502" />
              </FlexCol>
              <FlexCol align="flex-start" width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="0 0 16px"
                >
                  Street Address
                </Text>
                <InputText value="56051 Jones Falls" />
              </FlexCol>
            </FlexRow>
            <Text fontSize="32px" weight="700" marginA="0 0 16px">
              Payment Details
            </Text>
            <FlexRow justify="space-between">
              <FlexCol align="flex-start" width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="0 0 16px"
                >
                  Name on Card
                </Text>
                <InputText value=" Mohammed Abed" />
              </FlexCol>
              <FlexCol align="flex-start" width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="0 0 16px"
                >
                  Card Number
                </Text>
                <InputText value="4716-4548-8244-1245" />
              </FlexCol>
            </FlexRow>
            <FlexRow justify="space-between">
              <FlexCol align="flex-start" width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="0 0 16px"
                >
                  Expiration Date
                </Text>
                <InputText value="62502" />
              </FlexCol>
              <FlexCol align="flex-start" width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="0 0 16px"
                >
                  CVC
                </Text>
                <InputText value="657" />
              </FlexCol>
            </FlexRow>
          </FlexCol>

          <FlexCol
            justify="flex-start"
            align="flex-start"
            width="536px"
            height="652px"
            margin="0 0 0 30px"
            bgcolor="#F2F2F2"
            borderRadius='16px'
          >
            <FlexRow justify='space-between' align='baseline'
            padding="35px 22px 22px 22px"
            >
              <Text fontSize="32px" weight="700" marginA="0 0 20px 0">Order Details</Text>
              <Text borderB=" 1px solid #707070" color="#70707095" fontSize="22px" weight="700">Change</Text>
            </FlexRow>
            <FlexRow margin='0 0 20px' height="130px">
              <Image src={phone} width="135px"/>
              <FlexCol padding="0 22px 35px 22px" >
                <Text align='flex-start'color="#70707095" fontSize="22px" weight="700" marginA="0 0 40px">iPhone 11 Pro 256GB Memory</Text>
                <FlexRow justify='space-between'>
                  <Text color="#70707095" fontSize="22px" weight="700">$499.99 <Span margin="0 0 0 10px">×1</Span></Text>
                  <Text color="#242424" fontSize="22px" weight="700">$89.99</Text>
                </FlexRow>
              </FlexCol>
            </FlexRow>
            <Hr />
            <FlexRow margin='0 0 20px' height="130px">
              <Image src={airpods} width="135px"/>
              <FlexCol padding="0 22px 35px 22px" >
                <Text align='flex-start'color="#70707095" fontSize="22px" weight="700" marginA="0 0 40px">Apple Airpods Wireless Bluetooth Headset</Text>
                <FlexRow justify='space-between'>
                  <Text color="#70707095" fontSize="22px" weight="700">$89.99 <Span margin="0 0 0 10px">×1</Span></Text>
                  <Text color="#242424" fontSize="22px" weight="700">$89.99</Text>
                </FlexRow>
              </FlexCol>
            </FlexRow>
            <Hr/>
            <FlexCol padding="10px 22px">
              <FlexRow justify='space-between' margin="0 0 16px">
                <Text width="30%" color="#70707095" fontSize="16px" weight="700">Subtotal</Text>
                <Text justify="flex-end" width="30%" color="#70707095" fontSize="16px" weight="700">$589.98</Text>
              </FlexRow>
              <FlexRow justify='space-between' margin="0 0 16px">
                <Text width="30%" color="#70707095" fontSize="16px" weight="700">Tax</Text>
                <Text justify="flex-end" width="30%" color="#70707095" fontSize="16px" weight="700">$2.53</Text>
              </FlexRow>
              <FlexRow justify='space-between' margin="0 0 16px">
                <Text width="30%" color="#70707095" fontSize="16px" weight="700">Shipping</Text>
                <Text justify="flex-end" width="30%" color="#70707095" fontSize="16px" weight="700">$0.00</Text>
              </FlexRow>
              <FlexRow justify='space-between' margin="0 0 16px">
                <Text width="30%" fontSize="16px" weight="700">Total</Text>
                <Text justify="flex-end" width="30%" fontSize="16px" weight="700">$592.51</Text>
              </FlexRow>
            </FlexCol>
          </FlexCol>
        </FlexRow>
        <FlexRow justify="flex-end" margin="30px 0 ">
          <Button text="Review order"></Button>
        </FlexRow>
      </FlexCol>
    </OrederContainer>
  );
}
