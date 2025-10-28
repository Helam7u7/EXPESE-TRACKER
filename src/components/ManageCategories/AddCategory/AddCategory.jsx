import ExpenseItem from "../ExpenseItem";
import style from "./AddCategory.module.css";

const AddCategory = ({ isOpen, onClose, iconList, setIconList }) => {
  if (!isOpen) return null;

  return (
    <div className={style.size}>
      <div className={style.title}>
        <h2>Add Category</h2>
        <h3>Category Name</h3>
        <input type="text" placeholder="E.g. Groceries" />
      </div>
      <h3>Choose an Icon</h3>
      <div className={style.iconsContainer}>
        <ExpenseItem
          classIcon="iconModal"
          setIconList={setIconList}
          iconList={iconList}
        />
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
