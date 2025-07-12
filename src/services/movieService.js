import movieData from '../data/movieData.js';

const getAll = async () => {
    const movies = await movieData.getMovies();
    return movies;
};

export default {
    getAll,
}