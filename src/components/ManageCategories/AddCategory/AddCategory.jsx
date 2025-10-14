import style from "./AddCategory.module.css";

const AddCategory = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className={style.size}>
      <div onClick={onClose}>Cancelar</div>
    </div>
  );
};

export default AddCategory;
