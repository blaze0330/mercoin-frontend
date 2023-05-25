import { CategoryItems } from "../../types";

type CategoryItemProps = {
  categoryClick: () => void;
  categories: CategoryItems;
};

const CategoryItem = ({ categories, categoryClick }: CategoryItemProps) => {
  return <label className="hover: cursor-pointer">{categories.name}</label>;
};

export default CategoryItem;
