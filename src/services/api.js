import axios from "axios";

// BaseURL 'https://newsapi.org/v2/' +
//         'top-headlines?country=pts&apiKey=b50bea4d22e043f7a84c7c1b0af10408';

const api = axios.create({
  baseURL: "https://newsapi.org/v2/",
});

export default api;
