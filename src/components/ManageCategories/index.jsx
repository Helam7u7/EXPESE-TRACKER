import { useState } from "react";
import AddCategory from "./AddCategory/AddCategory";
import ExpenseItem from "./ExpenseItem";
import styles from "./ManageCategories.module.css";

const ManageCategories = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [iconList, setIconList] = useState([]);

  return (
    <main className={styles.containerCategories}>
      <div className={styles.navCategories}>
        <h1>Manage Categories</h1>
        <div
          onClick={() => setModalOpen(true)}
          className={styles.btnAddCategory}
        >
          <div className={styles.iconAddCategory}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="#ffffff"
                d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
              />
            </svg>
          </div>
          <button>New Category</button>
        </div>
      </div>
      <div className={styles.expense_container}>
        <h2>Expenses</h2>
        <div className={styles.containerExpenseItems}>{}</div>
      </div>
      <AddCategory
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        iconList={iconList}
        setIconList={setIconList}
      />
    </main>
  );
};

export default ManageCategories;
