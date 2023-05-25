import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { CategoryItems } from "../../types";
import CategoryItem from "./CategoryItem";

type CategoriesProps = {
  categories: CategoryItems[];
};

const CategoryList = ({ categories }: CategoriesProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const showAllShops = () => {
    alert("Show All");
  };
  const categoryClick = (index: number) => {
    navigate(`/?categoryId=${index + 1}`);
  };

  return (
    <div className="flex justify-between flex-row m-20">
      {categories.length > 0 &&
        categories.map((item: CategoryItems, index) => (
          <CategoryItem
            key={item.id}
            categories={item}
            categoryClick={() => categoryClick(index)}
          />
        ))}
      <label style={{ cursor: "pointer" }} onClick={showAllShops}>
        すべて
      </label>
    </div>
  );
};

export default CategoryList;
