import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create an async thunk to fetch movie details data
export const detailsData = createAsyncThunk(
  "details/detailsData",
  async (movieId: string) => {
    const options = {
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjhiM2U3YzYyZjQxNDBhMzhmM2M1OTMwYWM3YjhkMSIsIm5iZiI6MTcyNTYzNjg1MS4yNjUzMzEsInN1YiI6IjY2ZGFmMDYxNjVkMGRlZTM5ZGQ0ZTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AceW3JDivOmQ3uzb7JIvsg06CELePjbBzIpbn-NDrkQ",
      },
    };

    // Make the API request and return the movie data
    const response = await axios.request(options);
    console.log(response?.data);
    return response?.data; // Return response.data directly since it's a single movie
  }
);

// Initial state for the details slice
const initialState = {
  details: null as object | null, // For storing details of a single movie
  isLoading: false,
  error: null as string | null,
};

// Create a slice to manage details movie state
const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(detailsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(detailsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.details = action.payload; // Store the movie details
        console.log(action.payload);
      })
      .addCase(detailsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch movie details";
        console.log(action.error.message);
      });
  },
});

// Export the reducer to use in the store
export const detailsReducer = detailsSlice.reducer;
