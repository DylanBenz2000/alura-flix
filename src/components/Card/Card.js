import Boton from '../Boton/Boton'
import ContainerButtons from '../ContainerButtons/ContainerButtons'
import styles from './Card.module.css'

const Card = ({ id, url, foto, titulo}) => {
    return(
        <div>
            <img src={foto}  className={styles.card} />
            <ContainerButtons>
                <Boton />
                <Boton />
            </ContainerButtons>
        </div>
    )
}

export default Card