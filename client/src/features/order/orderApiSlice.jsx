import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// get all products
export const createOrder = createAsyncThunk(
  "order/createOreder",
  async (order) => {
    try {
      const response = await axios.post(
        `${baseUrl}/order/create-order`,
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
      `${baseUrl}/order/my-orders`,
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
