import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// Get all users by admin
export const allReviewsByAdmin = createAsyncThunk(
  "users/allReviewsByAdmin",
  async (id) => {
    try {
      const response = await axios.get(
        `${baseUrl}/products/find-reviews-of-product/${id}`,
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
        `${baseUrl}/products/delete-product-review`,
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
