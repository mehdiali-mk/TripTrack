import Logo from "./Logo.jsx";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav.jsx";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by TripTrack Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
