import React from "react";
import { Grid } from "@mui/material";
import WebinarCard from "./WebinarCard";

/**
 The `WebinarList` component renders a grid of `WebinarCard` components, displaying each webinar's details
  in a responsive layout. It accepts props for managing edits and deletions, facilitating user interaction with 
  the webinar listings.
 */

const WebinarList = ({ webinars, onEdit, onDelete }) => {
  return (
    <Grid container spacing={4} pl={5} pr={5} pt={0} pb={2}>
      {webinars.map((webinar) => (
        <Grid item xs={12} md={6} lg={4} key={webinar.id}>
          <WebinarCard webinar={webinar} onEdit={onEdit} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WebinarList;
