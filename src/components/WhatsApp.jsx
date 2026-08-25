import { MessageCircle } from 'lucide-react'
import styles from './WhatsApp.module.css'

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      aria-label="Falar com a Keyla no WhatsApp"
    >
      <MessageCircle size={26} fill="currentColor" />
    </a>
  )
}
