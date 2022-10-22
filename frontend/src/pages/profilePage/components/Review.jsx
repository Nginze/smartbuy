import { Avatar, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const Review = ({ username, comment, imgUrl }) => {
  return (
    <Stack marginBottom={"1rem"}>
      <Stack direction={"row"}>
        <Avatar sx={{ marginRight: "0.4rem" }} src={imgUrl} />
        <Stack>
          <Typography>{username}</Typography>
          <Typography fontWeight={350}>{comment}</Typography>
          <Rating name="read-only" value={4} readOnly />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Review;
