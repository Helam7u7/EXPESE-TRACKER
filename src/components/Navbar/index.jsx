import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a>Home</a>
      <a>Summary</a>
    </div>
  );
};

export default Navbar;
