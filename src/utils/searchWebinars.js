export const filteredWebinars = webinars.filter(
  (webinar) =>
    (webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.instructorRole
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      webinar.instructorCompany
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      webinar.topics.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.startDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.endTime.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.startTime.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedTopics ? webinar.topics === selectedTopics : true)
);
