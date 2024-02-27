import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// Get all orders by Admin
export const getAllOrdersByAdmin = createAsyncThunk(
  'order/getAllOrdersByAdmin',
  async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/order/all-orders`,
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


// Single order details by Admin
export const orderDetailsByAdmin = createAsyncThunk(
  "order/orderDetailsByAdmin",
  async (id) => {
    try {
      const response = await axios.get(
        `${baseUrl}/order/get-single-order/${id}`,
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


// Update order status and quantity by Admin
export const updateOrderByAdmin = createAsyncThunk(
  "order/updateOrderByAdmin",
  async (data) => {
    try {
      const response = await axios.post(
        `${baseUrl}/order/update-order/${data.id}`, {status : data.status},
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

// Delete order by Admin
export const deleteOrderByAdmin = createAsyncThunk(
  "order/deleteOrderByAdmin",
  async (id) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/order/delete-order/${id}`,
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
