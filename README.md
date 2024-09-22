# Webinar Management Application

This is a React-based application designed to manage webinars. It allows users to create, edit, delete, and search through a list of webinars, as well as filter webinars based on specific topics.

## Features

- Create a webinar using a popup form with validation.
- Add a webinar to a list after submission.
- Edit an existing webinar, with auto-filled data in the form.
- Delete a webinar from the list.
- Filter webinars based on topics.
- Search webinars by multiple fields (e.g., title, description, etc.).
- Fully responsive UI designed as per the provided Figma design.

## Key Functionalities

### 1. **Create Webinar Form (with validation)**

- A form is displayed in a popup modal for creating a new webinar.
- The form includes fields for the webinar name, description, date, time, and topics.
- The form includes validation to ensure all required fields are filled.

### 2. **Create Webinar Button**

- After filling out the form, clicking the "Create Webinar" button will add the new webinar to the list of webinars displayed on the homepage.

### 3. **Cancel Button**

- Clicking the "Cancel" button on the form will reset all fields and close the popup without creating or editing a webinar.

### 4. **Edit Webinar**

- Each webinar in the list includes an "Edit" button that opens the form in the popup with the existing values pre-filled.
- Users can update the webinar details and save changes.

### 5. **Cancel Edit**

- While editing, the "Cancel" button will reset the form values to their original state and close the popup without saving any changes.

### 6. **Delete Webinar**

- Each webinar in the list includes a "Delete" button.
- Clicking this button will remove the webinar from the list.
- An alert message is displayed for the confirmation of deletion.

### 7. **Extract Topics**

- Webinar topics are selected from a predefined list of topics available in the system.

### 8. **Filter by Topic**

- A dropdown menu allows users to filter webinars based on their topic.
- Also if there are no cards present for a specific topic, an alert message is displaye for that too.

### 9. **Search Functionality**

- The search bar allows users to search through webinars based on multiple fields (e.g., title, description, etc.).
- The search is a multi-match query, meaning it looks for matches in all relevant fields.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **dayjs**: Library for manipulating dates and times.
- **CSS/SCSS**: Used for styling the application.
- **Vercel**: Used for deployment of the application.
  
## Figma Design Reference

- The app UI is designed based on a Figma reference, Ensuring all UI components, spacing, and styles match the provided design.

## Deployment Link

-https://front-end-development-interview-assignment-heeraldataulia.vercel.app/


