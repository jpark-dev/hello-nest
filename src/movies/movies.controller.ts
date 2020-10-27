import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get("search")
    search(@Query('year') searchInYear:string) {
        return `Searching for a movie made after: ${searchInYear}`;
    }
    
    @Get(":id")
    getOne(@Param("id") movieId: string) {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.createOne(movieData);
    }

    @Delete(":id")
    remove(@Param("id") movieId: string) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(":id")
    patch(@Param("id") movieId: string, @Body() updateData) {
        return this.moviesService.update(movieId, updateData);
    }


}
