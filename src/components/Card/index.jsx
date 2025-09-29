import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact,} from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { FaC } from 'react-icons/fa6'


function Card( {name, description, html_url} ){
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.icons}>
                <div className={styles.ico}>
                    <FaHtml5/>
                    <FaCss3Alt/>
                    <FaJs/>
                    <FaC/>
                </div>
                <a href={html_url} target="_blank" rel="noopenner, norefferer" className={styles.botao}>
                    <BsArrowRight/>
                </a>
            </div>
        </section>
    )
}
export default Card