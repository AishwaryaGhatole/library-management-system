import styles from "./BookDataWidget.module.scss"


const BookDataWidget = (props) => {
  return (
    <div className={styles.widgetWrapper}>
      <div className={styles.wrapperOne}>
        <div className={styles.count}>{props.data.bookCount}</div>
        <div className={styles.imageWrapper}><img src={props.data.widgetImage} alt="" /></div>
      </div>
      <div className={styles.description}>{props.data.widgetName}</div>

    </div>
  )
}

export default BookDataWidget