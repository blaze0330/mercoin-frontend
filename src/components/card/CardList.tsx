import { ShopItems } from "../../types";
import CardItem from "./CardItem";

type CardListProps = {
  shops: ShopItems[];
};

const CardList = ({ shops }: CardListProps) => {
  return (
    <div className="bg-gray-500">
      <div className="flex flex-row flex-wrap justify-center">
        {shops.length > 0 &&
          shops.map((item: ShopItems) => (
            <CardItem key={item.id} shops={item} />
          ))}
      </div>
    </div>
  );
};

export default CardList;
