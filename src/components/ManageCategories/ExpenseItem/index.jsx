import CarIcon from "../../IconsSvg/CarIcon";
import FoodIcon from "../../IconsSvg/FoodIcon";
import Game from "../../IconsSvg/Game";
import Pet from "../../IconsSvg/Pet";
import Relation from "../../IconsSvg/Relation";
import Shopping from "../../IconsSvg/Shopping";
import Sport from "../../IconsSvg/Sport";
import Streaming from "../../IconsSvg/Streaming";
import Study from "../../IconsSvg/Study";

const ExpenseItem = ({ type }) => {
  const iconMap = {
    transportation: <CarIcon />,
    food: <FoodIcon />,
    game: <Game />,
    pet: <Pet />,
    relation: <Relation />,
    shopping: <Shopping />,
    sport: <Sport />,
    streaming: <Streaming />,
    study: <Study />,
  };
  return <>{iconMap[type]}</>;
};

export default ExpenseItem;
