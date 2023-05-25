import { useNavigate } from "react-router";
import { ShopItems } from "../../types";

type CardItemProps = {
  shops: ShopItems;
};
const CardItem = ({ shops }: CardItemProps) => {
  const navigate = useNavigate();

  const cardDetail = () => {
    navigate(`/detail/${shops.id}`);
  };

  return (
    <div
      className="w-[200px] h-[260px] bg-white border-none m-[3px] hover: cursor-pointer position: relative"
      onClick={cardDetail}
    >
      <div className="w-[200px] h-[200px] position: absolute">
        <img
          src={shops.image}
          alt="fail image"
          className="h-[200px] w-[200px]"
        />
        <div className="mx-[5px] my-[10px]">
          {shops.name.length > 20 ? (
            <div>{shops.name.slice(0, 20)}...</div>
          ) : (
            <div>{shops.name}</div>
          )}
          <div className="flex flex-row justify-between mt-[5px]">
            <div>{shops.price}</div>
            <div className="flex flex-row">{shops.like_count}</div>
          </div>
        </div>
      </div>
      {shops.is_sold_out && (
        <div className="w-0 h-0 border-b-40 border-solid border-red text-white -rotate-315 top-0 ml-[-26px] mt-[-6px] position: absolute">
          <div className="position: absolute mt-[20px] ml-[-15px]">sold</div>
        </div>
      )}
    </div>
  );
};
export default CardItem;
