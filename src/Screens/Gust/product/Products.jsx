import { FlexRow } from "../../../App.style";
import { TextProduct22px, FlexRowIcon } from "./Products.Style";

export default function Products({
  PRODUCTID,
  PRODUCTNAME,
  PRODUCTPRICE,
  CATEGORY,
  ICONCREATE,
  ICONDELETE,
}) {
  return (
    <FlexRow align="flex-start" justify="space-between">
      <TextProduct22px>{PRODUCTID}</TextProduct22px>
      <TextProduct22px>{PRODUCTNAME}</TextProduct22px>
      <TextProduct22px>{PRODUCTPRICE}</TextProduct22px>
      <TextProduct22px>{CATEGORY}</TextProduct22px>
      <FlexRowIcon>
        {ICONCREATE}
        {ICONDELETE}
      </FlexRowIcon>
    </FlexRow>
  );
}
