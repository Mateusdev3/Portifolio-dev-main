import styles from './Sobre.module.css'
import avatar from './images/eu.png'
import html from './images/html.svg'
import css from './images/css.svg'
import js from './images/js.svg'
import node from './images/node.svg'
import sql from './images/sql.svg'
import c from './images/c3.svg'
import pc from './images/maquina.png'
function Sobre() {
    return (
        <>
            <section className={styles.sobre}>
                <h1>Sobre</h1>
                <div className={styles.bio}>
                    <div className={styles.bio_textos}>
                        <img src={avatar} alt="avatar" className={styles.avatar} />
                        <div className={styles.textos}>
                            <h2>Mateus Esteves</h2>
                            <span>Desenvolvedor de software</span> <br />
                            <br />
                            <br />
                            <p>Tambem conhecido na comunidade como Madara_ possuo conhecimento em diversas areas como Administração de Redes  Desenvolvimento de Software, Desenvolvimento Web com react, dentre outros.</p> <br />
                            <p>Comprometido em desenvolver soluções robustas e eficientes focando na otimização de processos e na integração de tecnologias modernas para melhorar a experiência do usuário.</p> <br />
                            <p>Apaixonado por transformar ideias em realidade digital.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.maquina}>
                    <h1>Maquina</h1>
                    <div className={styles.fotos}>
                        <img src={pc} alt="Maquina" />
                        <div className={styles.maquinatxt}>
                            <h2>Desktop </h2>
                            <span>Utilizado para desenvolvimento dos projetos</span>
                            <br />
                            <li>Componentes:</li>
                            <br />
                            <li>Placa mãe Asus B450m Gaming BR</li>
                            <li>Processador: Ryzen 5 4500</li>
                            <li>Placa de video: RX6600 Asrock</li>
                            <li>Memoria ram: 2x Team Group T-force 8gb 3200mhz</li>
                            <li>Armazenamento: SSD Sata WD 480GB, SSD Sata Netac 256GB</li>
                            <li>Fonte: Gamemax GM650 80 plus bronze</li>
                            <li>Gabinete: AZZA Eclipse</li>
                            <br />
                            <span>Maquina 100% montada por mim !</span>
                        </div>
                    </div>
                </div>
                <div className={styles.techs}>
                    <h1>Techs</h1>
                    <div className={styles.icons}>
                        <img src={html} alt="HTML" />
                        <img src={css} alt="CSS" />
                        <img src={js} alt="JS" />
                        <img src={node} alt="NODE" />
                        <img src={sql} alt="SQl" />
                        <img src={c} alt="C" />
                    </div>
                </div>
            </section>
        </>
    )

}
export default Sobre