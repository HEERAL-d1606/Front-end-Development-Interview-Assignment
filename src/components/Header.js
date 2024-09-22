import React from "react";
import { Button, Typography, Box } from "@mui/material";

/**
 This code inclued the LOGO - WEBINAR and the BUTTON- Add Webinar
 */

const Header = ({ onAdd }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      pl={5}
      pr={5}
      pt={2}
      pb={2}
    >
      <Typography
        variant="h5"
        sx={{
          font: "Inter",
          fontWeight: 600,
          lineHeight: "28px",
          textAlign: "left",
          color: "#0E1013", // Text color
          backgroundColor: "transparent", // Keep background transparent
        }}
      >
        Webinar
      </Typography>
      <Button
        variant="contained"
        onClick={onAdd}
        sx={{
          width: "143.02px",
          height: "44px",
          padding: "12px 24px",
          gap: "10px",
          borderRadius: "10px",
          background: "#0E51F1",
          boxShadow: "0px 8px 20px -8px #0E51F1",
        }}
      >
        Add Webinar
      </Button>
    </Box>
  );
};

export default Header;
