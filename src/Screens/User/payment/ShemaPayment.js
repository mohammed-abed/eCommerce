import * as yup from "yup";

export const ShippingSchema = () => {
  return yup.object({
    country: yup.string().required("Enter country name ..!"),
    city: yup.string().required("Enter city name ..!"),
    address: yup.string().required("Enter your address ..!"),
    postalCode: yup.number().required("Enter your zip code ..!"),
  });
};
