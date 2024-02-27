import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// Login user
export const loginUser = createAsyncThunk("user/loginUser", async (data) => {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/login`,
      data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Logout user
export const logOutUser = createAsyncThunk("user/logOutUser", async () => {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/logout`,
      "",
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Process user register
export const processRegister = createAsyncThunk(
  "auth/processRegister",
  async (form_data) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/process-register`,
        form_data,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Verify registered user
export const verifyRegisteredUser = createAsyncThunk(
  "user/verifyRegisteredUser",
  async (token) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/verify-register`,
        { token },
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

// Get loggedin user info
export const loggedInUserInfo = createAsyncThunk(
  "user/loggedInUserInfo",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/auth/me`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Request for recovery Forgot Password
export const forgotPasswordRequest = createAsyncThunk(
  "user/forgotPasswordRequest",
  async (email) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/forgot-password`,
        { email },
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

// Reset password with the help of token
export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (data) => {
    try {
      const response = await axios.put(
        `${baseUrl}/auth/reset-password`,
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

// Update password by user
export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (data) => {
    try {
      const response = await axios.put(
        `${baseUrl}/auth/update-password`,
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

// Update profile
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (data) => {
    try {
      const response = await axios.put(
        `${baseUrl}/auth/update-profile/${data.id}`,
        data.data
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
