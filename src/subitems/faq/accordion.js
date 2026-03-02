import { useState } from "react"
import styles from "./faq.module.scss"

export const Accordion = ({ config }) => {
  return (
    <>
      {config.map((item, i) => (
        <Item key={i} text={item.text} title={item.title} />
      ))}
    </>
  )
}

const Item = ({ title, text }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.faq_item}>
      <div
        onClick={() => setOpen(!open)}
        className={open ? styles.open : ""}
      >
        <h3 
          dangerouslySetInnerHTML={{ __html: title }} 
          className={styles.faq_item_title} 
        />
      </div>
      <div 
        style={open ? { display: 'block' } : {}} 
        className={styles.faq_item_hidden}
      >
        <div dangerouslySetInnerHTML={{ __html: text }} className={styles.faq_item_content} />
      </div>
    </div>
  )
}