import { FlexRow } from "../../App.style";
import { Text16px } from "./Specification.Style";

export default function SpecificationComponent({ text, value }) {
  return (
    <FlexRow align="flex-start" justify="space-between">
      <Text16px>{text}</Text16px>
      <Text16px>{value}</Text16px>
    </FlexRow>
  );
}
