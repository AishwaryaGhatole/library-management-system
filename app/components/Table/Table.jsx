"use client"
import styles from "./Table.module.scss";

const Table = ({template}) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        {/* Table Header */}
        <thead className={styles.tableHead}>
          <tr>
            {template.headers.map((header, index) => (
              <th key={index} className={styles.tableTitle}>{header}</th>
            ))}
          </tr>
        </thead>  

        {/* Table Body */}
        <tbody className={styles.tableBody}>
        {template.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
