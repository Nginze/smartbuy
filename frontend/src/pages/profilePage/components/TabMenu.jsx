import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductFeed from "./ProductFeed";
import ReviewFeed from "./ReviewFeed";
const TabMenu = ({ posts, replies, saved }) => {
  const [value, setValue] = useState("Products");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        /* A CSS property that is used to display the elements in a column. */
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "1.4rem" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Products" value={"Products"} />
          <Tab label="Reviews" value={"Reviews"} />
        </Tabs>
      </Box>

      <Box width={"100%"} alignSelf={"center"} className="p-tray-content">
        {/* <Feed isLoading={false} posts={posts} /> */}
        {value == "Products" && <ProductFeed />}
        {value == "Reviews" && <ReviewFeed />}
        {0 == 1 && (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              style={{ width: "100px", height: "100px", marginBottom: "4px" }}
              src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
            />
            <span style={{ fontSize: "15px", color: "#636466" }}>
              Nothing up for sale.
            </span>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default TabMenu;
