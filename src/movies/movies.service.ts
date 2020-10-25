import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        // query to be used for real DB
        return this.movies;
    }

    getOne(id:string): Movie {
        const movie = this.movies.find(movie => movie.id === +id);
        if(!movie) {
            throw new NotFoundException(`Movie with ID: ${id} not found.`);
        }
        return movie;
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
