import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";
import { updateRatedHandicrafts } from "@/reduxFolder/actions/userActions";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
function calculateAverageRating(ratings) {
  let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
    sum += ratings[i].rate;
  }
  return sum / ratings.length;
}
function selectRatingValue(handicraft, connectedUser) {
  if (connectedUser && connectedUser.role === "customer") {
    return connectedUser.ratedHandicrafts.find(
      (rating) => rating.handicraftId === handicraft._id
    )?.rate;
  } else {
    return calculateAverageRating(handicraft.rates);
  }
}
export default function HoverRating({ handicraft }) {
  const connectedUser = useSelector((state) => state.user) || {};

  const [value, setValue] = React.useState(selectRatingValue(handicraft,connectedUser));
  const [hover, setHover] = React.useState(-1);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setValue(selectRatingValue(handicraft, connectedUser));
  }, [connectedUser.ratedHandicrafts]);

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    let url = `/api/customers/rate-handicraft/${handicraft._id}`;
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: newValue }),
    });
    if (response.ok) {
      let res = await response.json();
      console.log(res.data);
      dispatch(updateRatedHandicrafts(res.data));
      setValue(res.data.rate)
    } else {
      console.log("error");
    }
  };

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        readOnly={connectedUser?.role !== "customer" ? true : false}
        name="hover-feedback"
        value={value}
        // precision={connectedUser?.role !== "customer" ? 0.5 : 1}
        getLabelText={getLabelText}
        onChange={handleChange}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
