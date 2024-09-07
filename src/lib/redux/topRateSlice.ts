//
//
//
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create an async thunk to fetch movies
export const topRateMovies = createAsyncThunk(
  "movies/topRateMovies",
  async () => {
    const options = {
      url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjhiM2U3YzYyZjQxNDBhMzhmM2M1OTMwYWM3YjhkMSIsIm5iZiI6MTcyNTYzNjg1MS4yNjUzMzEsInN1YiI6IjY2ZGFmMDYxNjVkMGRlZTM5ZGQ0ZTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AceW3JDivOmQ3uzb7JIvsg06CELePjbBzIpbn-NDrkQ",
      },
    };
    // Perform the API request
    const response = await axios.request(options);
    console.log(response.data.results);
    // Return only the movie results
    return response.data.results;
  }
);

// Define the initial state
const initialState = {
  topMovies: [] as object[],
  isLoading: false,
  error: null as string | null,
};

// Create a slice to manage movies state
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(topRateMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(topRateMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload; // Store fetched movies
        console.log(action.payload);
      })
      .addCase(topRateMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch movies";
        console.log(action.error.message);
      });
  },
});

// Export the reducer to use in the store
export const topRateMoviesReducer = moviesSlice.reducer;
