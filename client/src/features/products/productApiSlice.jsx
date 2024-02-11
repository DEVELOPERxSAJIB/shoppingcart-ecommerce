import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all products
export const getAllProducts = createAsyncThunk(
  "product/getAllProduct",
  async ({ currentPage, pageSize, keyword, category, priceRange, sort, ratings }) => {
    try {
      let apiUrl = `http://localhost:4040/api/v1/products?page=${currentPage}&pageSize=${pageSize}`;

      // Append the keyword to the URL if it is present
      if (keyword) {
        apiUrl += `&keyword=${keyword}`;
      }

      // Append the category to the URL if it is present
      if (category) {
        apiUrl += `&category=${category}`;
      }

      // Append the priceRange to the URL if it is present
      if (priceRange) {
        apiUrl += `&price=${priceRange.minPrice}-${priceRange.maxPrice}`;
      }

      // Append the priceRange to the URL if it is present
      if (ratings) {
        apiUrl += `&ratings=${ratings}-${5}`;
      }

      // Append the date to the URL if it is present
      if (sort) {
        apiUrl += `&orderby=${sort}`;
      }

      console.log(apiUrl);

      const response = await axios.get(apiUrl, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get single product
export const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/products/${id}`,
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

// create a review
export const createReview = createAsyncThunk(
  "product/createReview",
  async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:4040/api/v1/products/review-product/${data.id}`,
        data,
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
