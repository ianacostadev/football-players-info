const fetchOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_API_SECRET,
  },
};

const apiGet = async (endpoint, customOptions) => {
  try {
    const fetchData = await fetch(
      `${process.env.REACT_APP_API_BASE}${endpoint}`,
      {
        ...fetchOptions,
        ...customOptions,
      }
    );
    const data = await fetchData.json();

    return data;
  } catch (error) {
    return error;
  }
};

export default { apiGet };
