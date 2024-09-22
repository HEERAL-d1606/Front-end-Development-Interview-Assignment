import React, { useState } from "react";
import Header from "./Header";
import SearchAndFilter from "./SearchAndFilter";
import WebinarList from "./WebinarList";
import WebinarForm from "./WebinarForm";
import { mockWebinars, topicsList } from "../data/mockData";
import dayjs from "dayjs";

const App = () => {
  const [webinars, setWebinars] = useState(mockWebinars);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopics, setSelectedTopics] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [editWebinar, setEditWebinar] = useState(null);

  // Add a new webinar
  const addWebinar = (webinar) => {
    setWebinars([webinar, ...webinars]);
  };

  // Update an existing webinar
  const updateWebinar = (updatedWebinar) => {
    setWebinars(
      webinars.map((w) => (w.id === updatedWebinar.id ? updatedWebinar : w))
    );
  };
  function convertTo12HourFormat(timeStr) {
    const [hour, minute] = timeStr.split(":").map(Number);
    const formattedTime = `${hour % 12 || 12}:${minute
      .toString()
      .padStart(2, "0")} ${hour < 12 ? "AM" : "PM"}`;
    return formattedTime;
  }

  // Delete a webinar
  const deleteWebinar = (id) => {
    // Show confirmation alert
    const confirmed = window.confirm(
      "Are you sure you want to delete this webinar?"
    );
    if (confirmed) {
      setWebinars(webinars.filter((w) => w.id !== id));
    }
  };

  // Handle opening and closing the popup for creating/editing webinars
  const handlePopupOpen = () => setOpenPopup(true);
  const handlePopupClose = () => {
    setOpenPopup(false);
    setEditWebinar(null); // Clear the form on close
  };

  // Handle search
  const handleSearch = (query) => setSearchQuery(query);

  // Handle topic filtering
  const handleFilter = (topics) => {
    setSelectedTopics(topics);

    // Check if there are webinars that match the selected topic
    const hasMatchingWebinars = webinars.some(
      (webinar) => webinar.topics === topics
    );

    if (topics && !hasMatchingWebinars) {
      alert("No results found for the selected topic.");
    }
  };
  console.log(webinars);

  // Filter webinars based on search and topic
  const filteredWebinars = webinars.filter(
    (webinar) =>
      (webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        webinar.instructorName.toLowerCase().includes(searchQuery.toLowerCase())||
        webinar.instructorRole.toLowerCase().includes(searchQuery.toLowerCase())||
        webinar.instructorCompany.toLowerCase().includes(searchQuery.toLowerCase())||
        webinar.topics.toLowerCase().includes(searchQuery.toLowerCase())||
        dayjs(webinar.startDate).format("dddd MMMM DD").toLowerCase().includes(searchQuery.toLowerCase())||
        convertTo12HourFormat(webinar.startTime).toLowerCase().includes(searchQuery.toLowerCase()) || // Search by formatted start time
        convertTo12HourFormat(webinar.endTime).toLowerCase().includes(searchQuery.toLowerCase()) // Search by formatted end time
      ) &&
      (selectedTopics ? webinar.topics === selectedTopics : true)
  );

  return (
    <div>
      <Header onAdd={handlePopupOpen} />
      <SearchAndFilter
        onSearch={handleSearch}
        onFilter={handleFilter}
        topics={topicsList}
      />
      <WebinarList
        webinars={filteredWebinars}
        onEdit={(webinar) => {
          setEditWebinar(webinar);
          handlePopupOpen();
        }}
        onDelete={deleteWebinar}
      />
      <WebinarForm
        open={openPopup}
        onClose={handlePopupClose}
        onSubmit={editWebinar ? updateWebinar : addWebinar}
        initialValues={editWebinar}
      />
    </div>
  );
};

export default App;
