import ExpenseItem from "../ExpenseItem";
import style from "./AddCategory.module.css";

const AddCategory = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className={style.size}>
      <div className="titles">
        <h2>Add Category</h2>
        <h3>Category Name</h3>
        <input type="text" placeholder="E.g. Groceries" />
      </div>
      <h3>Choose an Icon</h3>
      <div className={style.iconsContainer}>
        <ExpenseItem type="transportation" classIcon="iconModal" />
        <ExpenseItem type="food" classIcon="iconModal" />
        <ExpenseItem type="game" classIcon="iconModal" />
        <ExpenseItem type="pet" classIcon="iconModal" />
        <ExpenseItem type="relation" classIcon="iconModal" />
        <ExpenseItem type="shopping" classIcon="iconModal" />
        <ExpenseItem type="sport" classIcon="iconModal" />
        <ExpenseItem type="streaming" classIcon="iconModal" />
        <ExpenseItem type="study" classIcon="iconModal" />
      </div>
      <div className="btns_container">
        <div className="btn_cancel" onClick={onClose}>
          <button>Cancelar</button>
        </div>
        <div className="btn_add">
          <button>Add Category</button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
