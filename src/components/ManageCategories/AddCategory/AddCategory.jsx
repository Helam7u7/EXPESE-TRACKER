import ExpenseItem from "../ExpenseItem";
import style from "./AddCategory.module.css";
import { useState } from "react";

const AddCategory = ({
  isOpen,
  onClose,
  selectedIcon,
  setSelectedIcon,
  setListCategories,
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [handleIcon, setHandleIcon] = useState(false);
  const newCategory = { name: "", iconId: "" };
  if (!isOpen) return null;

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!categoryName || !selectedIcon) {
      setHandleIcon(true);
      return;
    }

    newCategory.name = categoryName.trim();
    newCategory.iconId = selectedIcon;

    setListCategories((prev) => [...prev, newCategory]);
    setCategoryName("");
    onClose();
    setHandleIcon(false);
  };

  const handleCancelBtn = (e) => {
    e.preventDefault();
    setCategoryName("");
    setHandleIcon(false);
    onClose();
  };

  return (
    <div className={style.size}>
      <div className={style.sizeContent}>
        <form onSubmit={handleAddCategory}>
          <div className={style.title}>
            <h2>Add Category</h2>
            <h3>Category Name</h3>
            <input
              className={style.inputName}
              type="text"
              placeholder="E.g. Groceries"
              required
              spellCheck={false}
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className={style.title}>
            <h3>Choose an Icon</h3>
          </div>
          <div className={style.iconsContainer}>
            <ExpenseItem
              classIcon="iconModal"
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
            />
          </div>
          {handleIcon ? (
            <div className={style.alertIcon}>Escoge algún ícono</div>
          ) : null}
          <div className={style.btnsContainer}>
            <button
              className={`${style.btnBase} ${style.btnCancel}`}
              onClick={handleCancelBtn}
            >
              Cancelar
            </button>
            <button
              className={`${style.btnBase} ${style.btnAdd}`}
              type="submit"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
