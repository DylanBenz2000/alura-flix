import styles from './Banner.module.css'
import fondo from './fondo.png'
import player from './player.png'

const Banner = ({ titulo, descripcion, imagen}) => {
    return(
        <div className={styles.banner}>
            <div className={styles.gradient}></div>

            <div className={styles.main}>

                <div className={styles.containerTitles}>
                    <p className={styles.titleHeader}>{titulo}</p>
                    <p className={styles.subtitle}>{descripcion}</p>
                </div>

                <img src={imagen} alt='Player' className={styles.player} />
            </div>


            
        </div>
    )
}

export default Banner