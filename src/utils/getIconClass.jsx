import styles from "../components/IconsSvg/IconsSvg.module.css";

export const getIconClass = (classIcon, selectedIcon, id) => {
  const baseClass =
    classIcon === "iconModal" ? styles.iconModal : styles.container_expeseItem;

  const isSelected = id === selectedIcon;
  console.log(id);
  console.log(selectedIcon);

  return `${baseClass} ${isSelected ? styles.selected : ""}`.trim();
};
