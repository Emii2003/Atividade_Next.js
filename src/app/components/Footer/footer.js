import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} ThinkingFive - Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;