import { getIconElement } from "../../../utils/getIconElement";
import CarIcon from "../../IconsSvg/CarIcon";
import FoodIcon from "../../IconsSvg/FoodIcon";
import Game from "../../IconsSvg/Game";
import Pet from "../../IconsSvg/Pet";
import Relation from "../../IconsSvg/Relation";
import Shopping from "../../IconsSvg/Shopping";
import Sport from "../../IconsSvg/Sport";
import Streaming from "../../IconsSvg/Streaming";
import Study from "../../IconsSvg/Study";

const ExpenseItem = ({ classIcon, name, selectedIcon, setSelectedIcon }) => {
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
      {iconMap.map((IconComponents, index) => {
        const iconId = `id-${index}`;
        return (
          <IconComponents
            key={index}
            id={iconId}
            classIcon={classIcon}
            name={name}
            isSelected={selectedIcon === `icon-${index}`}
            selectedIcon={selectedIcon}
            onClick={(e) => getIconElement(e, setSelectedIcon, iconId)}
          />
        );
      })}
    </>
  );
};

export default ExpenseItem;
