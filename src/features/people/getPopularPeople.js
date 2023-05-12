import { key, popularPeopleAPI,  } from "../getData";

export const getPopularPeople = async (page) => {
  try {
    const response = await fetch(`${popularPeopleAPI}?api_key=${key}&language=en-US&page=${page}`);
    if (!response.ok) {
      throw new Error("An error occurred while searching movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};