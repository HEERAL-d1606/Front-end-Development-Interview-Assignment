export const editWebinar = (webinarId, webinars, updatedData) => {
    return webinars.map((webinar) =>
      webinar.id === webinarId ? { ...webinar, ...updatedData } : webinar
    );
  };
  