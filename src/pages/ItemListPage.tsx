import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getShops } from "../features/shop/shopApi";
import { RootState } from "../app/store";
import { getCategories } from "../features/shop/categorySlice";

const ItemListPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state: RootState) => {
    return state.category.categories;
  });
  console.log(categories);

  const filteredShops = useAppSelector((state: RootState) => {
    return state.shop.filteredShops;
  });

  console.log(filteredShops);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getShops(""));
  }, []);
  return <div className="w-full m-auto">asdf</div>;
};

export default ItemListPage;
