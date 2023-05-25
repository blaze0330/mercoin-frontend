import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getShops } from "../features/shop/shopApi";
import { RootState } from "../app/store";
import { getCategories } from "../features/shop/categorySlice";
import CategoryList from "../components/category/CategoryList";
import CardList from "../components/card/CardList";

const ItemListPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state: RootState) => {
    return state.category.categories;
  });

  const filteredShops = useAppSelector((state: RootState) => {
    return state.shop.filteredShops;
  });

  console.log(filteredShops);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getShops(""));
  }, []);
  return (
    <div className="w-full m-auto md:max-w-[1440px]">
      <CategoryList categories={categories} />
      <CardList shops={filteredShops} />
    </div>
  );
};

export default ItemListPage;
