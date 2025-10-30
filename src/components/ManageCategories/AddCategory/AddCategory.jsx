import ExpenseItem from "../ExpenseItem";
import style from "./AddCategory.module.css";
import { useState } from "react";

const AddCategory = ({
  isOpen,
  onClose,
  selectedIcon,
  setSelectedIcon,
  setNewCategory,
}) => {
  const [categoryName, setCategoryName] = useState("");
  if (!isOpen) return null;

  const handleAddCategory = () => {
    if (!categoryName || !selectedIcon) return;

    setNewCategory({
      name: categoryName,
      iconId: selectedIcon,
    });
    setCategoryName("");
    onClose();
  };

  return (
    <div className={style.size}>
      <div className={style.sizeContent}>
        <div className={style.title}>
          <h2>Add Category</h2>
          <h3>Category Name</h3>
          <input
            className={style.inputName}
            type="text"
            placeholder="E.g. Groceries"
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
        <div className={style.btnsContainer}>
          <button
            className={`${style.btnBase} ${style.btnCancel}`}
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className={`${style.btnBase} ${style.btnAdd}`}
            onClick={handleAddCategory}
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
