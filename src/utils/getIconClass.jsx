import styles from "../components/IconsSvg/IconsSvg.module.css";

export const getIconClass = (classIcon) => {
  return classIcon === "iconModal"
    ? styles.iconModal
    : styles.container_expeseItem;
};
