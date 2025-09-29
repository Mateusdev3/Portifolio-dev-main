import styles from './Footer.module.css'
function Footer() {
    return (
        <div className={styles.main}>
            <footer className={styles.footer}>
                <span> &copy; 2024 Mateus - Desenvolvedor <br /> Todos os direitos reservados. </span>
            </footer>
        </div>
    )
}
export default Footer