export const deleteWebinar = (webinarId, webinars) => {
    return webinars.filter((webinar) => webinar.id !== webinarId);
  };
  