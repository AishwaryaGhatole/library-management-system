"use client"
import { books } from "../../data/books"
import Table from "../Table/Table"
import styles from "./BookList.module.scss"
import { useState } from "react"

const BookList = () => {
 
    const [searchQuery, setSearchQuery] = useState("")

  // filter books by search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.bookId.toLowerCase().includes(searchQuery.toLowerCase())
  )

    const template = {
    headers: ["Book ID", "Title", "Author", "Available", ],
    rows: filteredBooks.map((book) => [
      book.bookId,
      book.title,
      book.author,
      book.available,
    ])
  }


  return (
    <div className={styles.componentWrapper}>
      <div className={styles.header}>
        <h2>Books List</h2>
        <input 
          type="text" 
          placeholder="Search Books"  
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={styles.tableContainer}>
        <Table template={template}/>
      </div>
        <p className={styles.tableFooterText}>
        Total Books Listed: {template.rows.length}
      </p>
    </div>
  )
}

export default BookList