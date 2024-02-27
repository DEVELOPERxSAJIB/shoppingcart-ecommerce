import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// Get all products by admin
export const getAllProductsByAdmin = createAsyncThunk(
  "product/getAllProductsByAdmin",
  async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/products/admin/get-all-products`,
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
//         `${baseUrl}/products/${id}`,
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
        `${baseUrl}/products/create-product`,
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
        `${baseUrl}/products/admin/${data.id}`,
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
        `${baseUrl}/products/admin/${id}`,
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
