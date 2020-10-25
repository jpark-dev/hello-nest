import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        // query to be used for real DB
        return this.movies;
    }

    getOne(id:string): Movie {
        return this.movies.find(movie => movie.id === +id);
    }

    deleteOne(id: string): boolean {
        this.movies.find(movie => movie.id === +id);
        return true;
    }

    createOne(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }
}
