import express from 'express';
import handlebars from 'express-handlebars';

import routes from './routes.js';

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        stars: function (rating) {
            // Валидация и санитизация на входа
            const numRating = Math.max(0, Math.min(10, parseInt(rating) || 0));
            const maxStars = 10;

            // Използваме Unicode символи вместо HTML entities
            const filledStar = '★';
            const emptyStar = '☆';

            let starsText = '';
            for (let i = 0; i < numRating; i++) {
                starsText += filledStar;
            }
            for (let i = numRating; i < maxStars; i++) {
                starsText += emptyStar;
            }

            return starsText;
        }
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(routes);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));