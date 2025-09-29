import styles from './Home.module.css'
import { Link } from 'react-router-dom'


function Home(){
    return(
        <>
      
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
              Olá, sou <br/>
              <span>Mateus Esteves</span> <br />
              Dev Full Stack
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais
          </Link>
      </div>
      <figure>
          <img className={styles.img_home} src="/svg1.svg" />
      </figure>
  </section>
 
  </>
       
    )
}
export default Home
