import Boton from '../Boton/Boton'
import ContainerButtons from '../ContainerButtons/ContainerButtons'
import styles from './Card.module.css'

const Card = ({ id, url, foto, titulo, categoriaColor }) => {
    return(
        <div className={styles.card} style={{ boxShadow: `0px 4px 8px ${categoriaColor}` }}>
            <img src={foto} className={styles.cardImg} style={{ boxShadow: `0px 4px 8px ${categoriaColor}` }} alt={titulo} />
            <ContainerButtons bordeColor={categoriaColor}>
                <Boton color="transparent" > <i className="fas fa-edit"></i> Editar</Boton>
                <Boton color="transparent"> <i className="fa fa-trash"></i>Borrar</Boton>
            </ContainerButtons>
        </div>
    )
}

export default Card