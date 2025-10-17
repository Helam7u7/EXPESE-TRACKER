import CarIcon from "../../IconsSvg/CarIcon";
import FoodIcon from "../../IconsSvg/FoodIcon";
import Game from "../../IconsSvg/Game";
import Pet from "../../IconsSvg/Pet";
import Relation from "../../IconsSvg/Relation";
import Shopping from "../../IconsSvg/Shopping";
import Sport from "../../IconsSvg/Sport";
import Streaming from "../../IconsSvg/Streaming";
import Study from "../../IconsSvg/Study";

const ExpenseItem = ({ type, classIcon }) => {
  const iconMap = {
    transportation: <CarIcon classIcon={classIcon} />,
    food: <FoodIcon classIcon={classIcon} />,
    game: <Game classIcon={classIcon} />,
    pet: <Pet classIcon={classIcon} />,
    relation: <Relation classIcon={classIcon} />,
    shopping: <Shopping classIcon={classIcon} />,
    sport: <Sport classIcon={classIcon} />,
    streaming: <Streaming classIcon={classIcon} />,
    study: <Study classIcon={classIcon} />,
  };
  return <>{iconMap[type]}</>;
};

export default ExpenseItem;
