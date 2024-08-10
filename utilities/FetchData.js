import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const FetchData = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_RAPID_API_KEY,
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Optional: Rethrow the error for further handling
  }
};
