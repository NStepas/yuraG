import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from './schema/books.schema';
import { CreateBookDto } from './dto/create-books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/')
  async getBooks(): Promise<Books[]> {
    return this.booksService.getBooks();
  }

  @Post('/')
  async createBook(@Body() createBook: CreateBookDto) {
    return this.booksService.createBook(createBook);
  }
}
