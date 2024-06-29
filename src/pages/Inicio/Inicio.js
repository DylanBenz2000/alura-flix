import { useEffect, useState } from 'react'
import styles from './Inicio.module.css'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import CardTitle from '../../components/CardTitle/CardTitle';
import { getCategorias, getVideos } from '../../services/apiService';




const Inicio = ({ videos }) => {

    // const [videos, setVideos] = useState([])
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const categoriasData = await getCategorias();
                setCategorias(categoriasData);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategorias();
    }, []);


    useEffect(() => {
        console.log('Videos received in Inicio:', videos);
    }, [videos]);

    // useEffect( () => {
    //     const fetchData = async () => {
    //         try{
    //             const videosData = await getVideos();
    //             setVideos(videosData)

    //             const categoriasData = await getCategorias();
    //             setCategorias(categoriasData);
    //         }catch (error){
    //             console.error("Error fetching:", error)
    //         }
    //     };
    //     fetchData();
    // }, [])
    


    // useEffect( () => {
    //     fetch("http://localhost:5000/posts")
    //     .then(response => response.json())
    //     .then(data => {
    //         setVideos(data)
    //     })

    //     fetch("http://localhost:5000/categorias")
    //     .then(response => response.json())
    //     .then(data => {
    //         setCategorias(data);
    //     });

    // }, [])


    return(

        <>
            <Banner />
            {categorias.map(categoria => {
                const videosCategoria = videos.filter(video => video.categoria.toLowerCase() === categoria.nombre.toLowerCase());
                return (
                    <section key={categoria.id} className={styles.section}>
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