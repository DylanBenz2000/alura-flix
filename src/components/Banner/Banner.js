import styles from './Banner.module.css'
import fondo from './fondo.png'
import player from './player.png'

const Banner = () => {
    return(
        <div className={styles.banner}>
            <img src={player} alt='Player' className={styles.player} />
            
        </div>
    )
}

export default Banner