import { Avatar, Chip, IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import React from "react";
import ButtonGroup from "./ButtonGroup";

const Profile = ({ user }) => {
  let name = user?.email?.split("@")[0];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      marginBottom={"1rem"}
    >
      <Stack direction={"row"} alignItems={"flex-start"} marginBottom={"1rem"}>
        <Avatar
          src={user?.imgUrl}
          sx={{ marginRight: "1rem", width: "7rem", height: "7rem" }}
        />
        <Stack alignItems={"flex-start"}>
          <Typography marginBottom={"0.7rem"} display={"flex"}>
            <Typography fontSize={"1.3rem"} marginRight={"1rem"}>
              {name}
            </Typography>
          </Typography>

          <Stack marginBottom={"0.7rem"} direction={"row"} fontSize={"1.8rem"}>
            <Chip sx={{ marginRight: "1rem" }} label="Tech" />
            <Chip sx={{ marginRight: "1rem" }} label="Electronics" />
            <Chip label="Clothing" />
          </Stack>
          <ButtonGroup />
        </Stack>
        <Stack direction={"row"}>
          <IconButton>
            <ReplyOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreHorizOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Typography fontWeight={300}>{user?.bio}</Typography>
    </Box>
  );
};

export default Profile;
