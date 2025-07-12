
import db from '../db.json' with { type: 'json' };

async function getMovies() {
    return db.movies;
}

export default {
    getMovies
}