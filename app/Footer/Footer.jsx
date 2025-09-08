import Link from 'next/link'
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <p>Made By || <span><Link href="https://www.linkedin.com/in/aishwarya-ghatole-303295246/">Aishwarya Ghatole.</Link></span></p>
    </div>
  )
}

export default Footer