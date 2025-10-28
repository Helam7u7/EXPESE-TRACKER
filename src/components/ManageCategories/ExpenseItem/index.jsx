import CarIcon from "../../IconsSvg/CarIcon";
import FoodIcon from "../../IconsSvg/FoodIcon";
import Game from "../../IconsSvg/Game";
import Pet from "../../IconsSvg/Pet";
import Relation from "../../IconsSvg/Relation";
import Shopping from "../../IconsSvg/Shopping";
import Sport from "../../IconsSvg/Sport";
import Streaming from "../../IconsSvg/Streaming";
import Study from "../../IconsSvg/Study";

const ExpenseItem = ({ classIcon, name, iconList, setIconList }) => {
  const iconMap = [
    CarIcon,
    FoodIcon,
    Game,
    Pet,
    Relation,
    Shopping,
    Sport,
    Streaming,
    Study,
  ];
  return (
    <>
      {iconMap.map((IconComponents, index) => (
        <IconComponents
          key={index}
          id={`id-${index}`}
          classIcon={classIcon}
          name={name}
          iconList={iconList}
          setIconList={setIconList}
        />
      ))}
    </>
  );
};

export default ExpenseItem;
