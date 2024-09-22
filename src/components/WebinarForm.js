import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { BootstrapInput } from "../style/CustomizedInputsStyled";

/*
The WebinarForm component is a React dialog for adding or editing webinar details.
 It manages state for form data, validation errors, and image uploads, featuring structured sections for
 instructor and webinar information, validation for required fields, and submission logic to integrate 
 with an external handler for webinars. */

const WebinarForm = ({ open, onClose, onSubmit, initialValues }) => {
  const [formData, setFormData] = useState({
    id: null,
    instructorName: "",
    instructorRole: "",
    instructorCompany: "",
    topics: "",
    instructorImageURL: "",
    title: "",
    startDate: "",
    startTime: "",
    endTime: "",
  });

  const [errors, setErrors] = useState({}); // State for validation errors
  const [uploadedImage, setUploadedImage] = useState(null);
  const today = new Date().toISOString().split("T")[0];

  const handleIconChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the input
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a preview URL for the image

      // Update the uploaded image state
      setUploadedImage({
        file, // Store the file
        url: imageUrl, // Store the image preview URL
      });

      // Update the formData with the new image URL
      setFormData((prevFormData) => ({
        ...prevFormData, // Spread the previous formData to keep other values
        instructorImageURL: imageUrl, // Set the instructorImageURL field
      }));
    }
  };

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    } else {
      setFormData({
        id: null,
        instructorName: "",
        instructorRole: "",
        instructorCompany: "",
        topics: "",
        instructorImageURL: "",
        title: "",
        startDate: "",
        startTime: "",
        endTime: "",
      });
    }
  }, [initialValues]);

  const initialFormState = {
    id: null,
    instructorName: "",
    instructorRole: "",
    instructorCompany: "",
    topics: "",
    instructorImageURL: "",
    title: "",
    startDate: "",
    startTime: "",
    endTime: "",
  };

  const handleCancel = () => {
    setFormData(initialFormState); // Reset form fields
    setUploadedImage(null); // Reset uploaded image
    onClose(); // Close the dialog
    setErrors({}); // Reset errors
  };
  
  useEffect(() => {
    if (initialValues && open) {
      setFormData(initialValues);  // Set form with initial values if passed
      setErrors({});
    } else if (!open) {
      setFormData(initialFormState);  // Reset form when the dialog closes
      setUploadedImage(null); // Reset uploaded image when closed
      setErrors({}); // Reset errors when closed
    }
  }, [initialValues, open]);
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "startDate") {
      const selectedDate = new Date(value);
      const today = new Date();

      // Reset time to midnight for comparison
      today.setHours(0, 0, 0, 0);

      // Check if the selected date is in the past
      if (selectedDate < today) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          startDate: "Please select a valid date.",
        }));
      } else {
        // Clear the error if the date is valid
        setErrors((prevErrors) => ({
          ...prevErrors,
          startDate: "",
        }));
      }
    }

    // Update formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.instructorName) newErrors.instructorName = "Required.";
    if (!formData.instructorRole) newErrors.instructorRole = "Required.";
    if (!formData.instructorCompany) newErrors.instructorCompany = "Required.";
    if (!formData.topics) newErrors.topics = "Required.";
    if (!formData.title) newErrors.title = "Required.";
    if (!formData.startDate) newErrors.startDate = "Required.";
    if (formData.startDate < today)
      newErrors.startDate = "Please select a valid date.";
    if (!formData.startTime) newErrors.startTime = "Required.";
    if (!formData.endTime) newErrors.endTime = "Required.";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors
    } else {
      // Prepare the form data
      const newWebinar = {
        ...formData,
        id: formData.id, // Ensure unique ID
        instructorImageURL: formData.instructorImageURL, // Include the image
      };

      // Call the onSubmit prop to handle adding the webinar
      onSubmit(newWebinar);
      onClose(); // Close the form dialog
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        style: {
          width: "910px", // Fixed width
          height: "839px", // Fixed height
          borderRadius: "16px", // Custom border-radius
          border: "1px solid transparent", // Custom border styling
          boxShadow: "0px 20px 46px -24px #0E10131F", // Box-shadow
          background: "#FFFFFF", // Background color
        },
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h6"
            style={{ fontWeight: 600, fontSize: "18px", color: "#0E1013" }}
          >
            {formData.id ? "Edit Webinar" : "Create Webinar"}
          </Typography>
          <IconButton
            style={{ color: "#444952" }}
            onClick={onClose}
            onClose={handleCancel}
            edge="end"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <hr
          style={{
            border: "1px solid #E3E7EC",
            margin: "8px 0",
            width: "100%",
          }}
        />
      </DialogTitle>
      <DialogContent>
        {/* Instructor Details Section */}
        <Box display="flex" alignItems="center">
          <PeopleAltOutlinedIcon
            style={{
              marginRight: "8px",
              height: "24px",
              width: "24px",
              color: "#444952",
            }}
          />
          <Typography
            variant="h6"
            style={{ fontWeight: 600, fontSize: "18px", color: "#2E333B" }}
          >
            Instructor Details
          </Typography>
        </Box>

        <Grid container spacing={2} p={4}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "#2E333B",
                    marginBottom: "8px",
                  }}
                >
                  Instructor Name<span style={{ color: "red" }}>*</span>
                </Typography>
                <BootstrapInput
                  name="instructorName"
                  label="Type the Instructor Name"
                  sx={{ height: "40px" }} // Reduced height
                  fullWidth
                  margin="normal"
                  value={formData.instructorName}
                  onChange={handleChange}
                />
                {errors.instructorName && (
                  <Typography color="red" style={{ fontSize: "12px" }}>
                    {errors.instructorName}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "#2E333B",
                    marginBottom: "8px",
                  }}
                >
                  Instructor Role<span style={{ color: "red" }}>*</span>
                </Typography>
                <BootstrapInput
                  name="instructorRole"
                  label="Type the Instructor Role"
                  sx={{ height: "40px" }} // Reduced height
                  fullWidth
                  // maxWidth= "150px"
                  value={formData.instructorRole}
                  onChange={handleChange}
                />
                {errors.instructorRole && (
                  <Typography color="red" style={{ fontSize: "12px" }}>
                    {errors.instructorRole}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#2E333B",
                marginBottom: "8px",
              }}
            >
              Instructor Image
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "120px", // Adjust the size as needed
                height: "120px",
                borderRadius: "8px",
                backgroundColor: "#F2F4F8", // Light gray background
                border: "2px dashed #D9DBDC", // Dashed border
                cursor: "pointer",
                position: "relative", // So we can position the input
                marginBottom: "4px",
                marginTop: "8px",
              }}
              
            >
              {uploadedImage ? (
                <>
                  {/* Show uploaded image */}
                  <img
                    src={uploadedImage.url}
                    alt="Instructor"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <Typography
                    variant="body2"
                    style={{
                      color: "#2E333B",
                      position: "absolute",
                      bottom: "-24px",
                      fontSize: "12px",
                    }}
                  >
                    {uploadedImage.file.name || "Uploaded"}
                  </Typography>
                </>
              ) : (
                <Typography
                  variant="h4"
                  style={{
                    color: "#444952",
                    fontSize: "36px",
                    fontWeight: "bold",
                  }}
                >
                  +
                </Typography>
              )}

              {/* Hidden file input */}
              <input
                type="file"
                id="fileInput"
                name="instructorImageURL"
                accept="image/*"
                onChange={handleIconChange}
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#2E333B",
                marginBottom: "8px",
              }}
            >
              Instructor Company<span style={{ color: "red" }}>*</span>
            </Typography>
            <BootstrapInput
              name="instructorCompany"
              label="Type the Instructor Company"
              sx={{ height: "40px" }} // Reduced height
              fullWidth
              margin="normal"
              value={formData.instructorCompany}
              onChange={handleChange}
            />
            {errors.instructorCompany && (
              <Typography color="red" style={{ fontSize: "12px" }}>
                {errors.instructorCompany.length > 25
                  ? `${errors.instructorCompany.slice(0, 25)}...`
                  : errors.instructorCompany}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#2E333B",
                marginBottom: "8px",
              }}
            >
              Topics<span style={{ color: "red" }}>*</span>
            </Typography>
            <BootstrapInput
              name="topics"
              label="Type the Topics"
              sx={{ height: "40px" }} // Reduced height
              fullWidth
              margin="normal"
              value={formData.topics}
              onChange={handleChange}
            />
            {errors.topics && (
              <Typography color="red" style={{ fontSize: "12px" }}>
                {errors.topics}
              </Typography>
            )}
          </Grid>
        </Grid>

        {/* Webinar Details Section */}
        <Box display="flex" alignItems="center" style={{ marginTop: "20px" }}>
          <VideocamOutlinedIcon
            style={{
              marginRight: "8px",
              height: "24px",
              width: "24px",
              color: "#444952",
            }}
          />
          <Typography
            variant="h6"
            style={{ fontWeight: 600, fontSize: "18px", color: "#2E333B" }}
          >
            Webinar Details
          </Typography>
        </Box>

        {/* Wrap Webinar Details in Grid */}
        <Grid container spacing={2} p={4}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#2E333B",
                marginBottom: "8px",
              }}
            >
              Webinar Title<span style={{ color: "red" }}>*</span>
            </Typography>
            <BootstrapInput
              name="title"
              label="Type the Webinar Title"
              fullWidth
              margin="normal"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && (
              <Typography color="red" style={{ fontSize: "12px" }}>
                {errors.title}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#2E333B",
                marginBottom: "8px",
              }}
            >
              Start Date<span style={{ color: "red" }}>*</span>
            </Typography>
            <BootstrapInput
              name="startDate"
              label="Type Start Date"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.startDate}
              onChange={handleChange}
            />
            {errors.startDate && (
              <Typography color="red" style={{ fontSize: "12px" }}>
                {errors.startDate}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#2E333B",
                marginBottom: "8px",
              }}
            >
              Start Time<span style={{ color: "red" }}>*</span>
            </Typography>
            <BootstrapInput
              name="startTime"
              label="Type Start Time"
              type="time"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.startTime}
              onChange={handleChange}
            />
            {errors.startTime && (
              <Typography color="red" style={{ fontSize: "12px" }}>
                {errors.startTime}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#2E333B",
                marginBottom: "8px",
              }}
            >
              End Time<span style={{ color: "red" }}>*</span>
            </Typography>
            <BootstrapInput
              name="endTime"
              label="Type End Time"
              type="time"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.endTime}
              onChange={handleChange}
            />
            {errors.endTime && (
              <Typography color="red" style={{ fontSize: "12px" }}>
                {errors.endTime}
              </Typography>
            )}
          </Grid>
        </Grid>
      </DialogContent>
      <hr style={{ border: "1px solid #E3E7EC", margin: "4px" }} />
      <DialogActions
        sx={{ justifyContent: "flex-start", padding: "16px 24px" }}
      >
        {/* Save/Create Button */}
        <Button
          onClick={handleSubmit}
          sx={{
            width: "167px",
            height: "44px",
            borderRadius: "10px",
            backgroundColor: "#0E51F1",
            color: "#FFFFFF",
            textTransform: "none",
            opacity: 1,
            "&:hover": {
              backgroundColor: "#0D47A1",
            },
          }}
        >
          {formData.id ? "Save" : "Create webinar"}
        </Button>
        {/* Cancel Button */}
        <Button
          onClick={onClose}
          onClose={handleCancel}
          sx={{
            color: "#0E51F1",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WebinarForm;
