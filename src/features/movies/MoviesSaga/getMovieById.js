import { key, movieByIDAPI } from "../../getData";


export const getMovieByID = async (id) => {
  try {
    const response = await fetch(`${movieByIDAPI}${id}?api_key=${key}&language=en-US`);
    if (!response.ok) {
      throw new Error("An error occurred while searching movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCrewByID = async (id) => {
  try {
    const response = await fetch(`${movieByIDAPI}${id}/credits?api_key=${key}&language=en-US`);
    if (!response.ok) {
      throw new Error("An error occurred while searching movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};