import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51453767-d8931522dcfdee5b391d73c50';

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });

  return response.data;
}
