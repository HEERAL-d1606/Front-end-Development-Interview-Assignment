import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import dayjs from "dayjs";

/**
 The WebinarCard component displays detailed information about a webinar, 
 including the instructor's name, role, and company, along with the webinar's title, topics, and scheduled times.
  It also provides buttons for editing and deleting the webinar, enhancing user interactivity and management .
 */

// This is an array of colors to be used for the cards
const cardColors = [
  "#741DE3",
  "#E72174",
  "#08A79E",
  "#0E51F1",
  "#FFB023",
  "#088761",
];

function convertTo12HourFormat(timeStr) {
  const [hour, minute] = timeStr.split(":").map(Number);
  const formattedTime = `${hour % 12 || 12}:${minute
    .toString()
    .padStart(2, "0")} ${hour < 12 ? "AM" : "PM"}`;
  return formattedTime;
}

const WebinarCard = ({ webinar, onEdit, onDelete }) => {
  // Pick a background color for the card, either from the dataset or randomly from the cardColors array
  const backgroundColor =
    webinar.backgroundColor || cardColors[webinar.id % cardColors.length];

  return (
    <Card
      sx={{
        borderRadius: "24px",
        backgroundColor: "#ffffff",
        padding: "4px",

        outline: "#E3E7EC",
      }}
    >
      <CardContent>
        {/* Instructor's Info */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          sx={{
            borderRadius: "16px",
            backgroundColor: backgroundColor,
            padding: "22px",
            margin: "0px",

            height: "125",
            width: "340",
          }}
        >
          {/* Left Side: Name, Role, Company */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: "400",
                fontSize: "14px",
                cursor: "pointer",
              }}
              title={webinar.instructorName}
            >
              {webinar.instructorName && webinar.instructorName.length > 25
                ? webinar.instructorName.substring(0, 20) + "..."
                : webinar.instructorName}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: "400",
                fontSize: "14px",
                cursor: "pointer",
              }}
              title={webinar.instructorRole}
            >
              {webinar.instructorRole && webinar.instructorRole.length > 25
                ? webinar.instructorRole.substring(0, 20) + "..."
                : webinar.instructorRole}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: "400",
                fontSize: "14px",
                cursor: "pointer",
              }}
              title={webinar.instructorCompany}
            >
              {webinar.instructorCompany &&
              webinar.instructorCompany.length > 25
                ? webinar.instructorCompany.substring(0, 20) + "..."
                : webinar.instructorCompany}
            </Typography>
          </Box>

          {/* Right Side: Instructor's Image */}
          <Avatar
            alt={webinar.instructorName}
            src={webinar.instructorImageURL}
            sx={{ width: 76, height: 76, borderRadius: 0 }}
          />
        </Box>
        {/* Webinar Details */}
        <Box
          sx={{
            marginTop: "24px",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: backgroundColor, fontWeight: "600", fontSize: "14px" }}
          >
            {webinar.topics}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#0E1013",
              fontWeight: "600",
              fontSize: "18px",
              mt: 1,
            }}
          >
            {webinar.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#2E333B",
              fontWeight: "400",
              mt: 1,
              fontSize: "14px",
            }}
          >
            {dayjs(webinar.startDate).format("dddd MMMM DD")} ,{" "}
            {convertTo12HourFormat(webinar.startTime)}-
            {convertTo12HourFormat(webinar.endTime)}
          </Typography>

          {/* Edit and Delete buttons */}
          <Box display="flex" mt={2}>
            <Button
              onClick={() => onDelete(webinar.id)}
              sx={{
                width: "90px",
                height: "36px",
                gap: "0px",
                fontWeight: "600",

                borderRadius: "24px",
                backgroundColor: "#F9E8E8",
                color: "#D14040",
              }}
            >
              Delete
            </Button>
            <Button
              onClick={() => onEdit(webinar)}
              sx={{
                borderRadius: "20px",
                backgroundColor: "#FFFFFF",
                color: "#0E51F1",
                height: "36px",
                fontWeight: "600",
                fontSize: "12.86px",
              }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WebinarCard;
