import styles from './ContainerButtons.module.css'
const ContainerButtons = ({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default ContainerButtons