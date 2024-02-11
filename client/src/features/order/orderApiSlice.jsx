import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all products
export const createOrder = createAsyncThunk(
  "order/createOreder",
  async (order) => {
    try {
      const response = await axios.post(
        `http://localhost:4040/api/v1/order/create-order`,
        order,
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

// get orders of login user
export const myOrders = createAsyncThunk("order/myOrders", async () => {
  try {
    const response = await axios.get(
      `http://localhost:4040/api/v1/order/my-orders`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Single orders details
export const singleOrderDetails = createAsyncThunk(
  "order/singleOrderDetails",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/order/get-single-order/${id}`,
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
