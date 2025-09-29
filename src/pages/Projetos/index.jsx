import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'

function Projetos() {


    const [repositorios, setRepositorios ] = useState([])


    useEffect(() => { 
        const buscarRepo = async () => {
            const response = await fetch('https://api.github.com/users/Mateusdev3/repos')
            const data = await response.json()
            setRepositorios(data)

        }
        buscarRepo()
    },[])



    return (
        <>
            <section className={styles.projetos}>
                <div className={styles.titulo}>
                    <h1>Projetos</h1>
                    </div>
                {
                    repositorios.length > 0 ? (
                        <section className={styles.card}> 
                        {
                            repositorios.map((repo) => (
                              <Card 
                              
                              key={repo.id} 
                              name = {repo.name} 
                              description={repo.description} 
                              html_url={repo.html_url}
                              /> 
                              
                            ))

                        }
                            
                        </section>

                    ) : (
                        <p>Carregando Repositorios</p>
                    )
                }
            </section>
      

        </>
    )
}
export default Projetos