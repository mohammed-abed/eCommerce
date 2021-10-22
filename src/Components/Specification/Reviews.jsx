import moment from "moment";
import { FlexColStartBetween } from "../../App.style";
import {
  FlexRowWidth,
  TextReviewDate,
  TextReviewDescription,
  FlexRowMargin,
  TextReviewTitle,
} from "./Specification.Style.js";
import Rating from "@material-ui/lab/Rating";

export default function Reviews({ title, text, rate, date }) {
  return (
    <FlexColStartBetween>
      <TextReviewTitle>{title}</TextReviewTitle>
      <FlexRowMargin>
        <FlexRowWidth>
          <Rating readOnly name="simple-controlled" value={rate} />
        </FlexRowWidth>
        <TextReviewDate>
        {moment(date, "YYYY-MM-DDTHH: mm: ss").format("Do MMMM  YYYY")}
        </TextReviewDate>
      </FlexRowMargin>
      <TextReviewDescription>{text}</TextReviewDescription>
    </FlexColStartBetween>
  );
}
