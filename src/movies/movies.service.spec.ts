import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll()', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne()', () => {
    it('should return a movie', () => {
      service.createOne({
        title: 'TestMovie',
        genres: ['test'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
    });

    it('should throw 404 error', () => {
      try {
        service.getOne(99);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID: 99 not found.');
      }
    });
  });

  describe('deleteOne()', () => {
    it('deletes a movie', () => {
      service.createOne({
        title: 'TestMovie',
        genres: ['test'],
        year: 2000,
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });

    it('should return 404 error', () => {
      try {
        service.deleteOne(88);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('createOne()', () => {
    it('create a movie', () => {
      expect(service.getAll().length).toEqual(0);
      service.createOne({
        title: 'TestMovie',
        genres: ['test'],
        year: 2000,
      });
      expect(service.getAll().length).toEqual(1);
      const movie = service.getOne(1);
      expect(movie.id).toEqual(1);
      expect(movie.title).toEqual('TestMovie');
      expect(movie.year).toEqual(2000);
    });
  });

  describe('update()', () => {
    it('update movie detail', () => {
      service.createOne({
        title: 'TestMovie',
        genres: ['test'],
        year: 2000,
      });
      service.update(1, { title: 'Updated Test' });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Updated Test');
    });
    it('should return 404 error if the id not exists', () => {
      try {
        service.update(2, { title: 'Updated Test' });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
