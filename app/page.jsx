import Image from "next/image";
import styles from "./page.module.scss";
import BookDataWidget from "./components/BookDataWidget/BookDataWidget";
import HeroUser from "./components/HeroUser/HeroUser";
import { widgetData } from "./data/widgetData";
import UsersList from "./components/UsersList/UsersList";
import BookList from "./components/BookList/BookList";
import Footer from "./Footer/Footer";


export default function Home() {

  return (
    <main className={styles.mainContainer}>
      <div className={styles.userContainer}>
        <HeroUser />
      </div>
      <div className={styles.widgetsContainer}>
        {widgetData.map((widget) => (
          <BookDataWidget key={widget.id} data={widget} />
        )) }
      </div>

      <div className={styles.tablesContainer}>
        <div className={styles.usersContainer}>
          <UsersList />
        </div>
        <div className={styles.booksContainer}>
          <BookList />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </main>
  );
}
