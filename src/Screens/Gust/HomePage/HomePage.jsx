import { HeroSection } from "./HeroSection";
import { TopRateProduct } from "../product/TopRateProduct";
import FeaturedProduct from "./FeaturedProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedProducts,
  getSliderImages,
} from "../../../Redux/Guest/guestActions";
import { FlexCol } from "../../../App.style";

export function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getSliderImages());
    dispatch(getFeaturedProducts());
  }, [dispatch]);
  return (
    <FlexCol>
      <HeroSection slider={state.guestState.sliderImages} />
      <FeaturedProduct products={state.guestState.products || []} />
      <TopRateProduct topRatedProducts={state.guestState.sliderImages} />
    </FlexCol>
  );
}

