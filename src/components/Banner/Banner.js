import styles from './Banner.module.css'
import fondo from './fondo.png'
import player from './player.png'

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div className={styles.gradient}></div>

            <div className={styles.main}>
            <p className={styles.titleHeader}>Challenge React <span>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</span></p>
            
            <img src={player} alt='Player' className={styles.player} />
            </div>


            
        </div>
    )
}

export default Banner