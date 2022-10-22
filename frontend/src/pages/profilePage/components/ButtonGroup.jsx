import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonGroup = () => {
  const navigate = useNavigate()
  return (
    <Stack direction={"row"}>
      <Button
        onClick = {() => navigate("https://web.whatsapp.com/")}
        sx={{ marginRight: "1rem", boxShadow: "none", borderRadius: "5rem" }}
        variant="contained"
        size="small"
      >
       Contact 
      </Button>

      {/* <Button
        sx={{
          marginRight: "1rem",
          boxShadow: "none",
          borderRadius: "5rem",
          backgroundColor: "#f7f6f9",
        }}
        variant="outlined"
        size="small"
      >
        Message
      </Button> */}
    </Stack>
  );
};

export default ButtonGroup;
