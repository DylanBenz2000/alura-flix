import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})


//GET

export const getVideos = async () => {
    try{
        const response = await api.get('/posts')
        return response.data
    } catch (error) {
        console.log("Error fetching videos:", error)
        throw error;
    }
}


export const getCategorias = async () => {
    try {
        const response = await api.get('/categorias');
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};


// POST

// POST
export const agregarVideo = async (titulo, categoria, imagen, video, descripcion) => {
    try {
        const response = await api.post('/posts', {
            titulo,
            categoria,
            foto: imagen,
            url: video,
            descripcion
        });
        return response.data;
    } catch (error) {
        console.error('Error adding video:', error);
        throw error;
    }
}


//DELETE
export const borrarVideo = async (id) => {
    try {
        await api.delete(`/posts/${id}`);
        alert('Video eliminado');
    } catch (error) {
        alert('Hay un error');
        console.error('Error deleting video:', error);
    }
}
