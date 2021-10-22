import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { useLocationWithQuery } from "react-router-query-hooks";
import {
  InnerSectionMargin,
  FlexRowJustifyStart,
  FlexRowCenter,
  Hr,
  HrDiv,
  SubTitle,
  SpinnerContainer,
} from "../../../App.style";
import { FlexBoxBackground, LoadMore, Result } from "./Products.Style";
import Card from "../../../Components/Cards/Card";
import { searchAction } from "../../../Redux/Guest/guestActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FailedSnackBar from '../../../Components/SnackBars/Failed'
const styles = {
  styleIcon: {
    fontSize: 35,
    color: "#FCDD06",
    fill: "#FCDD06",
    cursor: "pointer",
  },
  styleIconSave: {
    fontSize: 40,
    color: "#242424",
    fill: "#242424",
    opacity: 0.3,
  },
};


export function Search() {
  const {
    guestState: {
      searchResults: { isLoading, error, products, pages },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const locationQuery = useLocationWithQuery();
  const {
    query: { keyword },
  } = locationQuery;
  // const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(searchAction(keyword, page));
  }, [dispatch, keyword, page]);
  // const message = error;
  // const handleClick = () => {
  //   enqueueSnackbar(message, { 
  //       variant: 'error',
  //   });
// }

  return isLoading && page === 1 ? (
    <SpinnerContainer />
  ) : error ? (
    FailedSnackBar()
  ) : (
    <FlexBoxBackground>
      <InnerSectionMargin>
        <SubTitle>Search Results</SubTitle>
        <FlexRowCenter>
          <HrDiv></HrDiv>
        </FlexRowCenter>
        <Hr />
        <FlexRowJustifyStart style={{flexWrap:'wrap'}}>
        {products.length > 0 ? (
          products.map((item) => (
          <Card
            style={{marginBottom:'30px'}}
            key={item._id}
            id={item._id}
            rating={item.rating}
            srcImg={"https://proshop-ms.herokuapp.com/" + item.image}
            text={item.name}
            height={"655px"}
            value={true}
            cost={item.price}
            IconBtn={<BookmarkBorderIcon style={styles.styleIconSave} />}
          />
          ))
        ) : (
          <Result
            style={{ justifyContent: "start", marginTop: 60 }}
            fontSize="20"
            color="#242424"
            fontWeight="500"
          >
            No Results ...
          </Result>
        )}
        </FlexRowJustifyStart>
        {pages > 1 && page < pages && (
        <LoadMore
          isLoading={isLoading}
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load More
        </LoadMore>
      )}
      </InnerSectionMargin>
    </FlexBoxBackground>
  );
}
