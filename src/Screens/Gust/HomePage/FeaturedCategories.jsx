import {
  FlexBox,
  InnerSection,
  Image,
  FlexBox100px,
  FlexRowJustifyStart,
  Hr,
  HrDiv,
  SubTitle,
} from "../../../App.style";
import {
  SectionBox,
  DotSpanSection,
  FlexCol380x392,
  FlexCol380x392margin,
  FlexBox380x346,
  Text24,
  FlexBoxContainer
} from "./HomePage.Style";
import laptop from "../../../Assets/img2.PNG";
import camera from "../../../Assets/img3.PNG";
import device from "../../../Assets/img5.PNG";
import acce from "../../../Assets/img4.PNG";

export function FeaturedCategories() {
  return (
    <InnerSection margin={"60px 0"}>
      <FlexBox bgcolor={"#fff"}>
        <SectionBox>
          <SubTitle>Featured Categories</SubTitle>
          <FlexBox100px>
            <DotSpanSection isGray={false}></DotSpanSection>
            <DotSpanSection isGray={true}></DotSpanSection>
            <DotSpanSection isGray={true}></DotSpanSection>
            <DotSpanSection isGray={true}></DotSpanSection>
          </FlexBox100px>
        </SectionBox>
      </FlexBox>
      <FlexRowJustifyStart>
        <HrDiv></HrDiv>
      </FlexRowJustifyStart>
      <Hr marginBottom={"45px"} />
      <FlexBoxContainer>
        <FlexCol380x392>
          <FlexBox380x346>
            <Image src={laptop} />
          </FlexBox380x346>
          <Text24>LAPTOP</Text24>
        </FlexCol380x392>
        <FlexCol380x392margin>
          <FlexBox380x346>
            <Image src={camera} />
          </FlexBox380x346>
          <Text24>COMPUTER COMPONENTS</Text24>
        </FlexCol380x392margin>
        <FlexCol380x392margin>
          <FlexBox380x346>
            <Image src={device} />
          </FlexBox380x346>
          <Text24>DEVICES</Text24>
        </FlexCol380x392margin>
        <FlexCol380x392margin>
          <FlexBox380x346>
            <Image src={acce} />
          </FlexBox380x346>
          <Text24>ACCESSORIES</Text24>
        </FlexCol380x392margin>
      </FlexBoxContainer>
    </InnerSection>
  );
}
