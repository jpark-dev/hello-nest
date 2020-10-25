import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return something";
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string) {
        return `This will return one item with id: ${movieId}`;
    }

    @Post()
    create() {
        return `This will create a movie`;
    }

    @Delete("/:id")
    remove(@Param("id") movieId: string) {
        return `This will delete a movie with id: ${movieId}`;
    }

    @Patch("/:id")
    patch(@Param("id") movieId: string) {
        return `This will patch a movie with id: ${movieId}`;
    }

}
