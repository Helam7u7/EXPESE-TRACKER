import ExpenseItem from "../ExpenseItem";
import style from "./AddCategory.module.css";

const AddCategory = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className={style.size}>
      <ExpenseItem type="pet" classIcon="iconModal" />
      <div onClick={onClose}>Cancelar</div>
    </div>
  );
};

export default AddCategory;
