import { createAsyncThunk } from "@reduxjs/toolkit";
import { getShop, getShopsList } from "../../api/api";
import { ShopItems } from "../../types";

export const getShops = createAsyncThunk<ShopItems[], string>(
  "shop/list",
  async (filterKey?: string) => {
    const response = await getShopsList();

    return response.data.data;
  }
);

export const getShopById = createAsyncThunk<ShopItems, number>(
  "shop/show",
  async (id) => {
    const response = await getShop(id);
    return response.data;
  }
);
