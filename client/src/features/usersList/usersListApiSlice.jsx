import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// Get all users by admin
export const getAllUsersByAdmin = createAsyncThunk(
    "users/getAllUsersByAdmin",
    async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/user/admin/get-all-users`,
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
  

// Get single user by admin
export const getSingleUserByAdmin = createAsyncThunk(
    "users/getSingleUserByAdmin",
    async (id) => {
      try {
        const response = await axios.get(
          `${baseUrl}/user/admin/get-single-user/${id}`,
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
  

// Update user by admin
export const updateUserByAdmin = createAsyncThunk(
    "users/updateUserByAdmin",
    async (data) => {
      try {
        const response = await axios.put(
          `${baseUrl}/user/admin/update-user-role/${data.id}`, {
            name : data.name,
            email : data.email,
            role : data.role,
          },
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
  

// Update user by admin
export const deleteUserByAdmin = createAsyncThunk(
    "users/deleteUserByAdmin",
    async (id) => {
      try {
        const response = await axios.delete(
          `${baseUrl}/user/admin/remove-user-by-admin/${id}`,
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
  