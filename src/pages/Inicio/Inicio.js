import { useEffect, useState } from 'react'
import styles from './Inicio.module.css'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'



const Inicio = () => {

    const [videos, setVideos] = useState([])
    useEffect( () => {
        fetch("https://my-json-server.typicode.com/DylanBenz2000/alura-flix-api/posts")
        .then(response => response.json())
        .then(data => {
            setVideos(data)
        })
    }, [])

    return(
        <>

        <Banner />

        <section className={styles.container}>
            {
                videos.map( (video) => {
                    return <Card key={video.id} {...video}/>
                })
            }
        </section>

        </>
    )
}

export default Inicio