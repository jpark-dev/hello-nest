import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { serialize } from 'v8';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return something";
    }

    @Get("search")
    search(@Query('year') searchInYear:string) {
        return `Searching for a movie made after: ${searchInYear}`;
    }
    
    @Get(":id")
    getOne(@Param("id") movieId: string) {
        return `This will return one item with id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData)
        return movieData;
    }

    @Delete(":id")
    remove(@Param("id") movieId: string) {
        return `This will delete a movie with id: ${movieId}`;
    }

    @Patch(":id")
    patch(@Param("id") movieId: string, @Body() updateData) {
        return {
            updateData: movieId,
            ...updateData,
        }
    }


}
