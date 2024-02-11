import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get all users by admin
export const allReviewsByAdmin = createAsyncThunk(
  "users/allReviewsByAdmin",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/products/find-reviews-of-product/${id}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Delete product review by admin
export const deleteReviewByAdmin = createAsyncThunk(
  "users/deleteReviewByAdmin",
  async (data) => {
    try {
      const response = await axios.delete(
        `http://localhost:4040/api/v1/products/delete-product-review`,
        {data},
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
