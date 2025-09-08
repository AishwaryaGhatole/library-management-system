import { users } from "../../data/user";
import Table from "../Table/Table";
import styles from "./UsersList.module.scss";
import Link from "next/link";

const UsersList = () => {
  const template = {
    headers: ["User ID", "User Name", "Book Issued", "Department"],
    rows: users.map((user) => [
      user.userId,
      user.userName,
      user.bookIssued,
      user.department,
    ]),
  };

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.header}>
        <h2>Users List</h2>
        <Link href="/add-user"> Add New User</Link>
      </div>
      <div className={styles.tableContainer}>
        <Table template={template} />
      </div>
      <p className={styles.tableFooterText}>
        Total Books Listed: {template.rows.length}
      </p>
    </div>
  );
};

export default UsersList;
