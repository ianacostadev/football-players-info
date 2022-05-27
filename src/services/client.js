const fetchOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_API_SECRET,
  },
};

const apiGet = (endpoint, customOptions) => {
  fetch(`${process.env.REACT_APP_API_BASE}${endpoint}`, {
    ...fetchOptions,
    ...customOptions,
  })
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => err);
};

export default { apiGet };
