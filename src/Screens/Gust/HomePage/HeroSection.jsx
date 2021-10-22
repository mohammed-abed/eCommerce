import { InnerSection, Text, Image, FlexRow } from "../../../App.style";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import { HeroBox, HeroTitle, SideBox, DotSpan, Arrow } from "./HomePage.Style";
import Button from "../../../Components/Button/Button";
const styles = {
  root: {
    position: "relative",
    width: "100%",
  },
};

export function HeroSection({ slider }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleChangeIndex = () => {};
  return (
    <FlexRow bgcolor={"#F2F2F2"} >
      <InnerSection >
        <SwipeableViews
          style={Object.assign({}, styles.root, styles.root)}
          index={sliderIndex}
          onChangeIndex={handleChangeIndex}
        >
          {slider.map((item) => {
            return (
              <HeroBox>
                <SideBox>
                  <Text fontSize={"32px"} color={"#242424"}>
                    Save up to ${item.price}
                  </Text>
                  <HeroTitle>{item.name}</HeroTitle>
                  <Text fontSize={"32px"} color={"#242424"}>
                    {item.description}
                  </Text>
                  <Button
                    text="Shop now"
                    width={"220px"}
                    borderRadius={16}
                    style={{
                      marginTop: 42,
                      height: 52,
                      textTransform: "uppercase",
                    }}
                    link={`/product/${item._id}`}
                  />
                </SideBox>
                <SideBox>
                  <Image src={"https://proshop-ms.herokuapp.com/" + item.image} />
                </SideBox>
              </HeroBox>
            );
          })}
        </SwipeableViews>
        <FlexRow>
          <Arrow
            isLeft={true}
            onClick={() => {
              if (sliderIndex === 0) setSliderIndex(slider.lengt - 1);
              else setSliderIndex(sliderIndex - 1);
            }}
          >
            {" "}
            &#10095;
          </Arrow>
          {slider.map((item, index) => (
            <DotSpan
              margin={true}
              isGray={sliderIndex !== index}
              width={true}
              height={true}
              onClick={() => {
                setSliderIndex(index);
              }}
            />
          ))}
          <Arrow
            onClick={() => {
              if (sliderIndex === slider.length - 1) setSliderIndex(0);
              else setSliderIndex(sliderIndex + 1);
            }}
          >
            &#10095;
          </Arrow>
        </FlexRow>
      </InnerSection>
    </FlexRow>
  );
}
