import axios from 'axios';

const config = {};

const depaginate = (url, accumulation) => {

  const depaginationParams = {
    access_token: config.accessToken,
    limit: 100
  };

  return axios.get(url, { params: depaginationParams }).then((response) => {
    const pageData = response.data.data;
    const pages = pageData.map((page) => { return page.id });
    const newAccumulation = [...accumulation, ...pages];
    const nextURL = response.data.paging.next;

    if(nextURL){
      return depaginate(nextURL, newAccumulation);
    } else {
      return newAccumulation;
    }
  })
  .catch((error) => {
    console.log(error);
  });
}

const getEvents = () => {
  const url = `https://graph.facebook.com/v2.11/${config.userId}/likes`;
  const events = [];
  return depaginate(url, []).then((pages) => {

    const getRequests = pages.map((page) => {
      const eventParams = {
        access_token: config.accessToken,
        time_filter: 'upcoming',
      };
      const eventsForPage = `https://graph.facebook.com/v2.11/${page}/events`
      return axios.get(eventsForPage, { params: eventParams });
    })

    return axios.all(getRequests).then((responses) => {
      const filteredMapped = responses.filter((response) => {
        return response.data.data.length > 0;
      }).map((response) => {
        return response.data.data;
      });
      return Array.prototype.concat(...filteredMapped).sort(function(a, b){
        return new Date(a.start_time) - new Date(b.start_time);
      });
    }).catch((error) => { console.log(error); });
  });
};

export default {
  getEvents,
  config,
};

