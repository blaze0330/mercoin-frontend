import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryItems } from "../../types";
import { getCategoriesList } from "../../api/api";

interface CategoryState {
  categories: CategoryItems[];
  isLoading: Boolean;
}

const initialState = {
  categories: [],
  isLoading: false,
} as CategoryState;

export const getCategories = createAsyncThunk<CategoryItems[], void>(
  "category/list",
  async () => {
    const response = await getCategoriesList();
    return response.data.data;
  }
);

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled.type]: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    [getCategories.rejected.type]: (state, action) => {
      state.isLoading = false;
    },
  },
});

const { reducer } = categorySlice;
export default reducer;
