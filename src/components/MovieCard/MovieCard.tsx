import React from 'react';
import { Movie } from '../../types/movie';
import styles from './MovieCard.module.scss';

interface MovieCardProps {
    movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const title = movie.nameRu || movie.nameOriginal || 'Без названия';
    const genres = movie.genres.map(g => g.genre).join(', ');

    return (
        <div className={styles.card}>
            <div className={styles.posterWrapper}>
                <img
                    src={movie.posterUrlPreview}
                    alt={title}
                    className={styles.poster}
                />
                {movie.ratingKinopoisk && (
                    <div className={`${styles.rating} ${movie.ratingKinopoisk >= 7 ? styles.high : ''}`}>
                        {movie.ratingKinopoisk}
                    </div>
                )}
            </div>
            <div className={styles.info}>
                <h3 className={styles.title} title={title}>{title}</h3>
                <p className={styles.meta}>{genres} • {movie.year}</p>
            </div>
        </div>
    );
};