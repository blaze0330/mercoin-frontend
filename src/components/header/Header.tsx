import ItemDetailHeader from "../../layouts/Header/ItemDetailHeader";
import ItemListHeader from "../../layouts/Header/ItemListHeader";
import { Route, Routes } from "react-router";

const Header = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemListHeader />} />
      <Route path="/detail/:id" element={<ItemDetailHeader />} />
    </Routes>
  );
};

export default Header;
