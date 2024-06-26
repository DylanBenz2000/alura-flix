import CampoTexto from '../CampoTexto/CampoTexto'
import styles from './Formulario.module.css'
import { useState } from 'react';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Boton/Boton';

const Formulario = () => {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    return(
        <>
        <section className={styles.formulario}>
            <form>
                <h1 className={styles.titulo}>Nuevo Vídeo</h1>
                <p className={styles.parrafo}>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VÍDEO</p>
                <h2 className={styles.subtitle}>Crear Tarjeta</h2>

                <CampoTexto
                    titulo="Título"
                    placeholder="Ingrese el título"
                    required={true}
                    valor={titulo}
                    actualizarValor={setTitulo}
                    type="text"
                />

                <ListaOpciones
                    valor={categoria}
                    actualizarEquipo={setCategoria}
                />

                <CampoTexto
                    titulo="Imagen"
                    placeholder="Ingrese el enlace de la imagen"
                    required={true}
                    valor={imagen}
                    actualizarValor={setImagen}
                    type="url"
                />

                <CampoTexto
                    titulo="Video"
                    placeholder="Ingrese el enlace del video"
                    required={true}
                    valor={video}
                    actualizarValor={setVideo}
                    type="url"
                />

                <CampoTexto
                    titulo="Descripción"
                    placeholder="¿De qué se trata este video?"
                    required={true}
                    valor={descripcion}
                    actualizarValor={setDescripcion}
                    type="text"
                />

            <div className={styles.containerBotones}>
            <Boton 
                    color="black" 
                    borde="#007bff"
                    innerGlow="#007bff"
                    textColor="#007bff"
                >
                    Enviar
                </Boton>
                
            <Boton 
                color="transparent"
                borde="#fff"
                textColor="#fff"
            >
                Limpiar
            </Boton>
            </div>


            
            </form>
        </section>
        </>

    )
}

export default Formulario