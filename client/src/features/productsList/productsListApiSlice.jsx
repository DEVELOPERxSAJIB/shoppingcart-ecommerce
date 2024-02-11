import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get all products by admin
export const getAllProductsByAdmin = createAsyncThunk(
  "product/getAllProductsByAdmin",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/products/admin/get-all-products`,
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

// // Get all products by admin
// export const getSingleProductByAdmin = createAsyncThunk(
//   "product/getSingleProductByAdmin",
//   async (id) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:4040/api/v1/products/${id}`,
//         {
//           withCredentials: true,
//         }
//       );

//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.data.message);
//     }
//   }
// );

// Create product by admin
export const createProductByAdmin = createAsyncThunk(
  "product/createProductByAdmin",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:4040/api/v1/products/create-product`,
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

// Update product by admin
export const updateProductByAdmin = createAsyncThunk(
  "product/updateProductByAdmin",
  async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:4040/api/v1/products/admin/${data.id}`,
        data.data,
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

// Delete product by admin
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4040/api/v1/products/admin/${id}`,
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
