import { Stack } from "@mui/system";
import React, { useContext } from "react";
import Profile from "./components/Profile";
import TabMenu from "./components/TabMenu";
import Navbar from "../../components/core/Navbar"

const Index = () => {
  const user = {
    email: "Jack@gmail.com",
    imgUrl: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
  }
  return (
    <>
      <Navbar />
      <Stack
        marginTop={"6rem"}
        justifyContent={"center"}
        width={"100vw"}
        direction={"row"}
      >
        <Stack width={"65%"} direction={"row"}>
          <Stack marginRight={"4rem"} flex={1.8}>
            <Profile user={user} />
            <TabMenu posts={user?.posts} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Index;
