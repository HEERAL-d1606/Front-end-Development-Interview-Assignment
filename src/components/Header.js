import React from "react";
import { Button, Typography, Box } from "@mui/material";

/**
 * This code includes the LOGO - WEBINAR and the BUTTON- Add Webinar which lets you create a new WebinarCard
 */

const Header = ({ onAdd }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        pl: { xs: 1, sm: 5 }, // padding-left for screens < 375px is 1, else 5
        pr: { xs: 1, sm: 5 }, // padding-right for screens < 375px is 1, else 5
        pt: { xs: 2, sm: 2 }, // padding-top for all sizes is 2
        pb: { xs: 2, sm: 2 }, // padding-bottom for all sizes is 2
      }}
    >
      <Typography
        variant="h5"
        sx={{
          font: "Inter",
          fontWeight: 600,
          lineHeight: "28px",
          textAlign: "left",
          color: "#0E1013",
          backgroundColor: "transparent",
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
