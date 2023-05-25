import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { getShopById, getShops } from "./shopApi";
import { ShopItems } from "../../types";

interface ShopState {
  shops: ShopItems[] | [];
  shop: ShopItems | null;
  isLoading: boolean;
  filteredShops: ShopItems[] | [];
}
const initialState = {
  shops: [],
  shop: null,
  isLoading: false,
  filteredShops: [],
} as ShopState;

export const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getShops.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [getShops.fulfilled.type]: (state, action) => {
      console.log(action.payload);

      if (action.payload.length > 0) {
        state.filteredShops = action.payload.filter((res: ShopItems) =>
          res.name
            ?.toLowerCase()
            .includes((action.filterKey || "").toLowerCase())
        );
      }
      state.isLoading = false;
    },
    [getShops.rejected.type]: (state, action) => {
      state.isLoading = false;
    },
    [getShopById.pending.type]: (state, action) => {
      state.shop = null;
      state.isLoading = true;
    },
    [getShopById.pending.type]: (state, action) => {
      state.shop = action.payload;
      state.isLoading = false;
    },
    [getShopById.pending.type]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default shopSlice.reducer;
