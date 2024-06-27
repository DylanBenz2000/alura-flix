import { useEffect, useState } from 'react'
import styles from './Inicio.module.css'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import CardTitle from '../../components/CardTitle/CardTitle';




const Inicio = () => {

    const [videos, setVideos] = useState([])
    const [categorias, setCategorias] = useState([]);


    useEffect( () => {
        fetch("https://my-json-server.typicode.com/DylanBenz2000/alura-flix-api/posts")
        .then(response => response.json())
        .then(data => {
            setVideos(data)
        })

        fetch("https://my-json-server.typicode.com/DylanBenz2000/alura-flix-api/categorias")
        .then(response => response.json())
        .then(data => {
            setCategorias(data);
        });

    }, [])


    return(

        <>
            <Banner />
            {categorias.map(categoria => {
                const videosCategoria = videos.filter(video => video.categoria === categoria.id);
                return (
                    <section key={categoria.id} className={styles.section}>
                        {/* <h2 className={styles.categoriaTitulo} style={{ backgroundColor: categoria.color }}>
                            {categoria.nombre}
                        </h2> */}
                        <div className={styles.contTitle}>
                        <CardTitle colorFondo={categoria.color}>{categoria.nombre}</CardTitle>
                        </div>
                        <div className={styles.container}>
                            {videosCategoria.map(video => (
                                <Card key={video.id} {...video} categoriaColor={categoria.color} />
                            ))}
                        </div>
                    </section>
                );
            })}
        </>
    )
}

export default Inicio