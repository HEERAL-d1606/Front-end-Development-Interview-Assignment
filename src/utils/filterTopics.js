export const filterByTopics = (topics, webinars) => {
    if (topics === 'All') return webinars;
    return webinars.filter((webinar) => webinar.topics === topics);
  };
  