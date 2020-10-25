import { Controller, Get, Param } from '@nestjs/common';

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
}
