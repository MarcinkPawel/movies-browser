import { createSlice } from "@reduxjs/toolkit";

const configurationSlice = createSlice({
  name: "configuration",
  initialState: {
    configuration: [],
    status: "initial",
  },
  reducers: {
    loadConfiguration: (state) => {
      state.status = "loading";
    },
    loadConfigurationSuccess: (state, { payload: configuration }) => {
      state.configuration = configuration;
      state.status = "success";
    },
    loadConfigurationError: (state) => {
      state.status = "error";
    },
    fetchConfiguration: () => {},
  },
});

export const {
  loadConfiguration,
  loadConfigurationSuccess,
  loadConfigurationError,
  fetchConfiguration,
} = configurationSlice.actions;

const selectConfigurationState = (state) => state.configuration;

export const selectPosterSizes = (state) => {
    const configuration = selectConfigurationState(state);
    return configuration && configuration.configuration.poster_sizes;
  };
  
export const selectBackdropSizes = (state) => {
  const configuration = selectConfigurationState(state);
  return configuration && configuration.configuration.backdrop_sizes;
};
export const selectProfileSizes = (state) => {
  const configuration = selectConfigurationState(state);
  return configuration && configuration.configuration.profile_sizes;
};

export default configurationSlice.reducer;
