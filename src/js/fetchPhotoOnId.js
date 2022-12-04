import axios from 'axios';

export default async function fetchPhotoOnId(id) {
  const URL = 'https://pixabay.com/api/';
  const key = '31260524-b97567eeef5bd60bea7834f85';
  const option =
    'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

  const result = await axios.get(`${URL}?key=${key}&id=${id}&${option}`);

  return result;
}
