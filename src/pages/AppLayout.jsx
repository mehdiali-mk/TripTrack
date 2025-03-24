import Sidebar from "../Components/Sidebar.jsx";
import styles from "./AppLayout.module.css";
import Map from "../Components/Map.jsx";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
