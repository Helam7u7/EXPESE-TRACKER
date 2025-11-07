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

const ExpenseItem = ({
  classIcon,
  name,
  selectedIcon,
  setSelectedIcon,
  listCategories,
}) => {
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
  if (listCategories) {
    return (
      <>
        {listCategories.map((cat, index) => {
          const iconIndex = parseInt(cat.iconId.split("-")[1], 10);
          const idCategory = `${cat.name.replace(/\s+/g, "-").toLowerCase()}-${
            cat.iconId
          }`;
          const IconComponent = iconMap[iconIndex];
          if (!IconComponent) return null;

          return (
            <IconComponent
              key={index}
              id={idCategory}
              classIcon={classIcon}
              name={cat.name}
              isSelected={true}
            />
          );
        })}
      </>
    );
  }

  // Si no hay listCategories, renderizar todos los íconos para selección
  return (
    <>
      {iconMap.map((IconComponent, index) => {
        const iconId = `id-${index}`;
        return (
          <IconComponent
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
