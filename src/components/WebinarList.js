import React from "react";
import { Grid } from "@mui/material";
import WebinarCard from "./WebinarCard";

/**
 * The `WebinarList` component renders a grid of `WebinarCard` components, 
 * displaying each webinar's details in a responsive layout. It accepts 
 * props for managing edits and deletions, facilitating user interaction with 
 * the webinar listings.
 */

const WebinarList = ({ webinars, onEdit, onDelete }) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        pl: { xs: 1, sm: 5 },  // Padding left: 1 for xs, 5 for sm and up
        pr: { xs: 1, sm: 5 },  // Padding right: 1 for xs, 5 for sm and up
        pt: { xs: 2, sm: 0 },  // Padding top: 2 for xs, 0 for sm and up
        pb: { xs: 2, sm: 2 },  // Padding bottom: 2 for all sizes
      }}
    >
      {webinars.map((webinar) => (
        <Grid item xs={12} md={6} lg={4} key={webinar.id}>
          <WebinarCard webinar={webinar} onEdit={onEdit} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WebinarList;
