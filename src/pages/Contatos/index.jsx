import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube, BsDiscord } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import styles from './Contatos.module.css'

function Contatos() {

    return (
        <>       <section className={styles.contatos}>
                    <div className={styles.textos}>
                    <p>
                    <span>Contatos</span><br/>
                    Entre em contato para mais informações 
                    </p>
                    </div>
                    <div className={styles.icones}>
                        <a href='mailto:mateusesteves33@gmail.com' target='_blank' rel='noopener noreferrer' >
                       <GoMail className={styles.icone} /> Email 
                        </a>
                        <a href='https://www.instagram.com/theus__0013/' target='_blank' rel='noopener noreferrer'>
                        <BsInstagram className={styles.icone} /> Instagran
                        </a>

                        <a href='https://discord.gg/Bw3CgzZqka' target='_blank' rel='noopener noreferrer'>
                       <BsDiscord className={styles.icone} />  Discord
                        </a>

                        <a href='https://github.com/Mateusdev3' target='_blank' rel='noopener noreferrer'>
                        <BsGithub className={styles.icone} /> Github
                        </a>

                        <a href='https://www.linkedin.com/in/mateus-esteves-b150231b5/' target='_blank' rel='noopener noreferrer'>
                        <BsLinkedin className={styles.icone} /> Linkedin
                        </a>
                    </div>
                </section>
        </>
   )
}
export default Contatos