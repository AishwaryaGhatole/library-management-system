
import Link from "next/link";
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <p>LMS</p>
        </Link>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.title}>Dashboard</div>
        <div className={styles.ctaBtn}>
          <Link href="/add-user">
          <button>Login / Signup</button>
        </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
